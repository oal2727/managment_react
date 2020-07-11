import React, { PureComponent } from 'react'
import {GlobalStyles} from '../global/estilos'
import { Container, Header, Left, Body, Right, Button, Icon, Segment, Content, Text } from 'native-base';
//lista de tallas
import ListTallaFirst from '../components/Talla/ListTallaFirst'
import ListTallaSecond from '../components/Talla/ListTallaSecond'
import ListaTallaThree from '../components/Talla/ListTallaThree'
import ListaTallaFour from '../components/Talla/ListTallaFour'
import ListaTallaFive from '../components/Talla/ListTallaFive'

import {StyleSheet} from 'react-native'


//estados para las paginas
const PageList = () => {

    const [statePage,setstatePage] = React.useState(1)

    const selectComponent = () =>{
        if(statePage === 1){
            return(
                <ListTallaFirst/>
            )
        }
        if(statePage === 2){
            return(
               <ListTallaSecond/>
            )
        }
        if(statePage === 3){
            return(
               <ListaTallaThree/>
            )
        }
        if(statePage === 4){
            return(
               <ListaTallaFour/>
            )
        }
        if(statePage === 5){
            return(
               <ListaTallaFive/>
            )
        }
    }
    return (
        <Container style={{marginTop:30}}>
            <Text style={styles.titletalla}>Lista de Tallas</Text>
              <Segment style={{backgroundColor:'orange'}}>
              <Button first  onPress={ () => setstatePage(1)}>
                  <Text style={styles.title}
                  >2-6</Text>
                  </Button>
              <Button last  onPress={ () => setstatePage(2)}>
                  <Text style={styles.title}>8-12</Text>
                  </Button>
                <Button last  onPress={ () => setstatePage(3)}>
                  <Text style={styles.title}>14-16</Text>
                </Button>

                <Button last  onPress={ () => setstatePage(4)}>
                  <Text style={styles.title}>S-M-L</Text>
                </Button>

                   <Button last  onPress={ () => setstatePage(5)}>
                  <Text style={styles.title}>XL</Text>
                </Button>

            </Segment>
            <Container>
                {
                    selectComponent()
                }
            </Container>
      </Container>
      );
}
 
export default PageList;

const styles=StyleSheet.create({
    titletalla:{
        textAlign:'center',
        fontSize:25,
        color:'orange',
        letterSpacing:1.5
    },
    title:{
        fontFamily:'Roboto-Light',
        width:68,
        textAlign:'center',
    }
})