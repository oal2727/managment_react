import React, { PureComponent } from 'react'
import {View,Text,Container} from 'native-base'
import {StyleSheet} from 'react-native'
const ListaTallasGlobal = (props) => {
   
    return (
        <View style={{marginTop:5}}>
            {
                props.talla.map((item,index)=>(
                    <View style={estilos.card} key={item.id}>

                   <View style={estilos.cardheader}>
                   <View>
                <Text style={{...estilos.title,marginLeft:20}}>Talla : {item.talla}</Text>
                    </View>
                    <View>
                 <Text style={{...estilos.title2,marginRight:20}}>Unidad: S/{item.unidad}</Text>
                    </View>
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
        marginTop:15,
        padding:2,
        width:340,
        marginRight:10,
        backgroundColor:'#5882FA',
        alignItems:'center',
        alignContent:'center',
        marginLeft:10,
        borderWidth:1,
        borderColor:'#FF8000',
        borderRadius:20,
    },
    title:{
        fontFamily:'Roboto-Light',
        textAlign:'center',
        fontSize:18,
        color:'orange',
        letterSpacing:1.5
    },
    cardheader:{
        flexDirection:'row',
        alignSelf:'center',
        justifyContent:'space-between',
        width:'100%',
        borderBottomColor:'white',
        borderBottomWidth:1,
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