import React from 'react'
import {View,Image,TouchableOpacity} from 'react-native'
import {Text} from 'native-base'
import { MaterialIcons } from '@expo/vector-icons'; 
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import {useDispatch,connect} from 'react-redux'
import {TOOGLE_FILE,TOOGLE_FILENAME} from '../../../Redux/PedidoDucks'

const ShowImagen = (props) => {


  const dispatch = useDispatch()
  // const [image,setImage] = React.useState(props.file)
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
          console.log('uri file',response.uri)
          console.log("imagen subida correctamente");
          // props.setImage(response.uri);

          // setImage(response.uri)
          // props.setImage(response.uri)
          const fileName = response.uri.split('/')[10]
          console.log(fileName)
          dispatch(TOOGLE_FILE(response.uri))
          dispatch(TOOGLE_FILENAME(fileName))
          // dispatch()
          // const param = {
             // file:response.uri,
             // filename:fileName
          // }
           // dispatch(TOOGLE_FILENAME(param));

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
             props.file === null ?
             <Text style={{marginLeft:10,marginTop:30,fontSize:19,fontFamily:'Roboto-Light',color:'red'}}>Seleccione una Imagen</Text>
            :
           <View>
               <Image
             style={{marginLeft:50,borderColor:'#585858',borderWidth:2,width:110,height:110}}
             source={{ uri: props.file }}
               />
             </View>
            }
        </View>
      );
}

//pedido => true muestra imagen al agregar,
//pedido => false muestra imagen editada 
const mapPropsToState = (state)=>{
  return{
      file:state.pedido.file
  }
}


export default connect(mapPropsToState)(ShowImagen);