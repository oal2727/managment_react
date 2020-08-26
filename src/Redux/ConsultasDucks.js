import {firebase} from '../config/apiKey'
import {QuerysTypes} from './PedidoDucks'
const InitialState={
    modalfecha:false,
    modalmarca:false,

}

const TOOGLE_FECHA = 'TOOGLE_FECHA'
const TOOGLE_MARCA = 'TOOGLE_MARCA'
export default function ConsultaReducer(state=InitialState,action){
   switch(action.type){
       case TOOGLE_FECHA:
            return {
                ...state,modalfecha:action.payload
            }
        case TOOGLE_MARCA:
            return {
                ...state,modalmarca:action.payload
            }
        default:
            return state
   }
}


export const ToogleMarca = (databoolean) => (dispatch) =>{
        dispatch({
            type:TOOGLE_MARCA,
            payload:databoolean
        })
}
export const ToogleFecha = (databoolean) => (dispatch) =>{
    dispatch({
        type:TOOGLE_FECHA,
        payload:databoolean
    })
}
export const MarcaSearch = (userid,value)=>async(dispatch,getState) => {
    const db = firebase.firestore()
    try{
        const data =  await db.collection(`clientes/${userid}/articulos`).where('marca','==',value).get()
        const arrayData = data.docs.map(doc => ({id:doc.id,...doc.data()}))
        let total =0 
        arrayData.forEach(element =>{
            total+=1
        })
        const param = {
            data:arrayData,
            cantidad:total
        }
        dispatch({
            type:QuerysTypes.MARCAQUERY,
            payload:param
        })
    }catch(err){
        console.log(err)
    }
}
export const FechaSearch = (_id,f1,f2)=>async(dispatch) => {
    const db = firebase.firestore()
    try{
        // .where(f2,'<','created_At').get()
        // const data =  await db.collection(`clientes/${userid}/articulos`).where('createdAt','==',f1).get()
     const data =  await db.collection(`clientes/${_id}/articulos`).where('createdAt','>=',f1).where('createdAt','<=',f2).get()

        const arrayData = data.docs.map(doc => ({id:doc.id,...doc.data()}))
        let total =0 
        arrayData.forEach(element =>{
            total+=1
        })
        const param = {
            data:arrayData,
            cantidad:total
        }
        dispatch({
            type:QuerysTypes.FECHAQUERY,
            payload:param
        })
    }catch(err){
        console.log(err)
    }
}