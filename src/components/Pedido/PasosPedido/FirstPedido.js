import React,{useEffect} from 'react'
import {
    View
  } from "react-native";
  import {GlobalStyles} from '../../../global/estilos'
import {Icon,Picker,Button,Text,Item,Label} from 'native-base'
import ModalMarca from '../ModalPedido/ModalMarca'
import BoxInput from '../../../layout/BoxInput'
import Pedido from '../ConfigPedido/LogicPedido'

const FirstManagment = (props) =>{
  //props => example :values.handlesubmit,etc
  const prop = props.prop

  //define object pedido
  const pedido = new Pedido()
  const marcas = pedido.getMarcas()

  //get data array
  const tallas = pedido.getPedidos()

  //modals
  const [modalMarca,setModalMarca] = React.useState(false)
  //variables de items
  const {marca,setMarca,talla,setTalla} = props
    const onValueChangeTalla =(value)=>{
      setTalla(value)
  }
  const onValueChangeMarca  =(value)=>{
    setMarca(value)
  }
 
    return(
        <View>
            <Item style={{marginTop:20,marginRight:20,marginLeft:20}}>
            <Label>Marca:</Label>
            <Picker as="select"
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              selectedValue={prop.values.marca}
              value={prop.values.marca}
              onValueChange={(itemvalue)=>{
                prop.setFieldValue('marca',itemvalue)
                onValueChangeMarca(itemvalue)
            }}
            >
              {
                marcas.map((item)=>(
                  <Picker.Item  key={item.id} label={item.nombre} 
                  value={item.nombre}/>
                ))
              }
            </Picker>
            </Item>
          <Text style={GlobalStyles.messageError}>{prop.touched.marca && prop.errors.marca}</Text>


          <Item style={{marginTop:20,marginRight:20,marginLeft:20}}>
            <Label>Talla:</Label>
            <Picker as="select"
              mode="dropdown"
              iosHeader="Select your SIM"
              iosIcon={<Icon name="arrow-down" />}
              selectedValue={prop.values.talla}
              value={prop.values.talla}
              onValueChange={(itemvalue)=>{
                prop.setFieldValue('talla',itemvalue)
                onValueChangeTalla(itemvalue)
            }}
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

              {/* Marca Modal  */}
          {/* <ModalMarca marcas={marcas} MostrarImagen={MostrarImagen} setModalMarca={setModalMarca} modalMarca={modalMarca}/> */}
            
      </View>
    )
}



export default FirstManagment