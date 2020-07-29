import React from 'react'
import {
    View
  } from "react-native";
  import {GlobalStyles} from '../../../global/estilos'
  import {Item,Input,Textarea,Button,Text} from 'native-base'
const SecondManagment = (props) =>{
    const prop=props.prop
    return(
        <View style={{marginRight:10,marginLeft:10}}>
         
         <Item style={{marginTop:20}}>
              <Input 
              style={{fontFamily:'Roboto-Light'}}
              placeholder="Ingrese Unidades"
              keyboardType='numeric'
              onChangeText={prop.handleChange('unidad')}
              value={prop.values.unidad}
               />
               </Item>
               <Text style={GlobalStyles.messageError}>{prop.touched.unidad  && prop.errors.unidad}</Text>

               <Item style={{marginTop:20}}>
                 <Textarea 
                   rowSpan={5} 
                   style={{width:350,borderColor:'transparent',fontFamily:'Roboto-Light',fontSize:18}} 
                  bordered 
                  onChangeText={prop.handleChange('nota')}
                  value={prop.values.nota}
                   placeholder="Ingrese comentario del articulo" />
              </Item>
              {
                prop.values.id === null ? 
                <Button type="submit" primary style={{alignSelf:'center',width:200,marginTop:20}} onPress={prop.handleSubmit}>
                <Text style={{flex:1,textAlign:'center'}}>Agregar Pedido</Text>
            </Button>
            :
            <Button type="submit" success style={{alignSelf:'center',width:200,marginTop:20}} onPress={prop.handleSubmit}>
                  <Text style={{flex:1,textAlign:'center'}}>Actualizar Pedido</Text>
              </Button>

              }
      </View>
    )
}



export default SecondManagment