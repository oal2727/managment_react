import React,{useEffect} from 'react'
import {View,StyleSheet,FlatList,TouchableOpacity,Alert } from 'react-native'
import CardQuery from '../../layout/CardQuery'
import {Button,Text,Container} from 'native-base'
import { FontAwesome } from '@expo/vector-icons';
//querys
import FechaQuery from './ModalConsultas/FechaQuery'
import MarcaQuery from './ModalConsultas/MarcaQuery'
import {useDispatch,connect} from 'react-redux'
import {ToogleMarca,ToogleFecha} from '../../Redux/ConsultasDucks'
import {ListarPedidos} from '../../Redux/PedidoDucks'
import {SpinnerQueryFinal} from '../../Redux/PedidoDucks'

const ListConsultas = (props) => {

    const dispatch = useDispatch()
    const [marca,setMarca] = React.useState("null")
    const id = props.id //id del cliente
    useEffect(() => {
        dispatch(ListarPedidos(id)) //funcion de obtener pedidos con id del cliente
    }, [])
    const RefreshList = ()=>{
        console.log("refresh")
      dispatch(SpinnerQueryFinal(true))
        dispatch(ListarPedidos(id))
    }
    //uso de redux para consultas base de modelos
    return (
        <Container>
            <View style={{flexDirection:'row',alignSelf:'center',marginTop:10}}>
                <Button style={{width:150}}  onPress={() =>  dispatch(ToogleFecha(true))}>
                    <Text style={{flex:1,textAlign:'center'}}>Buscar por Fecha</Text>
                </Button>
              
                <TouchableOpacity onPress={()=>RefreshList()} style={{marginTop:10,marginLeft:10}} >
                <FontAwesome name="refresh" size={35} color="black" />
                </TouchableOpacity>

                <Button style={{width:150,marginLeft:10}} onPress={() =>dispatch(ToogleMarca(true))}>
                    <Text style={{flex:1,textAlign:'center'}}>Buscar por Marca</Text>
                </Button>
                
                  {/* -- */}
                </View>
        <View>
        {
            props.spinnerquerymanagment ? 
            <Text>Loading Data ..</Text>
            :
            <View>
               {
                   props.pedidos.length ? 
                   <View>
                      <View style={{alignSelf:'center',flexDirection:'row'}}>
                            <Text style={{marginRight:50}}>Total Consulta : <Text style={{color:'red',fontSize:19}}>{props.totalmarcas}</Text> </Text>
                            <Text style={{marginLeft:25}}>Total Pedidos : <Text style={{color:'red',fontSize:19}}>{props.cantidadpedido}</Text></Text>
                          </View>
                    <FlatList
                data={props.pedidos}
                keyExtractor={item => item.id}
                renderItem={({item,index})=>(
                    <Container style={{height:null}}>
                        <CardQuery item={item} index={index}/>
                    </Container>    
                
                )}
                />
                 </View>
                :
                <Text style={{textAlign:'center',fontSize:19,marginTop:10}}>No hay datos existentes</Text>

               }
        </View>
        
        }

        </View>


        
        {/* here modals queryas */}
            <FechaQuery id={id}/>
            <MarcaQuery marca={marca} id={id} setMarca={setMarca}/>
        </Container>
      );
}
 
 
const estilos = StyleSheet.create({

    netoPedidos:{
        textAlign:'center',
        color:'green',
        fontFamily:'Roboto-Light',
        marginTop:5
    }
})
const mapPropsToState = (state) =>{
    return{
        pedidos:state.pedido.pedidos,
        spinnerquerymanagment:state.pedido.spinnerquerymanagment,
        totalmarcas:state.pedido.totalmarcas,
        cantidadpedido:state.pedido.cantidadpedido
    }
}
export default connect(mapPropsToState)(ListConsultas);