import React, { PureComponent } from 'react'
import {Container,Text} from 'native-base'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//pages routing here
import PageDashboard from '../pages/PageDashboard'
import PageCliente from '../pages/PageCliente'
import PageList from '../pages/PageList'
import PageConfig from '../pages/PageConfig'

//icon routing
import { MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <Container>
      <Text>Home Screen</Text>
      </Container>
  );
}

const NavBarComponent = () => {
    return ( 
        <NavigationContainer>
         <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: '#5F04B4',
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={PageDashboard}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="dashboard" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Clientes"
        component={PageCliente}
        options={{
          tabBarLabel: 'Clientes',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="users" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Tallas"
        component={PageList}
        options={{
          tabBarLabel: 'Tallas',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="list" size={24} color={color} />
          ),
        }}
      />
    <Tab.Screen
        name="Configuracion"
        component={PageConfig}
        options={{
          tabBarLabel: 'Configuracion',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="settings" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
        </NavigationContainer>

     );
}
 
export default NavBarComponent;