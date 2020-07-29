import React,{useEffect} from 'react'
import {
    View
  } from "react-native";
  import {GlobalStyles} from '../../../global/estilos'
import {Icon,Picker,Button,Text,Item,Label} from 'native-base'
import ModalMarca from '../ModalPedido/ModalMarca'
import BoxInput from '../../../layout/BoxInput'
import {useDispatch} from 'react-redux'
import Pedido from '../ConfigPedido/LogicPedido'
import {setMarca} from '../../../Redux/PedidoDucks'

const FirstManagment = (props) =>{
  //props => example :values.handlesubmit,etc
  let dispatch = useDispatch()
  const prop = props.prop

  //define object pedido
  const pedido = new Pedido()
  const marcas = pedido.getMarcas()

  //get data array
  const tallas = pedido.getPedidos()

  //modals
  const [modalMarca,setModalMarca] = React.useState(false)
  //variables de items
  const logo=props.logo
  const setLogo=props.setLogo

  const talla=props.talla
    const setTalla =props.setTalla
    
    //logo es la imagen =>

    useEffect(() => {
      console.log(logo)
      console.log('logo is ',logo)
      // MostrarImagen(logo)
      // MostrarImagen(logo)
    }, [])


  const MostrarImagen = (marca) => {
    prop.setFieldValue('marca',marca)
    // dispatch(setMarca(marca))
    //add hook set marca
    // setMarca(marca)
    setModalMarca(false)
    switch(marca){
      case "Nike":
        setLogo(require('../../../../assets/imagenes/Logos/LogoNike.jpg'))
        break;
      case "Adidas":
        setLogo(require('../../../../assets/imagenes/Logos/LogoAdidas.jpeg'))
        break;
      case "Reebook":
        setLogo(require('../../../../assets/imagenes/Logos/LogoReebok.jpg'))
        break;
      case "Fila":
        setLogo(require('../../../../assets/imagenes/Logos/LogoFila.png'))
        break;
      case "Puma":
        setLogo(require('../../../../assets/imagenes/Logos/LogoPuma.jpeg'))
        break;
      case "Jordan":
        setLogo(require('../../../../assets/imagenes/Logos/LogoJordan.jpeg'))
        break;
      default:
        // setImagen("")
        setLogo("")
    }
  }
  //no reconoce imagenes con extension png
  //solo reconoce jpg minusculas

  const onValueChangeTalla =(value)=>{
    setTalla(value)
}
 
    return(
      // style={{marginTop:20,marginRight:10,marginLeft:10}}
        <View>
          <BoxInput  title={"Marca:"} logo={logo}>
          <Button  iconRight light onPress={()=>setModalMarca(true)} >
              <Text style={{color:'white'}}>Buscar Marca</Text>
              <Icon name="search" />
            </Button>
          </BoxInput>
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


      
          <ModalMarca marcas={marcas} MostrarImagen={MostrarImagen} setModalMarca={setModalMarca} modalMarca={modalMarca}/>
            
      </View>
    )
}



export default FirstManagment