import React, { PureComponent } from 'react'
import {View,Text} from 'react-native'



const CircleDashboard = (props) => {
    return (  
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <View style={{borderWidth:2,borderColor:'purple',width:100,height:100,borderRadius:100/2}}>
<Text  style={{textAlign:'center',marginTop:30,fontWeight:'bold',fontSize:25,color:'black'}}>{props.total}</Text>
        </View>
            <View>
                <Text style={{fontFamily:'Roboto-Light',color:'crimson',marginTop:5}}>{props.title}</Text>
            </View>
    </View>
    );
}
 
export default CircleDashboard;