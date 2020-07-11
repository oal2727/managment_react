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
                source={require('../../assets/imagenes/backgroundImage.jpg')}>
                    <View style={estilos.container}>
                        <Text style={{color:'white',fontFamily:'Roboto-Light',fontSize:35}}>Gestion de pedidos</Text>
                        <Text style={{color:'white',marginTop:50,fontFamily:'Roboto-Light',fontSize:25}}>Welcome Usuario</Text>
                        <Thumbnail   large source={require('../../assets/user.png')} />
                    </View>
                </ImageBackground>
                <View style={{height:height/4,flexDirection:'row'}}>
                <CircleComponent title={'Total de Hombres'} total={totalhombres}/>
                   <CircleComponent title={'Total de Clientes'} total={totalclientes}/>
                   <CircleComponent title={'Total de Mujeres'} total={totalmujeres}/>
                 
                </View>
            
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