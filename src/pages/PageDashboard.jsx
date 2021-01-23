import React, { useEffect } from 'react'
import {Text,Thumbnail} from 'native-base'
import {useDispatch,connect} from 'react-redux'
import {StyleSheet,ImageBackground,View,Dimensions,StatusBar} from 'react-native'
import {TotalClientes,TotalHombres,TotalMujeres} from '../Redux/ClienteDucks'
import CircleComponent from '../layout/CircleDashboard'
const PageDashboard = (props) => {
    const dispatch = useDispatch()
    useEffect(() => {
       dispatch(TotalClientes())
       dispatch(TotalHombres())
       dispatch(TotalMujeres())
    }, [])
    const {width,height} = Dimensions.get('window') 
    const totalclientes=props.totalclientes
    const totalhombres = props.totalhombres
    const totalmujeres = props.totalmujeres
    return (
        
        <View style={{flex:1,backgroundColor:'white',justifyContent:'flex-end'}}>
           {/* <Text style={estilos.text}>Gestion de Pedidos</Text>  */}
                <ImageBackground style={{height:null,width:null,flex:1}}
                source={require('../../assets/imagenes/background_light.png')}>
                    <View style={estilos.container}>
                        <Thumbnail style={{width:"70%",height:120}}  source={require('../../assets/imagenes/logo.jpg')} />
                    </View>
                    <Text style={{textAlign:"center",marginTop:50,color:"purple",fontWeight:"bold",fontSize:16}}>Registro de Clientes Registrados</Text>
                    <View style={{height:height/4,flexDirection:'row'}}>
                <CircleComponent title={'Hombres'} total={totalhombres}/>
                   <CircleComponent title={'Clientes'} total={totalclientes}/>
                   <CircleComponent title={'Mujeres'} total={totalmujeres}/>
                </View>
                </ImageBackground>
               
            
        </View>
      );
}
 
const mapPropsToState = (state) =>{
    return{
        totalclientes:state.cliente.totalclientes,
        totalhombres:state.cliente.totalhombres,
        totalmujeres:state.cliente.totalmujeres
    }
}
export default connect(mapPropsToState)(PageDashboard);
const estilos = StyleSheet.create({
    container:{
        textAlign:'center',
        alignContent:'center',
        alignItems:'center',
        marginTop:150
    }
})