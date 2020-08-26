import React,{useEffect,useState} from 'react'
import {View,Modal,Platform,StyleSheet} from 'react-native'
import {Button,Text,Icon} from 'native-base'
import {connect,useDispatch} from 'react-redux'
import {ToogleFecha,FechaSearch} from '../../../Redux/ConsultasDucks'
import DateTimePicker from '@react-native-community/datetimepicker';
import { MaterialIcons } from '@expo/vector-icons'; 
import {SpinnerQueryFinal} from '../../../Redux/PedidoDucks'
import moment from 'moment'



const FechaQuery = (props) => {
    let dispatch = useDispatch()
    //first date picker
    const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
    //states second
    
const [date2, setDate2] = useState(new Date(1598051730000));
const [mode2, setMode2] = useState('date');
const [show2, setShow2] = useState(false);
//----------------
  const {_id} = props

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };
    const onChange2 = (event, selectedDate) => {
        const currentDate2 = selectedDate || date;
        setShow2(Platform.OS === 'ios');
        setDate2(currentDate2);
      };
    
      const showMode2 = currentMode => {
        setShow2(true);
        setMode2(currentMode);
      };
     //modal date picker 1
      const showDatepicker2 = () => {
        showMode2('date');
      };
    //function consultas   
    const SearchFecha = ()=>{
      console.log(props.id)
        dispatch(FechaSearch(_id,date,date2))
        dispatch(SpinnerQueryFinal(true))
        dispatch(ToogleFecha(false))
    }


    return (  
        <View>
            <Modal
            visible={props.modalfecha}>
               <View>
               <Button warning onPress={() =>dispatch(ToogleFecha(false))}>
                  <Icon name='arrow-back' />
                    <Text>Back</Text>
                    </Button>
                    
               <Text style={{marginTop:40,fontFamily:'Roboto-Light',fontSize:20,textAlign:'center'}}>Consulta Por Fechas</Text>
               
      <View style={{alignSelf:'center',marginTop:40,alignItems:'center'}}>
          {/* first datepciker */}
  <Button warning onPress={showDatepicker} style={estilos.button}>
  <MaterialIcons name="date-range" style={{marginLeft:10}} size={24} color="white" />
            <Text style={estilos.buttonText}>Primera Fecha!</Text>
      </Button>
      <Text style={estilos.textfecha}>Fecha Inicial : {moment(date).format('DD/MM/YYYY')}</Text>


    <Text style={{fontSize:20,textAlign:'center',marginTop:10,marginBottom:10}}>Hasta</Text>

              {/* segunda datepciker */}
      <Button warning onPress={showDatepicker2} style={estilos.button}>
      <MaterialIcons name="date-range" style={{marginLeft:10}} size={24} color="white" />
            <Text style={estilos.buttonText}>Segunda Fecha!</Text>
      </Button>
      <Text style={estilos.textfecha}>Fecha Secundaria: {moment(date2).format('DD/MM/YYYY')}</Text>

      </View>
        
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}


    {show2 && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date2}
          mode={mode2}
          is24Hour={true}
          display="default"
          onChange={onChange2}
        />
      )} 

    <Button onPress={()=>SearchFecha()} success style={{width:200,alignSelf:'center',marginTop:30}}>
            <Text style={{flex:1,textAlign:'center'}}>Ejecutar Consulta</Text>
    </Button>

               </View>
            </Modal>
        </View>
    );
}
 
const mapPropsToState = (state) =>{
    return{
        modalfecha:state.consulta.modalfecha,
        id:state.consulta.id
    }
}
const estilos = StyleSheet.create({
    button:{
        width:200,
    },
    buttonText:{
        flex:1,
        textAlign:'center'
    },
    textfecha:{
        marginTop:10,
        textAlign:'center',
        fontFamily:'Roboto-Light',
        fontSize:18
    }
})
export default connect(mapPropsToState)(FechaQuery);