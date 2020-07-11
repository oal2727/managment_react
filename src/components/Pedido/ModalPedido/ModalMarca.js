import React from 'react'
import {Modal,View,Image,Dimensions,TouchableOpacity,StyleSheet} from "react-native"
import {Button,Text,Icon} from 'native-base'
import { AntDesign } from '@expo/vector-icons'; 
const {width,height} = Dimensions.get('window') 
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
            <View style={{marginTop:20}}>
                    <Text style={{fontSize:23,margin:5,textAlign:'center',fontFamily:'Roboto-Light',color:'orange'}}>Lista de Marcas</Text>
                    <View style={styles.boxbody}>
                        <TouchableOpacity style={styles.boximage} onPress={()=>MostrarImagen("Nike")}>
                            <Text style={styles.boxtitle}>Marca : Nike</Text>
                            <Image
                            style={styles.imagestyle}
                            source={require('../../../../assets/imagenes/Logos/LogoNike.jpg')}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.boximage} onPress={()=>MostrarImagen("Adidas")}>
                            <Text style={styles.boxtitle}>Marca : Adidas</Text>
                            <Image
                            style={styles.imagestyle}
                            source={require('../../../../assets/imagenes/Logos/LogoAdidas.jpeg')}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.boxbody}>
                            <TouchableOpacity style={styles.boximage} onPress={()=>MostrarImagen("Reebook")} >
                            <Text  style={styles.boxtitle}>Marca : Rebook</Text>
                            <Image
                            style={styles.imagestyle}
                            source={require('../../../../assets/imagenes/Logos/LogoReebok.jpg')}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity  style={styles.boximage} onPress={()=>MostrarImagen("Fila")}>
                            <Text style={styles.boxtitle}>Marca : Fila</Text>
                            <Image
                            style={styles.imagestyle}
                            source={require('../../../../assets/imagenes/Logos/LogoFila.png')}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.boxbody}>
                            <TouchableOpacity style={styles.boximage} onPress={()=>MostrarImagen("Puma")}>
                            <Text style={styles.boxtitle}>Marca : Puma</Text>
                            <Image
                            style={styles.imagestyle}
                            source={require('../../../../assets/imagenes/Logos/LogoPuma.jpeg')}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity  style={styles.boximage} onPress={()=>MostrarImagen("Jordan")}>
                            <Text style={styles.boxtitle}>Marca : Jordan</Text>
                            <Image
                            style={styles.imagestyle}
                            source={require('../../../../assets/imagenes/Logos/LogoJordan.jpeg')}
                            />
                        </TouchableOpacity>
                    </View>

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
        height:150,
        borderWidth:2,
        borderColor:'#2E2E2E',
        padding:25
    },
    imagestyle:{
      padding:5,
        alignSelf:'center',
        borderWidth:2,
        marginTop:10
    },
    boxtitle:{
        color:'green',
        fontFamily:'Roboto-Light',
        fontSize:17,
        textAlign:'center'

    },
})