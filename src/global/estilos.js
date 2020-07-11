import {StyleSheet} from 'react-native'
import { Container, Header, Content, H1, H2, H3, Text } from 'native-base';

export const GlobalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      text:{
        fontFamily:'Roboto-Light'
      },
      addIcon:{
        position:'absolute',
        top:470,
        left:300,
        width:50,
        height:50,
        backgroundColor:'dodgerblue',
        alignItems:'center',
        padding:5,
        borderRadius:30,
      },
      modalcontentbutton:{
        width:120,
        marginTop:15,
        borderRadius:10,
      },
      modalbuttontext:{
        textAlign:'center',
        flex:1,
        color:'white'
      },
      messageError:{
        fontSize:17,
        color:'red',
        textAlign:'center'
      }

})