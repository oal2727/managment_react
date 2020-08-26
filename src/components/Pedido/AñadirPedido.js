import React from 'react'
import {
    Modal,
    StyleSheet,
    View
  } from "react-native";
  import {Button,Text} from 'native-base'
import {connect,useDispatch} from 'react-redux'
import {Formik} from 'formik'
import FirstManagment from './PasosPedido/FirstPedido'
import SecondManagment from './PasosPedido/SecondPedido'
import ThreePedido from './PasosPedido/ThreePedido'
import * as yup from 'yup'
import {AddPedido,QuerySpinner,SumPedido,TOGGLE_MODAL,UpdatePedido,TOOGLE_FILE,TOOGLE_FILENAME,TOOGLE_IMAGEOLD} from '../../Redux/PedidoDucks'
const ModalManagment = (props) =>{
    const [statePage,setStatePage] = React.useState(1)
    //FIRST MODAL
    const [color,setColor]= React.useState("") // color itembox
    const [marca,setMarca] = React.useState("")
    const [talla,setTalla] = React.useState("")
    const [sexo,setSexo] = React.useState("")
    const selectComponent = (props) =>{
        if(statePage === 1){
            return (
                <FirstManagment prop={props} 
                marca={marca} 
                setMarca={setMarca} 
                talla={talla} setTalla={setTalla}
                />
            )
        }
        if(statePage === 2){
            return (
                <SecondManagment prop={props} 
                color={color} setColor={setColor}
                sexo={sexo} setSexo={setSexo}
                />
            )
        }
        if(statePage === 3){
            return (
                <ThreePedido prop={props}/>
            )
        }
    }
    const validationSchema = yup.object().shape({
        unidad:yup.string().required('Unidades requerido'),
        marca:yup.string().required("Marca requerido"),
        talla:yup.string().required('Talla requerido'),
        color:yup.string().required('color requerido')
    })
    const dispatch = useDispatch()
    const CleanStates = ()=>{
        setColor("")
        setTalla("Seleccione")
        setSexo("Seleccione")
    }
    const Cancelar= () => {
        dispatch(TOGGLE_MODAL(false))
        CleanStates()
        dispatch(TOOGLE_FILE(null))
        dispatch(TOOGLE_FILENAME(null))
        dispatch(TOOGLE_IMAGEOLD(null))
    }
  
    return(
        <View>
        <Modal
          visible={props.modal}
        >
          <View>
          <Button  onPress={() => Cancelar()} danger style={{width:110,left:250}}>
                <Text style={{flex:1,textAlign:'center'}}>Cerrar</Text>
            </Button>
  
            <View style={{margin:10}}>
                {
                    props.pedido.id === null ? 
                    <Text style={styles.titlePedido}>Agregando Pedidos</Text>
                    :
                    <Text style={styles.titlePedido}>Editando Pedidos</Text>
                }
            </View>

                <View>
                    <View style={{flexDirection:'row',marginTop:5,textAlign:'center',marginLeft:5,marginRight:5}}>
                        <Button onPress={()=> setStatePage(1)} warning style={styles.buttonsegment1}>
                            <Text style={styles.textsegment}>Paso 1</Text>
                            </Button>
                            <Button onPress={()=> setStatePage(2)} success style={styles.buttonsegment1}>
                            <Text style={styles.textsegment}>Paso 2</Text>
                            </Button>
                            <Button onPress={()=> setStatePage(3)} primary style={styles.buttonsegment1}>
                            <Text style={styles.textsegment}>Paso 3</Text>
                            </Button>
                    </View>
                
                    <View>
                        <Formik
                        initialValues={props.pedido}
                        // validationSchema={validationSchema}
                        onSubmit={(values)=>{
                            // console.log('data add/update',values)
                            // const oldimage = values.image
                            //requiero trabajar con dos varriables => file | filename
                            // values.image=props.file
                            values.image=props.filename
                             //filename
                             // console.log(values)
                             //file 
                             // console.log(props)
                            if(values.id === null){
                                //ESTO ES AGREGAR
                                 // values.image=props.filename:fileName
                                // values.image=oldimage
                                // const filename = getFileName(image)

                                // values.image=props.image.filename
                                 console.log('add',values)
                                // console.log(oldimage)
                                 dispatch(AddPedido(props.dataid,values,props.file))
                            }else{
                                // console.log(props.image.filenccame)
                                console.log("update",values)
                                // oldimage => nombre del archivo a borrar
                                dispatch(UpdatePedido(values,props.dataid,props.imageold,props.file))
                            }
                            dispatch(QuerySpinner())
                            dispatch(TOGGLE_MODAL(false))
                        }}
                        >
                      { (props) => (
                              selectComponent(props)
                       )}
                      </Formik>
                    </View>
                </View>
          </View>
        </Modal>
  
      </View>
    )
}

const mapStateToProps = (state) => {
    return{
        modal:state.pedido.modal,
        pedido:state.pedido.pedido,
        file:state.pedido.file,
        filename:state.pedido.filename,
        imageold:state.pedido.imageold
    }
}

const styles = StyleSheet.create({
    titlePedido:{
        textAlign:'center',
        fontSize:19,
        fontFamily:'Montserrat-Light',
        color:'blue'
    },
    buttonsegment1:{
        flex:1,
        width:150,
        borderRadius:10
    },
    textsegment:{
        textAlign:'center',
        flex:1
    }
  });


export default connect(mapStateToProps)(ModalManagment)