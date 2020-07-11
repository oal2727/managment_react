import React,{useEffect,useState} from 'react'
import {View,Image,TouchableOpacity} from 'react-native'
import {Text} from 'native-base'
import { MaterialIcons } from '@expo/vector-icons'; 
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
const ShowImagen = (props) => {
  const prop = props.prop
  //conincide solo permisos para nandroid
  // const [image,setImage] = useState(null)
    useEffect(() => {
        const { status } = Permissions.askAsync(Permissions.CAMERA_ROLL);       
        if (status !== 'granted') {
          console.log("problem for show images")
        }
     }, [])
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
        if (!result.cancelled) {
          // setImage(result.uri)
          props.setImage(result.uri);
          console.log(result.uri)
       }};
    return (
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity style={{width:100,height:50,marginLeft:10,marginTop:25,}}  onPress={pickImage}>
          <MaterialIcons name="insert-photo" size={50}  style={{alignSelf:'center',color:'green',width:50,height:50}} />
          <Text style={{textAlign:'center',color:'green'}}>Buscar Imagen</Text>
          </TouchableOpacity>
           {
             props.image === null ?
             <Text style={{marginLeft:40,marginTop:60,fontSize:19,fontFamily:'Roboto-Light',color:'red'}}>Seleccione una Imagen</Text>
            :
           <Image
            style={{marginLeft:40,borderColor:'#585858',borderWidth:2,width:150,height:150}}
            source={{ uri: props.image }}
            />}
        </View>
      );
}
 
 

export default ShowImagen;