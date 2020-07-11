import React from 'react'
import {Modal,View,StyleSheet,ImageBackground,Dimensions,FlatList,TouchableOpacity} from 'react-native'
import {Button,Text,Icon,Thumbnail,Container} from 'native-base'
const ModalColor = (props)=>{
    const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
    const {width,height} = Dimensions.get('window') 
    const color = props.color
    //problema de background usar desde el modal anterior
    const columns=2;
    return(               
    <Modal
    visible={props.modalColor}
    >
          <Container>
                <Button iconLeft light onPress={()=>props.setModalColor(false)}>
                    <Icon name='arrow-back' />
                    <Text>Back</Text>
                </Button>
                <Text style={{margin:5,color:'orange',fontSize:23,textAlign:'center'}}>Paleta de Colores:</Text>
                <Container>
                    <FlatList
                // contentContainerStyle={{ flexDirection: 'column'}}
                data={color}
                numColumns={columns}
                // showsVerticalScrollIndicator={false}
                // showsHorizontalScrollIndicator={false}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => (
                 <View style={{width:width/columns}} >
                     <ImageBackground
                     style={{...estilos.container}}
                     source={item.imagen}
                     />
                   <Text style={estilos.textcolor}>{item.nombre}</Text>
                   
                   </View>
          
                    )}
                    />
                  </Container>

        </Container>
    </Modal>
   )
}
export default ModalColor

const estilos = StyleSheet.create({
    container:{
        height:120,
        backgroundColor:'red',
        flexDirection:'row',
        display:'flex'
    },
    flatlist:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor:'yellow'
    },
    textcolor:{
        textAlign:'center',
        color:'#1C1C1C',
        position:'absolute',
        color:'white',
        alignSelf:'center',
        fontSize:20,
        padding:5,
        marginTop:40,
        fontFamily:'Roboto-Light'
    },
    vista:{
        margin: 5,
        minWidth: 170,
        maxWidth: 223,
        height: 304,
        maxHeight:304,
    }
})