import React from 'react'
import {
    View
  } from "react-native";
  import {GlobalStyles} from '../../../global/estilos'
import {Icon,Picker,Button,Text} from 'native-base'
import BoxInput from '../../../layout/BoxInput'
import ShowImagen from '../LayoutPedido/ShowImage'
import ModalMarca from '../ModalPedido/ModalMarca'
import ModalColor from '../ModalPedido/ModalColor'
const FirstManagment = (props) =>{
  //props => example :values.handlesubmit,etc
  const prop = props.prop
  //modals
  const [modalMarca,setModalMarca] = React.useState(false)
  const [modalColor,setModalColor] = React.useState(false)
  //variables de items
  const logo=props.logo
  const setLogo=props.setLogo
  const color = props.color
  const setImage = props.setImage
  const image = props.image
  const setColor=props.setColor
  const onValueChangeColor =(value)=>{
    setColor(value)
}
  const MostrarImagen = (marca) => {
    prop.setFieldValue('marca',marca)
    switch(marca){
      case "Nike":
        setLogo(require('../../../../assets/imagenes/Logos/LogoNike.jpg'))
        setModalMarca(false)
        break;
      case "Adidas":
        setLogo(require('../../../../assets/imagenes/Logos/LogoAdidas.jpeg'))
        setModalMarca(false)
        break;
      case "Reebook":
        setLogo(require('../../../../assets/imagenes/Logos/LogoReebok.jpg'))
        setModalMarca(false)
        break;
      case "Fila":
        setLogo(require('../../../../assets/imagenes/Logos/LogoFila.png'))
        setModalMarca(false)
        break;
      case "Puma":
        setLogo(require('../../../../assets/imagenes/Logos/LogoPuma.jpeg'))
        setModalMarca(false)
        break;
      case "Jordan":
        setLogo(require('../../../../assets/imagenes/Logos/LogoJordan.jpeg'))
        setModalMarca(false)
        break;
      default:
        setImagen("")
        setLogo("")
    }
  }
  //no reconoce imagenes con extension png
  //solo reconoce jpg minusculas
  const [colores,setColores] = React.useState([
    {id:1,nombre:'Sky',imagen:require('../../../../assets/imagenes/Colores/PARTE1/Sky.jpg')},
    {id:2,nombre:'Azulino',imagen:require('../../../../assets/imagenes/Colores/PARTE1/Azulino.jpg')},
    {id:3,nombre:'Acero',imagen:require('../../../../assets/imagenes/Colores/PARTE1/Acero.jpg')},
    //parte 2
    {id:4,nombre:'Blanco',imagen:require('../../../../assets/imagenes/Colores/PARTE2/Blanco.jpg')},
    {id:5,nombre:'Melangue 3%',imagen:require('../../../../assets/imagenes/Colores/PARTE2/Melangue3.jpg')},
    {id:6,nombre:'Melangue 10%',imagen:require('../../../../assets/imagenes/Colores/PARTE2/Melangue10.jpg')},
    {id:7,nombre:'Negro',imagen:require('../../../../assets/imagenes/Colores/PARTE2/Negro.jpg')},
    //parte 3
    {id:8,nombre:'Mostaza',imagen:require('../../../../assets/imagenes/Colores/PARTE3/Mostaza.jpg')},
    {id:9,nombre:'Oro',imagen:require('../../../../assets/imagenes/Colores/PARTE3/Oro.jpg')},
    {id:10,nombre:'Brasil',imagen:require('../../../../assets/imagenes/Colores/PARTE3/Brasil.jpg')},
    //parte 4 
    {id:11,nombre:'Chicle',imagen:require('../../../../assets/imagenes/Colores/PARTE4/Chicle.jpg')},
    {id:12,nombre:'Fugsia',imagen:require('../../../../assets/imagenes/Colores/PARTE4/Fugsia.jpg')},
    {id:13,nombre:'Rosa',imagen:require('../../../../assets/imagenes/Colores/PARTE4/Rosado.jpg')},
    {id:14,nombre:'Guinda',imagen:require('../../../../assets/imagenes/Colores/PARTE4/Guinda.jpg')},
    //parte 5
    {id:15,nombre:'Melon',imagen:require('../../../../assets/imagenes/Colores/PARTE5/Melon.jpg')},
    {id:16,nombre:'Agua',imagen:require('../../../../assets/imagenes/Colores/PARTE5/Agua.jpg')},
  ])

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
              selectedValue={color}
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
          <Text style={GlobalStyles.messageError}>{prop.touched.color && prop.errors.color}</Text>

          <ShowImagen image={image} setImage={setImage}  prop={prop}/>
          <ModalColor setModalColor={setModalColor} color={colores} modalColor={modalColor}/>
          <ModalMarca MostrarImagen={MostrarImagen} setModalMarca={setModalMarca} modalMarca={modalMarca}/>
            
      </View>
    )
}



export default FirstManagment