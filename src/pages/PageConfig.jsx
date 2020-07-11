import React  from 'react'
import {Container,Text,H1,Card, CardItem, Body } from 'native-base'
import {StyleSheet} from 'react-native'
import {GlobalStyles} from '../global/estilos'
import * as Network from 'expo-network';



const PageConfig = () => {

    const [estado,setEstado] = React.useState(false)

    const EstadoConexion = async() =>{
     const state = await Network.getNetworkStateAsync();
        if(state.isConnected){
            setEstado(true)
        }else{
            setEstado(false)
        }
    }
    
    React.useEffect(() => {
        EstadoConexion()
    }, [])


    return (
    <Container>
        <Container style={styles.config}>
            <H1 style={{color:'dodgerblue'}}>Estado de conexion</H1>
            <H1 style={{color:'dodgerblue'}}>a Internet:</H1>

            <Container style={styles.estado}>
           {
               estado ? 
               <Text style={styles.statetitle}>Conectado</Text>
               :
               <Text style={styles.statetitle}>Sin Conexion</Text>
           }
            </Container>
        </Container>
        <Container style={{marginTop:50}}>
        <Card style={{marginLeft:15,marginRight:15}}>
            <CardItem header>
              <Text>Notas:</Text>
            </CardItem>
            <CardItem>
              <Body>
            <Text style={{fontFamily:'Roboto-Light'}}>1. Tener en cuenta el estado del internet para el funcionamiento</Text>
 
              </Body>
            </CardItem>
            <CardItem footer>
              <Text style={{fontWeight:'bold'}}>Desarrollado por Dash166</Text>
            </CardItem>
         </Card>
         </Container>
     </Container>
      );
}
 
export default PageConfig;

const styles= StyleSheet.create({
    title:{
        fontFamily:'Roboto-Light',
        textAlign:'center',
        marginTop:50,
        color:'green'
    },
    config:{
        marginTop:50,
        textAlign:'center',
        alignItems:'center'
    },
    estado:{
        marginTop:80,
    },
    statetitle:{
        color:'green',
        fontFamily:'Roboto-Light',
        letterSpacing:2,
        fontSize:35
    }
})