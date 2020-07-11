import React from 'react'
import {View} from 'react-native';
import Snackbar from 'react-native-snackbar-component';
import {connect,useDispatch} from 'react-redux'
//importar funciones de snackbar
import {closeSnackbar} from '../Redux/ClienteDucks'
const SnackbarComponent = (props) => {
    const dispatch = useDispatch()
    const visibleSnackbar = props.snackbarShow
    //Notaaaa
    //problema snackbar funciona una sola vez con el tiempo establecido.
    //si presiono el boton cerrar se arregla correctamente.
    return (
       <View>

        {/* snackbar clientes */}
            <Snackbar
            visible={props.snackbarShow}
            textMessage={props.mensaje}
            actionHandler={ () => dispatch(closeSnackbar())}
            actionText="Close"
            />
        {/* snackbar pedido*/}
        </View>
      );
}
const mapStateToProps = (state) =>{
 return{
    snackbarShow : state.cliente.snackbarShow,
    mensaje: state.cliente.mensaje,
 }
} 

export default connect(mapStateToProps,{closeSnackbar})(SnackbarComponent);