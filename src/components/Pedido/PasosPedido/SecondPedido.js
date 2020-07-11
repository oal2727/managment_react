import React from 'react'
import {
    View
  } from "react-native";

  import {GlobalStyles} from '../../../global/estilos'
  import {Item,Text,Picker,Label,Icon} from 'native-base'
const SecondManagment = (props) =>{

    const talla=props.talla
    const setTalla =props.setTalla
    const sexo=props.sexo
    const setSexo = props.setSexo

    const prop=props.prop
    const tallas=[
      {id:'1',nombre:'Seleccione'},
      {id:'2',nombre:'Talla 2'},
      {id:'3',nombre:'Talla 4'},
      {id:'4',nombre:'Talla 6'},
      {id:'5',nombre:'Talla 8'},
      {id:'6',nombre:'Talla 10'},
      {id:'7',nombre:'Talla 12'},
      {id:'8',nombre:'Talla 14'},
      {id:'9',nombre:'Talla 16'},
      {id:'10',nombre:'Talla S'},
      {id:'11',nombre:'Talla M'},
      {id:'12',nombre:'Talla L'},
      {id:'13',nombre:'Talla XL'},
    ]
    const sexos=[
      {id:'1',nombre:'Seleccione'},
      {id:'2',nombre:'Hombre'},
      {id:'3',nombre:'Mujer'}
    ]
    const onValueChangeTalla = (value)=>{
      setTalla(value)
   }
   const onValueChangeSexo = (value) =>{
    setSexo(value)
  }

    return(
        <View style={{marginRight:10,marginLeft:10}}>
                <Item style={{marginTop:20}}>
            <Label>Talla:</Label>
            <Picker as="select"
              mode="dropdown"
              iosHeader="Select your SIM"
              iosIcon={<Icon name="arrow-down" />}
              onValueChange={(itemvalue)=>{
                prop.setFieldValue('talla',itemvalue)
                onValueChangeTalla(itemvalue)
            }}
            selectedValue={talla}
            >
              {
                tallas.map((item)=>(
                  <Picker.Item  key={item.id} label={item.nombre} 
                  value={item.nombre}/>
                ))
              }
            </Picker>
            </Item>
            <Text style={GlobalStyles.messageError}>{prop.touched.talla && prop.errors.talla}</Text>
              
            <Item style={{marginTop:20}}>
            <Label>Sexo:</Label>
            <Picker
              mode="dropdown"
              iosHeader="Select your sexo"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: undefined}}
              selectedValue={sexo}
              value={prop.values.sexo}
              onValueChange={(itemvalue)=>{
                prop.setFieldValue('sexo',itemvalue)
                onValueChangeSexo(itemvalue)
            }}
            >
            {
              sexos.map((item)=>(
                <Picker.Item key={item.id} value={item.nombre} label={item.nombre}/>
              ))
            }
              </Picker>
            </Item>
            <Text style={GlobalStyles.messageError}>{prop.touched.sexo && prop.errors.sexo}</Text>


       </View>
    )
}



export default SecondManagment