import React, { PureComponent } from 'react'
import {Container,Text,Button} from 'native-base'
import { createStackNavigator } from '@react-navigation/stack';
import PageClienteDashboard from './PageClienteDashboard'
import PagePedido from './PagePedidos'
import PageConsultasDashboard  from './PageConsultasDashboard'

const PageClient = () => {
      const Stack = createStackNavigator();
    return (
        <Stack.Navigator>
        <Stack.Screen name="Lista Clientes" component={PageClienteDashboard} />
        <Stack.Screen name="Pedidos" component={PagePedido} />
        <Stack.Screen name="Consultas" 
         component={PageConsultasDashboard} 
         options={{
          title: 'Consulta de Pedidos',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
         
         />
      </Stack.Navigator>
      );
}
 
export default PageClient;

//nota fundamenta una vez usado react-navigation
//definir el primer navigation container
//los demas se comporatan de manera diferente
//solo usando tabs.navigator