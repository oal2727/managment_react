import React, { useEffect } from 'react'
import {View,StyleSheet,Dimensions,Image} from 'react-native'
import {Badge,Container,Content,Card,Button,Text} from 'native-base'
import moment from 'moment'
const {width,height} = Dimensions.get('window')
const CardQuery = (props) => {
  
    return (  
         <View style={{alignSelf:'center',marginTop:10,backgroundColor:'orange',width:330,height:null,marginBottom:10,borderRadius:10}}>
                  <View>
                 <Image source={require('../../assets/imagenes/backgroundImage.jpg')} style={{height: 110, width: null}}/>
                     <Badge success style={estilos.badgeposition}>
                        <Text>#{props.index+1} Pedido</Text>
                    </Badge>
               
            </View>
            <View style={estilos.cardbody}>
                <Text style={{textAlign:'center',fontSize:19,color:'white'}}>{props.item.talla} {props.item.sexo}</Text>
                <View style={{flexDirection:'row',marginTop:10}}>
                    <Text style={{color:'black',width:100}}>Color : <Text style={{color:'red'}}>{props.item.color}</Text></Text>
                    <Text style={{color:'black',marginLeft:10}}>Unidades : <Text style={{color:'red'}}>{props.item.unidad}</Text></Text>
                    <Text style={{color:'black',marginLeft:10}}>Marca : <Text style={{color:'red'}}>{props.item.marca}</Text></Text>
                </View>
                <View style={{marginTop:8}}>
                    <Text style={{textAlign:'center',color:'green',fontSize:18}}>Detalle :</Text>
            {
                props.item.nota === '' ?
                <Text style={{textAlign:'center'}}>No hay comentario</Text>
                :
                <Text style={{textAlign:'center'}}>{props.item.nota}</Text>
            }
                </View>
                <Badge light style={{...estilos.badgeposition,top:-30,right:0}}>
                        <Text>Fecha : {moment(props.item.createdAt.toDate()).format('MM/DD/YYYY')}</Text>
                    </Badge>

                
            </View>
        </View> 
    );
}
const estilos = StyleSheet.create({
    cardquery:{
        borderWidth:0.2,
        color:'orange',
    },
    cardbody:{
        alignSelf:'center',
        padding:10
    },
    badgeposition:{
        position:'absolute',
        opacity:0.7
    }
}) 

export default CardQuery;