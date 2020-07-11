import React, { PureComponent } from 'react'
import {View,Text,Container} from 'native-base'
import {StyleSheet} from 'react-native'
const ListaTallasGlobal = (props) => {
   
    return (
        <View style={{marginTop:5}}>
            {
                props.talla.map((item,index)=>(
                    <View style={estilos.card} key={item.id}>
                    <View style={estilos.cardtitle}>
                    <Text style={estilos.title}>{item.talla}</Text>
                    </View>
                    <View style={estilos.cardtitle}>
                 <Text style={estilos.title2}>Unidad: S/{item.unidad}</Text>
                    </View>
                    <View style={estilos.cardfooter}>
                        <View style={{flexDirection:'row',justifyContent:'space-between',flex:1}}>
                           
                           <View style={estilos.footerprices}>
                            <Text style={estilos.footertext}>3</Text>
                           <Text style={estilos.footertext}>unidades</Text>
                           <Text style={estilos.footertext}>S/{item.costo1}</Text>
                           </View>
    
                            <View style={estilos.footerprices}>
                            <Text style={estilos.footertext}>4</Text>
                           <Text style={estilos.footertext}>unidades</Text>
                           <Text style={estilos.footertext}>S/{item.costo2}</Text>
                           </View>
    
                           <View style={estilos.footerprices}>
                           <Text style={estilos.footertext}>6</Text>
                           <Text style={estilos.footertext}>unidades</Text>
                           <Text style={estilos.footertext}>S/{item.costo3}</Text>
                           </View>
    
                           <View style={{padding:5}}>
                           <Text style={estilos.footertext}>1</Text>
                           <Text style={estilos.footertext}>Docena</Text>
                           <Text style={estilos.footertext}>S/{item.costo4}</Text>
                           </View>
    
                        </View>
                    </View>
                </View>
                ))
            }
           
        
        
        </View>
      );
}
 
export default ListaTallasGlobal;

const estilos = StyleSheet.create({
    card:{
        marginTop:5,
        padding:2,
        width:300,
        backgroundColor:'#5882FA',
        alignItems:'center',
        alignContent:'center',
        marginLeft:25,
        borderWidth:1,
        borderColor:'#FF8000',
        borderRadius:20,
    },
    cardtitle:{
        padding:5,
        borderBottomColor:'white',
        borderBottomWidth:2,
        width:'100%',
    },
    title:{
        fontFamily:'Roboto-Light',
        textAlign:'center',
        fontSize:23,
        color:'orange',
        letterSpacing:1.5
    },
    title2:{
        fontFamily:'Roboto-Light',
        textAlign:'center',
        fontSize:20,
        color:'white'
    },
    cardfooter:{
        flexDirection:'row'
    },
    footerprices:{
        padding:5,
        borderRightWidth:1,
        borderRightColor:'white'
    },
     footertext:{
        fontFamily:'Roboto-Light',
        color:'white',
        textAlign:'center',
        alignItems:'center',
        color:'#000000',
     }

})