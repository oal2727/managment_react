import React from 'react'
import {View} from 'react-native';
import Snackbar from 'react-native-snackbar-component';
import {connect,useDispatch} from 'react-redux'
//importar funciones de snackbar
import {CloseSnackbar} from '../Redux/PedidoDucks'
const SnackbarTwo = (props) => {
    const dispatch = useDispatch()
    const snackbarVisible=props.snackbar
    return (
       <View>

        {/* snackbar clientes */}
            <Snackbar
            visible={snackbarVisible}
            textMessage={props.mensaje}
            actionHandler={ () => dispatch(CloseSnackbar())}
            actionText="Close"
            />
        {/* snackbar pedido*/}
        </View>
      );
}
const mapStateToProps = (state) =>{
 return{
    snackbar : state.pedido.snackbar,
    mensaje: state.pedido.mensaje,
 }
} 

export default connect(mapStateToProps,{CloseSnackbar})(SnackbarTwo);