import React from 'react'
import {View} from 'react-native'
import { Item, Input, Icon, Text } from 'native-base';

const SearchCliente = (props) => {
    return ( 
      <View>
        <Item style={{marginLeft:20,marginRight:20}}>
          <Icon name="ios-search" />
          <Input style={{fontFamily:'Roboto-Light',padding:10,width:250}} 
           placeholder="Buscar Cliente" 
           value={props.nombre}
           onChangeText={props.handleInputChange}
          />
          <Icon name="ios-people" />
        </Item>
         <Text style={{textAlign:'center',color:'dodgerblue',fontFamily:'Roboto-Light'}}>Buscando nombre :{props.nombre}</Text>
          </View>
     );
}


export default SearchCliente;