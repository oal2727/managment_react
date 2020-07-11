import React from 'react'
import {View,Text,Modal,StyleSheet} from 'react-native'
import { Button,Form, Item, Input, Label,Picker,Icon} from 'native-base';
import {GlobalStyles} from '../../global/estilos'
import {Formik} from 'formik'
import * as yup from 'yup'
//importar accion redux
import {AddCliente,CloseModal,
    UpdateCliente,QuerySpinner,TotalClientes,TotalHombres,TotalMujeres} from '../../Redux/ClienteDucks'
import {connect,useDispatch} from 'react-redux'

//problema de uso de acciones con redux

const ModalAddCliente = (props) => {
    //usando redux
    const cliente = props.cliente
    const dispatch = useDispatch()

    const [sexo,setSexo] = React.useState("")
    const onValueChangeSexo = (data) =>{
        setSexo(data)
    }
    const  modalAddCliente = props.modalAddCliente
    const Cancelar = () =>{
        dispatch(CloseModal())
    }

    const validationSchema=yup.object().shape({
        nombre:yup.string().required('Nombre es requerido'),
        apellido:yup.string().required('Apellido es requerido'),
        direccion:yup.string().required('Direccion es requerido'),
        sexo:yup.string().required('Sexo es requerido')
    })

    return (
        <View>
           <Modal
           visible={props.modal}
           >    
           <Formik
            initialValues={cliente}
            enableReinitialize
            validationSchema={validationSchema}
            onSubmit={(values)=>{
                if(values.id === ''){
                     dispatch(QuerySpinner())
                    dispatch(AddCliente(values))
                    setSexo("Seleccione")
                }else{
                    dispatch(QuerySpinner())
                    dispatch(UpdateCliente(values))
                }
           dispatch(TotalHombres())
            dispatch(TotalMujeres())
            dispatch(TotalClientes())
            dispatch(CloseModal()) 
            }}
           >
            { (props) => (
                <View style={estilos.contenido}>
                    {
                        props.values.id === '' ? 
                        <Text style={estilos.contenidoTitle}>Añadiendo Cliente</Text>
                        :
                        <Text style={estilos.contenidoTitle}>Editar Cliente</Text>
                    }
                    <Form>

                    <Item stackedLabel>
                    <Label style={estilos.label}>Nombre</Label>
                    <Input 
                    style={{fontSize:17,fontFamily:'Roboto-Light'}}
                    onChangeText={props.handleChange('nombre')}
                    value={props.values.nombre}
                    onBlur={props.handleBlur('nombre')}
                    />
                    </Item>
                  <Text style={GlobalStyles.messageError}>{props.touched.nombre && props.errors.nombre}</Text>

                    <Item stackedLabel>
                    <Label style={estilos.label}>Apellido</Label>
                    <Input 
                    style={{fontSize:17,fontFamily:'Roboto-Light'}}
                    onChangeText={props.handleChange('apellido')}
                    value={props.values.apellido}
                    onBlur={props.handleBlur('apellido')}
                    />
                    </Item>
                    <Text style={GlobalStyles.messageError}>{props.touched.apellido && props.errors.apellido}</Text>


                    <Item stackedLabel>
                    <Label style={estilos.label}>Direccion</Label>
                    <Input 
                      style={{fontSize:17,fontFamily:'Roboto-Light'}}
                    onChangeText={props.handleChange('direccion')}
                    value={props.values.direccion}
                    onBlur={props.handleBlur('direccion')}
                    />
                    </Item>
                    <Text style={GlobalStyles.messageError}>{props.touched.direccion && props.errors.direccion}</Text>

          <Item>
            <Label style={estilos.label}>Sexo:</Label>
            <Picker
              mode="dropdown"
              iosHeader="Select your SIM"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: undefined,fontSize:17,fontFamily:'Roboto-Light'}}
              selectedValue={props.values.sexo}
              value={props.values.sexo}
              onValueChange={(itemvalue)=>{
                  props.setFieldValue('sexo',itemvalue)
                  onValueChangeSexo(itemvalue)
              }}
            >
              <Picker.Item  label="Seleccione" value="Seleccione" />
                <Picker.Item  label="Hombre" value="Hombre" />
                <Picker.Item label="Mujer" value="Mujer" />
              </Picker>
            </Item>
            <Text style={GlobalStyles.messageError}>{props.touched.sexo && props.errors.sexo}</Text>


                    <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                       <Button onPress={() => Cancelar()} danger style={GlobalStyles.modalcontentbutton}>
                            <Text style={GlobalStyles.modalbuttontext}>Cancelar</Text>
                        </Button>
                       {
                           props.values.id === '' ?
                           <Button type="submit" onPress={() => props.handleSubmit()}  primary style={GlobalStyles.modalcontentbutton}>
                              <Text style={GlobalStyles.modalbuttontext}>Guardar</Text>
                            </Button>
                       :    
                            <Button type="submit" onPress={() => props.handleSubmit()}  success style={GlobalStyles.modalcontentbutton}>
                            <Text style={GlobalStyles.modalbuttontext}>Update</Text>
                           </Button>
                       }
                    </View>
                    </Form>
                </View>
                 )}
                </Formik>


           </Modal>
        </View>
      );
}

const mapStateToProps = (state) =>{
    return{
        cliente: state.cliente.cliente,
        modal: state.cliente.modal
    }
}
 
export default connect(mapStateToProps)(ModalAddCliente);

const estilos = StyleSheet.create({
    contenido:{
        top:20,
        marginLeft:20,
        marginRight:20
    },
    contenidoTitle:{
        color:'orange',
        fontSize:25,
        textAlign:'center',
        letterSpacing:1,
        fontFamily:'Montserrat-Light'
    },
    contentbutton:{
        width:100,
        marginTop:15,
        borderRadius:10,
    },
    contentbuttontext:{
        textAlign:'center',
        flex:1,
        color:'white'
    },
    label:{
        color:'dodgerblue',
        fontFamily:'Roboto-Italic'

    }

})