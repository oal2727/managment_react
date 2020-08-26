import React from 'react'
import {
    View
  } from "react-native";

  import {GlobalStyles} from '../../../global/estilos'
  import {Item,Text,Picker,Label,Icon,Button} from 'native-base'
  import ShowImagen from '../LayoutPedido/ShowImage'
  import BoxInput from '../../../layout/BoxInput'
import ModalColor from '../ModalPedido/ModalColor'
import Pedido from '../ConfigPedido/LogicPedido'


const SecondManagment = (props) =>{

    
    const sexo=props.sexo
    const setSexo = props.setSexo



    const color = props.color
  const setColor=props.setColor
  const [modalColor,setModalColor] = React.useState(false)

  //object pedido
  const pedido = new Pedido()
  const sexos=pedido.getSexo()
  const colores = pedido.getColores()
  //---
  const prop=props.prop
    
   const onValueChangeSexo = (value) =>{
    setSexo(value)
  }
  const onValueChangeColor =(value)=>{
    setColor(value)
}

    return(
        <View style={{marginRight:10,marginLeft:10}}>
              
              <BoxInput title={"Color:"}>
            <Button iconRight light onPress={()=>setModalColor(true)}>
              <Text style={{color:'white'}}>Buscar Color</Text>
              <Icon name="ios-color-palette" />
            </Button>
            <View>
             <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: undefined}}
              selectedValue={prop.values.color}
              value={prop.values.color}
              onValueChange={(itemvalue)=>{
                prop.setFieldValue('color',itemvalue)
                onValueChangeColor(itemvalue)
            }}
            >
         {
           colores.map((item)=> (
             <Picker.Item key={item.id} label={item.nombre} value={item.nombre}/>
           ))
         }
              </Picker>
            </View>
          </BoxInput>
              
            <Item style={{marginTop:20,marginRight:20,marginLeft:20}}>
            <Label>Sexo:</Label>
            <Picker
              mode="dropdown"
              iosHeader="Select your sexo"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: undefined}}
              selectedValue={prop.values.sexo}
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

            
            <ShowImagen />
            <ModalColor setModalColor={setModalColor} color={colores} modalColor={modalColor}/>
       </View>
    )
}



export default SecondManagment