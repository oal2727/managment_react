import React,{useEffect} from 'react'
import {View,StyleSheet } from 'react-native'
import {Button,Text,Container,Spinner} from 'native-base'
import ListaPedidos from '../components/Pedido/ListPedidos'
import ModalManagment from '../components/Pedido/AñadirPedido'
import SnackbarComponent2 from '../layout/SnackbarTwo'
import HeaderPedido from '../layout/HeaderPedido'
//functionns redux
import {useDispatch} from 'react-redux'
import {TOGGLE_MODAL,DeleteAllPedidos,QuerySpinner} from '../Redux/PedidoDucks'

//redux

const PagePedido = ({route,navigation }) => {
   

    const dispatch = useDispatch()
    const id =route.params.id
    const nombre = route.params.nombre
    const apellido = route.params.apellido
    const direccion = route.params.direccion

    //route y props no pueden ir juntos en el objeti principal
    const AddPedido = () =>{
        dispatch(TOGGLE_MODAL(true))
    }
    const [spiner,setSpinner]=React.useState(true)
    const EliminarAllPedidos = () =>{
        dispatch(QuerySpinner())
        dispatch(DeleteAllPedidos(id))
    }
    const Consultas =() =>{
        // props.navigation.navigate('Consultas')
        // route.push('Consultas')
        navigation.navigate('Consultas',id)
    }
    //trabajando con estados desde page pedido requiere que trabaje con variable de redux
    // const spinnerquery = useSelector(state => state.pedido.spinnerqueryfinal)
    // console.log(spinnerquery)
    return ( 
        <Container>
        
            <Container>
            <HeaderPedido nombre={nombre} apellido={apellido} direccion={direccion} id={id}/>
                    <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                         <Button onPress={() => AddPedido()} success style={{width:110,borderRadius:20,marginLeft:10}}>
                            <Text style={{flex:1,textAlign:'center'}}>Añadir Pedido</Text>
                        </Button>
                        <Button onPress={() => EliminarAllPedidos()} danger style={{width:110,borderRadius:20,marginLeft:10}}>
                            <Text style={{flex:1,textAlign:'center'}}>Eliminar Pedidos</Text>
                        </Button>

                        <Button primary onPress={()=>Consultas()} style={{width:110,borderRadius:20,marginLeft:10,marginRight:10}}>
                            <Text style={{flex:1,textAlign:'center'}}>Consultas</Text>
                        </Button>

                    </View>
                <Container style={{marginTop:10}}>
                        <ListaPedidos dataid={id}/>
                        <ModalManagment dataid={id}/>
                </Container>
            </Container>
             <SnackbarComponent2/>
        </Container>
     );
}

export default PagePedido;
const estilos = StyleSheet.create({
    pedidocontainer:{
        textAlign:'center',
        alignContent:'center',
        alignItems:'center',
        marginTop:15
    },
    pedidoauthor:{
        fontSize:25,
         color:'blue',
         fontFamily:'Montserrat-Light'  
    },
    pedidoslist:{
        marginTop:15
    }
})