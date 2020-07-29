import React from 'react'
import {View,StyleSheet} from 'react-native'
import {Button,Text} from 'native-base'
import {Thumbnail} from 'native-base'
import { AntDesign } from '@expo/vector-icons'; 
import PDFComponent from '../components/Pedido/GeneratePDF/PDF'
const HeaderPedido = (props) =>{
    const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
    
    // const GeneratePDF= ()=>{
    //     const htmlString=`<html><head></head><body><h3>Hello World</h3></body></html>`
    //     console.log("generate pdf...")
    //     Print.printAsync({
    //         orientation: Print.Orientation.portrait,
    //         // markupFormatterIOS: `
    //         html: htmlString,
    //     })

    // }
    const id = props.id
    return(
        <View>
        <PDFComponent id={id} nombre={props.nombre} apellido={props.apellido} direccion={props.direccion}/>
            <View style={estilos.pedidocontainer}>
                <Text style={estilos.pedidoauthor}>{props.nombre} {props.apellido}</Text>
                <Text style={estilos.pedidoauthor}>{props.direccion}</Text>
            </View>
        </View>
    )
}

export default HeaderPedido;

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