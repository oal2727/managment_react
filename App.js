import React,{useEffect} from 'react';
import { StyleSheet, View } from 'react-native';
import {Text} from 'native-base'
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
// import TestComponent from './src/components/PruebaTest'
import NavBar from './src/Routing/NavBar'
import {Provider} from 'react-redux'
import generateStore from './src/Redux/store'

export default function App() {

  const [fontsLoaded,setFontsLoaded] = React.useState(false)

const fonts={
  'Roboto-Light': require("./assets/Fonts/Roboto/Roboto-Light.ttf"),
  'Roboto-Italic':require("./assets/Fonts/Roboto/Roboto-Italic.ttf"),
  'Roboto-LightItalic':require("./assets/Fonts/Roboto/Roboto-LightItalic.ttf"),
  'Montserrat-Italic':require("./assets/Fonts/Montserrat/Montserrat-Italic.ttf"),
  'Montserrat-Light':require("./assets/Fonts/Montserrat/Montserrat-Light.ttf"),
  'Montserrat-LightItalic':require("./assets/Fonts/Montserrat/Montserrat-LightItalic.ttf"),
  'Roboto_medium':require("./assets/Fonts/Roboto/Roboto-Medium.ttf")
}

const store = generateStore()

React.useEffect(() => {
  _loadFont()
}, [])

async function _loadFont(){
  await Font.loadAsync(fonts)
  setFontsLoaded(true)
}

    if(!fontsLoaded){
      return(
          <AppLoading/>
      );
    }else{
    return (
      <Provider store={store}>
      <NavBar/>
      </Provider>
      );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontFamily:'Roboto-Light'
  }
});
