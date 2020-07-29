import {firebase} from '../config/apiKey'

const initialState ={
    pedidos:[],
    snackbar:false,
    mensaje:'',
    modal:false,
    loading:true,
    spinnerquery:false,
    spinnerqueryfinal:true,
    spinnerquerymanagment:false,
    cantidadpedido:0,
    totalpedido:0,
    pedido:{id:null,unidad:'',color:'',talla:'',marca:"",nota:'',total:'',sexo:'',image:null},
    totalmarcas:0,


}
//en mente trabjar pedido con consultas
//

//crud
const AÑADIR_PEDIDO = 'ADD_PEDIDO'
const LISTA_PEDIDOS = 'LIST_PEDIDO'
const DELETE_PEDIDO = 'BORRAR_PEDIDO'
const UPDATE_PEDIDO = 'UPDATE_PEDIDO'
//
const CLOSE_SNACKBAR = 'CLOSE_SNACKBAR'
const SHOW_MENSAJE = 'MOSTRAR_MENSAJE'
const EDIT_PEDIDO = 'EDITAR_PEDIDO'
//modal pedido
const TOGGLEMODAL = 'TOGGLEMODAL'
const SPINNER_QUERY2='SPINNER_QUERY2'
//
//eliminar todos los pedidos
const DELETEALLPEDIDO='DELETEALLPEDIDO'
//total neto pedido
const TOTALPEDIDO = 'TOTALPEDIDO'
//FINAL QUERY
const SPINER_QUERY3='SPINER_QUERY3'
/// markupFormatterIOS
const SET_MARCA = 'SET_MARCA'

export const QuerysTypes = {
    MARCAQUERY : 'MARCA_QUERY',
    FECHAQUERY : 'FECHA_QUERY',
    QUERYSPINNER:'QUERY_SPINNER'
}

export default function PedidoReducer(state=initialState,action){
    switch(action.type){
        //crud pedido
        case AÑADIR_PEDIDO:
            return {...state,
                pedidos:[
                    ...state.pedidos,
                    action.payload
                ],
                snackbar:true,
                spinnerquery:false,
                mensaje:'Pedido Agregado'
            }
        case EDIT_PEDIDO:
        return{
                ...state,
                pedido:{
                id:action.payload.id,
                unidad:action.payload.unidad,
                color:action.payload.color,
                nota:action.payload.nota,
                sexo:action.payload.sexo,
                talla:action.payload.talla,
                image:action.payload.image
                }
            }
        case LISTA_PEDIDOS:
            return{...state,
                pedidos:action.payload.data,
                cantidadpedido:action.payload.cantidad,
                spinnerquery:false,
                spinnerqueryfinal:false,
                spinnerquerymanagment:false
            }
        case DELETEALLPEDIDO:
            return{
                ...state,
                pedidos:[],
                totalpedido:0,
                spinnerquery:false,
                snackbar:true,
                mensaje:'Pedidos Eliminados',
            }
        case DELETE_PEDIDO:
        const newData = state.pedidos.filter(data =>{
            return action.payload !== data.id
        })
            return{
                ...state,
                pedidos:newData,
                spinnerquery:false,
                snackbar:true,
                mensaje:'Pedido Eliminado'
            }
        case UPDATE_PEDIDO:
        const newDato = state.clientes.map(cliente => {
            return cliente.id === action.payload.id ? action.payload : cliente 
        })
            return{
                ...state,
                spinnerquery:false,
                pediddos:newDato,
                snackbar:true,
                mensaje:'Pedido Actualizado'

            }
        case CLOSE_SNACKBAR:
            return{
                ...state,
                snackbar:action.payload
            }
        case SHOW_MENSAJE:
            return{
                ...state,
                snackbar:action.payload
            }
        case TOGGLEMODAL:
            return {
                ...state,modal:action.payload,
                pedido:{id:null,unidad:'',color:'',talla:'',marca:'',nota:'',total:'',sexo:''}
            }
        case SPINNER_QUERY2:
            return{
                ...state,spinnerquery:action.payload
            }
        case TOTALPEDIDO:{
            return{
                ...state,totalpedido:action.payload
            }
        }
        case SPINER_QUERY3:
            return{
                ...state,spinnerqueryfinal:action.payload
            }
        //set marcas
            case SET_MARCA:
            return{
                ...state,pedido:{marca:action.payload}
            }
            //querys function 
         case QuerysTypes.MARCAQUERY:
            return{
                ...state,
                pedidos:action.payload.data,
                totalmarcas:action.payload.cantidad,
                spinnerquerymanagment:false
            }
            case QuerysTypes.FECHAQUERY:
            return{
                ...state,
                pedidos:action.payload.data,
                totalmarcas:action.payload.cantidad,
                spinnerquerymanagment:false
            }
        case QuerysTypes.QUERYSPINNER:
            return{
                ...state,spinnerquerymanagment:action.payload
            }
            
        default:
            return state
    }
}


export const ListarPedidos = (userid) => async(dispatch,getState) =>{
    const db = firebase.firestore() 
    try{
       const data = await db.collection(`clientes/${userid}/articulos`).get()
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
            type:LISTA_PEDIDOS,
            payload:param
        })
  
    }catch(err){
        console.log(err)
    } 
}

export const AddPedido = (userid,data) => async(dispatch) =>{
    const db = firebase.firestore()  
    const date = new Date()
    console.log(date)
    try{
        const dato = await db.collection(`clientes/${userid}/articulos`).add({
            color:data.color,
            talla:data.talla,
            marca:data.marca,
            nota:data.nota,
            total:data.total,
            unidad:data.unidad,
            sexo:data.sexo,
            image:data.image,
            createdAt: new Date()

        })
         const param={id:dato.id,...data}
            dispatch({
                type:AÑADIR_PEDIDO,
                payload:param
            })
    }catch(err){
        console.log(err)
    }
}


export const EliminarPedido = (userid,pedidoid) => async(dispatch,getState) =>{
    const db = firebase.firestore()  
    try{
        await db.collection(`clientes/${userid}/articulos`).doc(pedidoid).delete()
        .then(function(){
            dispatch({
                type:DELETE_PEDIDO,
                payload:pedidoid
            })
        })
    }catch(err){
        console.log(err)
    }
}

export const UpdatePedido = (data)=>async(dispatch)=>{
    const db= firebase.firestore()
    try{
        const query = data.collection(`clientes/${userid}/articulos`).doc(param.id)
        await query.update({
            color:data.color,
            talla:data.talla,
            marca:data.marca,
            nota:data.nota,
            total:data.total,
            unidad:data.unidad,
            sexo:data.sexo,
            image:data.image,
        })
        dispatch({
                type:UPDATE_PEDIDO,
                payload:param
        })
    }catch(err){
        console.log(err)
    }
}

export const EditPedido = (item)=>(dispatch)=>{
    dispatch({
        type:EDIT_PEDIDO,
        payload:item
    })
}

export const SumPedido = (userid) => async(dispatch,getState) =>{
    const db =firebase.firestore()
    try{
       const data =  await db.collection(`clientes/${userid}/articulos`).get()
        const arrayTotal = data.docs.map(doc => ({...doc.data()}))
        let sumaTotal =0 
        arrayTotal.forEach(element =>{
            sumaTotal+=element.total
        })
        dispatch({
            type:TOTALPEDIDO,
            payload:sumaTotal
        })
            
        
    }catch(err){
        console.log(err)
    }
}
//lote y escrituras en firestore 

// Para borrar por completo una colección o subcolección 
// en Cloud Firestore, recupera todos los documentos de la colección o subcolección 
// y bórralos. Si tienes colecciones más grandes, te recomendamos borrar los documentos en
//  grupos pequeños para evitar errores de memoria
//  insuficiente. Repite el proceso hasta que borres toda la colección o subcolección.
//----
// Para eliminar varios documentos, puede hacer una sola escritura por lotes. 
// La clase WriteBatch tiene un método delete () para este propósito

// const data = await db.collection(`clientes/${userid}/articulos`).get()
// const arrayData = data.docs.map(doc => ({id:doc.id,...doc.data()}))
export const DeleteAllPedidos = (userid)=> async(dispatch)=>{
    const db = firebase.firestore()  
    const data = await  db.collection(`clientes/${userid}/articulos`).get()
       const arraysid= data.docs.map(doc => ({id:doc.id}))
       arraysid.forEach(element => {
            db.collection(`clientes/${userid}/articulos`).doc(element.id).delete()
            dispatch({
                type:DELETEALLPEDIDO,
                payload:element.id
            })
       });
}


export const CloseSnackbar = () => (dispatch) =>{
    dispatch({
        type:CLOSE_SNACKBAR,
        payload:false
    })
}

export const PedidoMensaje = (mensaje) => (dispatch) =>{
    dispatch({
        type:SHOW_MENSAJE,
        payload:mensaje
    })
}

//toggle => show and hide
export const TOGGLE_MODAL = (databoolean) => (dispatch) =>{
    dispatch({
        type:TOGGLEMODAL,
        payload:databoolean
    })
}
//SPINNER QUERY de consultas
export const QuerySpinner = () => (dispatch) =>{
    dispatch({
        type:SPINNER_QUERY2,
        payload:true
    })
}
//spiner de cargar data
export const QuerySpinnerFinal =(data)=>(dispatch)=>{
    dispatch({
        type:SPINER_QUERY3,
        payload:data
    })
}

export const setMarca = (data)=>(dispatch)=>{
    dispatch({
        type:SET_MARCA,
        payload:data
    })
}
export const SpinnerQueryFinal = (data)=>(dispatch)=>{
    dispatch({
        type:QuerysTypes.QUERYSPINNER,
        payload:data
    })
}