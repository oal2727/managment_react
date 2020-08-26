import React,{useState,useEffect} from 'react'
import {View,Modal} from 'react-native'
import {Button,Text,Picker,Content,Form,Icon} from 'native-base'
import {connect,useDispatch} from 'react-redux'
import {ToogleMarca,MarcaSearch} from '../../../Redux/ConsultasDucks'
import {SpinnerQueryFinal} from '../../../Redux/PedidoDucks'
const MarcaQuery = (props) => {
    let dispatch = useDispatch()
    const {id} = props

  
    // const [stateMarca,SetStateMarca] = useState("key0");
    const onValueChangeMarca = (value)=>{
      props.setMarca(value)
    }
    const Search =()=>{
      dispatch(MarcaSearch(id,props.marca))
      dispatch(SpinnerQueryFinal(true))
      dispatch(ToogleMarca(false))
    }
   
    return ( 
        <View>
        <Modal visible={props.modalmarca}>
        <Button warning onPress={() =>dispatch(ToogleMarca(false))}>
        <Icon name='arrow-back' />
                    <Text>Back</Text>
            </Button>
        <Content style={{alignSelf:'center',marginTop:150}}>
          <Form>
            <Text style={{textAlign:'center',fontFamily:'Roboto-Light',marginBottom:20,fontSize:25}}>Consulta por Marca</Text>
            <Picker
              note
              mode="dropdown"
              style={{ width: 200,alignSelf:'center' }}
              selectedValue={props.marca}
              value={props.marca}
              onValueChange={(itemvalue)=>{
                onValueChangeMarca(itemvalue)
            }}
            >
               <Picker.Item label="Seleccione" value="Seleccione" />
              <Picker.Item label="Nike" value="Nike" />
              <Picker.Item label="Fila" value="Fila" />
              <Picker.Item label="Adidas" value="Adidas" />
              <Picker.Item label="Rebook" value="Rebook" />
              <Picker.Item label="Puma" value="Puma" />
              <Picker.Item label="Jordan" value="Jordan" />
            </Picker>
            </Form>
            <Button style={{marginTop:80,width:200}} onPress={()=>Search()}>
                    <Text style={{flex:1,textAlign:'center'}}>Buscar</Text>
                  </Button>
                  {/* onPress={() =>dispatch(ToogleMarca(false))} */}
        </Content>
           
        </Modal>
    </View>
     );
}
const mapPropsToState = (state) =>{
    return{
        modalmarca:state.consulta.modalmarca
    }
}
 
export default connect(mapPropsToState)(MarcaQuery);