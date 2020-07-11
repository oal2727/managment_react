import React from 'react'
import {Container} from 'native-base'
import ListClientes from '../components/Cliente/ListClientes'
import SnackbarComponent from '../layout/Snackbar'
//arreglar el add cliente como icono cliente
import AñadirCliente from '../components/Cliente/AñadirCliente'
//redux

//recuerda que solo permite => {navigation} => para el funcionamiento
//no permite (props,{navigation})
const PageClienteDashboard = ({navigation}) => {


    //enviando navigator a lista cliente para poder empujarlo
    return ( 
           <Container>
        <ListClientes navigation={navigation}/>
            <AñadirCliente />
        <SnackbarComponent  />
      </Container>
     );
}
 


export default PageClienteDashboard;