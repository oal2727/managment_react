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
import {AddPedido,QuerySpinner,SumPedido,TOGGLE_MODAL} from '../../Redux/PedidoDucks'
const ModalManagment = (props) =>{
    const dataid = props.dataid
    const [statePage,setStatePage] = React.useState(1)
    let totalNeto=0
    const CalculoPedido = (values) =>{
        const talla = values.talla
        const unidades = values.unidad
        //aislar por precio unidad
        if(talla == "2" || talla == "4" || talla == "6"){
            const preciounidad=70
            const preciorebaja1=55
            const preciorebaja2=52
            const preciorebaja3=50
            const preciorebaja4=45
            CostoPedido(unidades,preciounidad,preciorebaja1,preciorebaja2,preciorebaja3,preciorebaja4)

        }else if( talla == "8"){
            const preciounidad=75
            const preciorebaja1=55
            const preciorebaja2=52
            const preciorebaja3=50
            const preciorebaja4=45
            CostoPedido(unidades,preciounidad,preciorebaja1,preciorebaja2,preciorebaja3,preciorebaja4)
        }else if(talla == "10"){
            const preciounidad=75
            const preciorebaja1=55
            const preciorebaja2=52
            const preciorebaja3=50
            const preciorebaja4=50
            CostoPedido(unidades,preciounidad,preciorebaja1,preciorebaja2,preciorebaja3,preciorebaja4)
        }else if(talla == "12"){
            const preciounidad=75
            const preciorebaja1=60
            const preciorebaja2=57
            const preciorebaja3=55
            const preciorebaja4=50
            CostoPedido(unidades,preciounidad,preciorebaja1,preciorebaja2,preciorebaja3,preciorebaja4)
        }else if(talla == "14" || talla == "16"){
            const preciounidad=80
            const preciorebaja1=60
            const preciorebaja2=57
            const preciorebaja3=55
            const preciorebaja4=50
            CostoPedido(unidades,preciounidad,preciorebaja1,preciorebaja2,preciorebaja3,preciorebaja4)
        }else if(talla == "S" || talla == "M" || talla =="L"){
            const preciounidad=90
            const preciorebaja1=76
            const preciorebaja2=74
            const preciorebaja3=72
            const preciorebaja4=70
            CostoPedido(unidades,preciounidad,preciorebaja1,preciorebaja2,preciorebaja3,preciorebaja4)
        }else{
            const preciounidad=95
            const preciorebaja1=81
            const preciorebaja2=79
            const preciorebaja3=77
            const preciorebaja4=75
            CostoPedido(unidades,preciounidad,preciorebaja1,preciorebaja2,preciorebaja3,preciorebaja4)
        }
    }
//     //probablemnte problema en unidad sola
   
  const CostoPedido = (unidades,preciounidad,preciorebaja1,preciorebaja2,preciorebaja3,preciorebaja4) => {
        if(unidades <= 2){
        totalNeto=preciounidad * unidades
        }else if(unidades == 3){
        totalNeto=preciorebaja1 * 3
        }
        // 4 unidades listo
        else if(unidades <= 4){
            totalNeto=preciorebaja2 * 4
        }else if(4 <= unidades && unidades <= 5){
            totalNeto=preciorebaja2 * unidades
        }
        // 6 unidades listo 
        else if(unidades == 6){
            totalNeto= preciorebaja3 * 6
         
        }else if(6 <= unidades && unidades <= 11){
            totalNeto= preciorebaja3 * unidades            
        }
        //12 unidades listo
        else if(unidades == 12){
            totalNeto=preciorebaja4 * 12
        }else{
            totalNeto=preciorebaja4 * unidades
        }

    }
    //FIRST MODAL
    const [logo,setLogo] = React.useState("")
    const [color,setColor ]= React.useState("")

    //SECOND MODAL
    const [talla,setTalla] = React.useState("Seleccione")
    const [sexo,setSexo] = React.useState("Seleccione")
    const [image,setImage] = React.useState(null)
 
    const selectComponent = (props) =>{
        if(statePage === 1){
            return (
                <FirstManagment prop={props} logo={logo} setLogo={setLogo} 
                color={color} setColor={setColor} image={image} setImage={setImage}/>
            )
        }
        if(statePage === 2){
            return (
                <SecondManagment prop={props} 
                talla={talla} setTalla={setTalla} 
                sexo={sexo} setSexo={setSexo}/>
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
        setLogo("")
        setColor("")
        setTalla("Seleccione")
        setSexo("Seleccione")
    }
    const Cancelar= () => {
        dispatch(TOGGLE_MODAL(false))
        CleanStates()
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
                <Text style={styles.titlePedido}>Agregando Pedidos</Text>
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
                        validationSchema={validationSchema}
                        onSubmit={(values)=>{
                             CalculoPedido(values)
                            values.total=totalNeto
                            values.image=image
                            console.log(values)
                            dispatch(QuerySpinner())
                            dispatch(AddPedido(props.dataid,values))
                             dispatch(SumPedido(dataid))
                            dispatch(TOGGLE_MODAL(false))
                            // CleanStates()
                            //problema iniciar por reset form
                            // dispatch(TOGGLE_MODAL(false))
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
        pedido:state.pedido.pedido
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