import React from 'react'
import {Modal,View,Image,Dimensions,TouchableOpacity,StyleSheet,FlatList} from "react-native"
import {Button,Text,Icon} from 'native-base'
import { AntDesign } from '@expo/vector-icons'; 
const ModalMarca = (props) => {
    const MostrarImagen=props.MostrarImagen
    return ( 
    <Modal
    visible={props.modalMarca}
    animationType="slide"
    >
        <View>
                <Button iconLeft light onPress={()=>props.setModalMarca(false)}>
                    <Icon name='arrow-back' />
                    <Text>Back</Text>
                </Button>
            <View style={{marginTop:10,alignSelf:'center'}}>
                    <Text style={{fontSize:23,textAlign:'center',fontFamily:'Roboto-Light',color:'orange'}}>Lista de Marcas</Text>
                    <FlatList 
                        data={props.marcas}
                          numColumns={2}
                          keyExtractor={item => item.id}
                          renderItem={({item}) => ( 
                            <TouchableOpacity style={styles.boximage} onPress={()=>MostrarImagen(item.nombre)}>
                            <Text style={styles.boxtitle}>{item.nombre}</Text>
                            <Image
                            style={styles.imagestyle}
                            source={item.imagen}
                            />
                        </TouchableOpacity>
                          )}
                        />

            </View>
            
        </View>
    </Modal> 
    );
}
 
export default ModalMarca;

const styles = StyleSheet.create({
    boxbody:{
        flexDirection:'row',
        justifyContent:'space-around',
        padding:5,
    },
    boximage:{
        width:170,
        height:145,
        borderWidth:2,
        marginLeft:5,
        marginTop:20,
        padding:25
    },
    imagestyle:{
      padding:5,
        alignSelf:'center',
        borderWidth:2,
        marginTop:5
    },
    boxtitle:{
        color:'green',
        fontFamily:'Roboto-Light',
        fontSize:14,
        textAlign:'center'

    },
})