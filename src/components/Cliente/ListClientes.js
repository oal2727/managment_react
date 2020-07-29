import React,{useEffect} from 'react'
import {
      FlatList,View
    } from 'react-native'
import { Container,
  Button,
   Content,Badge, Card, CardItem,
    Text, Body,Spinner 
  } from "native-base";
import SearchCliente from './SearchCliente'
//add icon cliente
import {GlobalStyles} from '../../global/estilos'
import IconCliente from '../../layout/IconCliente'
import { Ionicons } from '@expo/vector-icons'; 
//icons edit,delete,flecha
import { MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
//redux
import {useDispatch,connect} from 'react-redux'
import {DeleteClient,ShowModal,TotalHombres,TotalMujeres,
  EditarCliente,MessageSnackbar,ListClient,
  QuerySpinner,TotalClientes,BuscarCliente} from '../../Redux/ClienteDucks'
  import {QuerySpinnerFinal} from '../../Redux/PedidoDucks'
//flat list
const ListClientes = (props) => {

  const [nombre,setNombre] = React.useState('')
  //redux method
  const dispatch = useDispatch()
  const Editar = (param) =>{
    dispatch(EditarCliente(param))
    dispatch(TotalHombres())
    dispatch(TotalMujeres())
    dispatch(ShowModal())
  }
  useEffect(() => {
    dispatch(ListClient())
    console.log(props.clientes)
},[])

  const Delete = (id) =>{
    dispatch(QuerySpinner())
    dispatch(DeleteClient(id))
    dispatch(TotalClientes())
    dispatch(TotalHombres())
    dispatch(TotalMujeres())
  }
  const handleInputChange = (newText) =>{
    setNombre(newText)
    if(0 < newText.length){
        dispatch(QuerySpinner())
      dispatch(BuscarCliente(newText))
    
    }else{
      dispatch(QuerySpinner())
      dispatch(ListClient())
    }
  }
  const GeneratePedido = (item)=>{
    dispatch(QuerySpinnerFinal(true))
    props.navigation.navigate('Pedidos',item)

  }
  // console.log(props.spinnerquery2)
  const loading = props.spinner

    return ( 
        <Container>
            <SearchCliente nombre={nombre} setNombre={setNombre} handleInputChange={handleInputChange}/>
            {
              props.spinnerquery ? 
              <View style={GlobalStyles.container}>
                 <Spinner color="blue"/>
                 <Text style={{textAlign:'center',fontFamily:'Roboto-Light',fontSize:18}}>Ejecutando consulta...</Text>
              </View>
              :
              <Container>
                 {
              loading ?
              <Container style={{alignItems:'center'}}>
                <Spinner />
              <Text style={{textAlign:'center'}}>Cargando Datos..</Text>
                </Container>
              :
              <FlatList
              data={props.clientes}
              keyExtractor={(item) => item.id}
              renderItem={({item,index}) => (
                 <Content padder>
                    <Card>
                    <CardItem header bordered>
                    <Container style={{flexDirection:'row',justifyContent:'space-between',height:40}}>
                   <Badge success style={{marginTop:10}}>
                      <Text>{index+1}</Text>
                    </Badge>
                    {/* navigation container */}
           
                    <Button warning onPress={() => GeneratePedido(item)}>
                           <Text style={{fontFamily:'Roboto-Light'}}>Generar pedido</Text>
                           <MaterialIcons style={{marginRight:10}} name="send" size={24} color="white" />
                      </Button>
                      {/* fin navigator */}
                     </Container>
                    </CardItem>
                    <CardItem bordered>
                      <Body>
                      <Text style={{fontSize:18,color:'green',fontFamily:'Montserrat-LightItalic'}}>
                          Nombre y Apellido:
                          </Text>
                        <Text style={{fontSize:16,color:'#424242',fontFamily:'Montserrat-Light'}}>
                            {item.nombre} {item.apellido}
                            </Text>
                        <Text style={{fontSize:18,color:'green',fontFamily:'Montserrat-LightItalic'}}>
                              Direccion:
                              </Text>
                          <Text style={{fontSize:16,color:'#424242',fontFamily:'Montserrat-Light'}}>
                              {item.direccion}
                              </Text>
                          <Text style={{fontSize:18,color:'green',fontFamily:'Montserrat-LightItalic'}}>Sexo</Text>
                          <Text style={{fontSize:16,color:'#424242',fontFamily:'Montserrat-Light'}}>
                            {item.sexo}
                          </Text>

                      </Body>
                    </CardItem>
                    <CardItem footer bordered>
                      <Container style={{flexDirection:'row',justifyContent:'space-between',height:45}}>
                      
                        <Button warning onPress={() => Editar(item)}>
                        <FontAwesome  style={{textAlign:'center',marginLeft:5}} name="edit" size={35} color="white" />
                      <Text style={{fontFamily:'Roboto-Light',color:'white'}}>Editar</Text>
                        </Button>


                      <Button danger onPress={() =>Delete(item.id)}>
                      <MaterialIcons  style={{textAlign:'center'}} name="delete" size={35} color="white" />
                      <Text  style={{fontFamily:'Roboto-Light',color:'white'}}>Eliminar</Text>
                      </Button>

                

                      </Container>
                    </CardItem>
                  </Card>
                  </Content>
                  )}
                  />
            }
              </Container>
            }

           
        {/* icon cliente add  and touchable dismiss*/}
        
        <IconCliente>
        <Ionicons onPress={()=> dispatch(ShowModal())} name="ios-add" size={40} color="white" />
        </IconCliente>
      

      </Container>
      
     );
}
 


const mapPropsToState = (state) =>{
  return{
    spinner: state.cliente.spinner,
    clientes:state.cliente.clientes,
    spinnerquery: state.cliente.spinnerquery,
  }
}

export default connect(mapPropsToState)(ListClientes);
