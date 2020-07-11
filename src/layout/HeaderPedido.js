import React from 'react'
import {View,StyleSheet} from 'react-native'
import {Text,Thumbnail} from 'native-base'

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
    return(
        <View>
            {/* <Button onPress={ () => navigation.goBack()}>
                <Text style={{flex:1,textAlign:'center'}}>Imprimir Pedidos</Text>
            </Button> */}
         {/* <Button onPress={()=>GeneratePDF()} style={{width:200,alignSelf:'center',padding:20,marginTop:10}} iconLeft light>
               <AntDesign name="printer" size={24} color="white" />  
                <Text  style={{fontFamily:'Roboto-Light',color:'white'}}>Generar PDF</Text>
          </Button> */}
            <View style={estilos.pedidocontainer}>
                <Thumbnail large source={require('../../assets/imagenes/userimage.png')} />
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