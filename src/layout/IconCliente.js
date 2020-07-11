import React from 'react'
import {View,TouchableOpacity} from 'react-native'
 import {GlobalStyles} from '../global/estilos'

 const IconCliente = (props) => {
    return ( 
        <View style={GlobalStyles.addIcon}>
             <TouchableOpacity>
                {props.children}
             </TouchableOpacity>
        </View>
     );
}
 
export default IconCliente;



