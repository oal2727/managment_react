import React,{useEffect,useState} from 'react'
import {View,Image,TouchableOpacity} from 'react-native'
import {Text} from 'native-base'
import { MaterialIcons } from '@expo/vector-icons'; 
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
const ShowImagen = (props) => {
  //conincide solo permisos para nandroid
  // const [image,setImage] = useState(null)
  // useEffect(() => {
  //   console.log(props.image)
  // }, [])

    const SelectImage = async() =>{
      const resultPermision = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      const permisionresponse = resultPermision.permissions.cameraRoll.status;
      if(permisionresponse === "denied"){
        console.log("necesario aceptar permisos")
      }else{
        const response = await ImagePicker.launchImageLibraryAsync({
          allowsEditing:true,
          aspect:[4,3],
        });

        if(response.cancelled){
          console.log("ha cerrado la galeria");
        }else{
          console.log("imagen subida correctamente");
          props.setImage(response.uri);
        }

      }
    }
    return (
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity style={{width:100,height:50,marginLeft:10,marginTop:20}}  onPress={SelectImage}>
          <MaterialIcons name="insert-photo" size={50}  style={{alignSelf:'center',color:'green',width:50,height:50}} />
          <Text style={{textAlign:'center',color:'green'}}>Buscar Imagen</Text>
          </TouchableOpacity>
           {
             props.image === null ?
             <Text style={{marginLeft:10,marginTop:30,fontSize:19,fontFamily:'Roboto-Light',color:'red'}}>Seleccione una Imagen</Text>
            :
           <View>
             {
               <Image
               value={props.image}
               style={{marginLeft:50,borderColor:'#585858',borderWidth:2,width:110,height:110}}
               source={{ uri: props.image }}
               />
               
            }
             </View>
            }
        </View>
      );
}
 
 

export default ShowImagen;