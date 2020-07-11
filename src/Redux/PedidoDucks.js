import {firebase} from '../config/apiKey'

const initialState ={
    pedidos:[],
    snackbar:false,
    mensaje:'',
    modal:false,
    loading:true,
    spinnerquery:false,
    spinnerqueryfinal:true,
    totalpedido:0,
    pedido:{unidad:'',color:'',talla:'',marca:'',nota:'',total:'',sexo:'',image:''}
    
}

const AÑADIR_PEDIDO = 'ADD_PEDIDO'
const LISTA_PEDIDOS = 'LIST_PEDIDO'
const DELETE_PEDIDO = 'BORRAR_PEDIDO'
const CLOSE_SNACKBAR = 'CLOSE_SNACKBAR'
const SHOW_MENSAJE = 'MOSTRAR_MENSAJE'
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


export default function PedidoReducer(state=initialState,action){
    switch(action.type){
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
        case LISTA_PEDIDOS:
            return{...state,pedidos:action.payload,
                spinnerquery:false,
                spinnerqueryfinal:false
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
                pedido:{unidad:'',color:'',talla:'',marca:'',nota:'',total:'',sexo:''}
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
        default:
            return state
    }
}


export const ListarPedidos = (userid) => async(dispatch,getState) =>{
    const db = firebase.firestore() 
    try{
       const data = await db.collection(`clientes/${userid}/articulos`).get()
        const arrayData = data.docs.map(doc => ({id:doc.id,...doc.data()}))
        dispatch({
            type:LISTA_PEDIDOS,
            payload:arrayData
        })
  
    }catch(err){
        console.log(err)
    } 
}

export const AddPedido = (userid,data) => async(dispatch) =>{
    const db = firebase.firestore()  
    try{
        const dato = await db.collection(`clientes/${userid}/articulos`).add({
            color:data.color,
            talla:data.talla,
            marca:data.marca,
            nota:data.nota,
            total:data.total,
            unidad:data.unidad,
            sexo:data.sexo,
            image:data.image
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