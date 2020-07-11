import React from 'react'
import {View,Text,StyleSheet,Image} from 'react-native'
import {Thumbnail} from 'native-base'
const BoxInput = (props)=>{
    const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";

    return(
        <View style={styles.container}>
            <View style={styles.Box}>
                   <View style={styles.header}>
                    <View style={styles.BoxEncabezado}>
                            <Text style={styles.title}>{props.title}</Text>
                        </View>
                        <View> 
                          {props.children}
                        </View>
                   </View>
                   <View style={styles.BoxBody}>
                    {
                        props.logo === "" ? 
                        <Text style={{fontSize:19,marginTop:20,color:'red',fontFamily:'Roboto-Light'}}>Marca here...</Text>
                        :
                        <Image
                        source={props.logo}
                         />
                    }
                   </View>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container:{
        marginLeft:10,
        marginRight:10,
        alignSelf:'center',
        marginTop:10
    },
    Box:{
        padding:10,
        width:300,
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10
    },
    title:{
        color:'green',
        margin:10,
        fontSize:20,
        fontFamily:'Roboto-Light'
    },
    BoxEncabezado:{

    },
    BoxBody:{
        padding:5,
        alignSelf:'center'
    }
})

export default BoxInput

