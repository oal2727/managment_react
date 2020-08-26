import React, { useEffect } from 'react'
import {View,StyleSheet,FlatList,Image} from 'react-native'
import { Container,Button, Content,Badge, Card, CardItem, Text, Body,Spinner } from "native-base";
import { AntDesign } from '@expo/vector-icons'; 
import {useDispatch,connect} from 'react-redux'
import {GlobalStyles} from '../../global/estilos'
import {ListarPedidos,EliminarPedido,QuerySpinner} from '../../Redux/PedidoDucks'
import { FontAwesome } from '@expo/vector-icons'; 
import {TOGGLE_MODAL,EditPedido,TOOGLE_FILE,TOOGLE_FILENAME,TOOGLE_IMAGEOLD} from '../../Redux/PedidoDucks'



//unico problema flat list es scrollview
//estoy creando un componnet scrollview
const ListaPedidos = (props) => {
    const dispatch = useDispatch()
  const {setImage} = props

    const Delete = (item) =>{
        dispatch(QuerySpinner())
        dispatch(EliminarPedido(props.dataid,item))
        // dispatch(SumPedido(props.dataid))
    }
    const EditarPedido = (item)=>{

        dispatch(TOGGLE_MODAL(true))
        //IMAGES
        dispatch(TOOGLE_FILE(item.imageUrl))
        dispatch(TOOGLE_FILENAME(item.image))
        dispatch(TOOGLE_IMAGEOLD(item.image))
        dispatch(EditPedido(item))
        setImage(item.imageUrl)
        console.log("editando dato",item)
    }

    useEffect(() => {
        dispatch(ListarPedidos(props.dataid))
        // dispatch(SumPedido(props.dataid))
        // console.log(props.pedidos)
     }, [])
     //arreglar solo en imagenes
    return (  
        <Container>
                        {
                            props.spinnerqueryfinal ?
                            <View style={GlobalStyles.container}>
                            <Spinner style={{marginTop:5}} color="blue"/>
                            <Text style={{textAlign:'center',fontFamily:'Roboto-Light',fontSize:18}}>Loading data...</Text>
                              </View>
                            :
                            <Container>
                                {
                                    props.spinnerquery ?
                                    <Container>

                                    <Spinner color="green" style={{marginTop:15}} />
                                    <Text style={{textAlign:'center',fontFamily:'Roboto-Light',fontSize:18}}>Ejecuntando Consulta...</Text>
                                    </Container>
                                    :
                                    <Container>
                                        <Text style={{textAlign:'center',color:'dodgerblue',fontWeight:'bold',fontSize:18}}>
                                        {/* Total de Buzos: {props.totalpedido} */}
                                        Total de Pedidos {props.cantidadpedido}
                                      </Text>
                                         <FlatList
                                    data={props.pedidos}
                                    keyExtractor={(item) => item.id}
                                    renderItem={({item,index}) => (
                                        <Content padder>
                                        <Card>
                                          <CardItem bordered>
                                              {/* pedido */}
                                         <View style={{flexDirection:'row'}}>
                                             <View>
                                                <Badge>
                                                <Text style={{fontFamily:'Roboto-Light'}}>{index+1} Pedido</Text>
                                                </Badge>
                                                 {/* talaa here*/}
                                             <View style={{flexDirection:'row',marginTop:10}}>
                                                     <Text style={estilos.pedidotitle}>Talla:</Text>
                                                    <Text style={estilos.pedidoresponse}>{item.talla}</Text>
                                             </View>
                                                   {/* color here*/}
                                             <View style={{flexDirection:'row'}}>
                                                        <Text style={estilos.pedidotitle}>Color:</Text>
                                                        <Text style={estilos.pedidoresponse}>{item.color}</Text>
                                             </View>
                                                     {/* marca here*/}
                                               <View style={{flexDirection:'row'}}>
                                                    <Text style={estilos.pedidotitle}>Marca:</Text>
                                                        <Text style={estilos.pedidoresponse}>{item.marca}</Text>
                                              </View>
                                              <View style={{flexDirection:'row'}}>
                                                <Text style={estilos.pedidotitle}>Sexo:</Text>
                                                    <Text style={estilos.pedidoresponse}>{item.sexo}</Text>
                                              </View>
                                             </View>
                                              
                                                 <Image
                                                 style={{width:120,height:130,marginLeft:20,borderColor:'green',borderWidth:3,borderRadius:15}}
                                                 source={{uri:item.imageUrl}}
                                                 />     
                                         </View>
                                          </CardItem>
                                          <CardItem bordered>
                                          <Body>
                                              {/* color here */}
                                          <View style={{flexDirection:'row'}}>
                                                    <Text style={estilos.pedidotitle}>Unidades:</Text>
                                                <Text style={{...estilos.pedidoresponse}}>{item.unidad}</Text>
                                             </View>
                                              {/* */}
                                              <View>
                                                  <Text style={estilos.pedidotitle}>Critica del Producto:</Text>
                                                  {
                                                      item.nota === "" ? 
                                                      <Text  style={{fontFamily:'Montserrat-Light',fontSize:15}}>No hay Critica Ingresada</Text>
                                                      :
                                                      <Text 
                                                    style={{fontFamily:'Montserrat-Light',fontSize:15}}>
                                                        {item.nota}
                                                  </Text>
                                                  }
                                              </View>
                                              {/*acceder al item image del uusario */}
                                           
                                          </Body>
                                          </CardItem>
                                          <CardItem footer bordered style={{justifyContent:'space-between'}}>
                                             <Button warning onPress={ () =>EditarPedido(item)}>
                                            <FontAwesome  style={{textAlign:'center',marginLeft:5}} name="edit" size={35} color="white" />
                                                <Text style={{fontFamily:'Roboto-Light',color:'white'}}>Editar</Text>
                                                    </Button>

                                              <Button danger style={{padding:5}} onPress={() => Delete(item.id) }>    
                                                  <AntDesign name="delete" size={24} color="white" />
                                                  <Text>Eliminar</Text>
                                              </Button>
                                          </CardItem>
                                      </Card>
                                      </Content>
                                    )}
                                    />
                                    </Container>
                                }
                                  
                            </Container>
                        }
                    </Container>
                

    );
}
 
const mapPropsToState = (state) =>{
    return{
        pedidos:state.pedido.pedidos,
        loading:state.pedido.loading,
        spinnerquery:state.pedido.spinnerquery,
        totalpedido:state.pedido.totalpedido,
        spinnerqueryfinal:state.pedido.spinnerqueryfinal,
        cantidadpedido:state.pedido.cantidadpedido
    }
}
 

export default connect(mapPropsToState)(ListaPedidos);

const estilos = StyleSheet.create({
    pedidotitle:{
       color:'green',
       fontFamily:'Roboto-Italic',
       fontSize:17
    },
    pedidoresponse:{
        color:'black',
        fontFamily:'Montserrat-Light',
        fontSize:16,
        marginLeft:10
    }
})
