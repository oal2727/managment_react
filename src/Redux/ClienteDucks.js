import {firebase} from '../config/apiKey'
const initialState={
    clientes:[],
    nombre:'',
    cliente:{id:'',nombre:'',apellido:'',direccion:'',sexo:''},
    spinner:true,
    mensaje:'',
    snackbarShow:false,
    modal:false,
    spinnerquery:false,
    totalclientes:0,
    totalhombres:0,
    totalmujeres:0
}

const ADD_CLIENT = 'AÑADIR_CLIENTE' //create
const EDITAR_CLIENT='EDITAR_CLIENTE' //read
const UPDATE_CLIENT = 'UPDATE_CLIENTE' //update
const DELETE_CLIENT = 'ELIMINANDO_CLIENTE' //delete
//show data 
const LISTA_CLIENT='LISTA_CLIENTES'
//snackbars
export const SHOW_SNACKBAR = 'SHOW_SNACKBAR'
export const HIDE_SNACKBAR = 'CLOSE_SNACKBAR'
//events modal
const SHOW_MODAL= 'MOSTRAR_MODAL'
const CLOSE_MODAL = 'CLOSE_MODAL'
//message snackbar
const SHOW_MESSAGE='MOSTRAR_MENSAJE'
//spiner query
const SPINNER_QUERY = 'SPINNER_QUERY'
//total clientes , HOMBRES ,MUJERES
const CANTIDAD_CLIENTES = 'CANTIDAD_CLIENTES'
const TOTAL_HOMBRES = 'TOTAL_HOMBRES'
const TOTAL_MUJERES = 'TOTAL_MUJERES'
//
const BUSCACLIENTE = 'BUSCARCLIENTE'



 
export default function ClienteReducer(state=initialState,action){
    switch(action.type){
        //create data
        case ADD_CLIENT:
            return {...state,
                    clientes:[
                        ...state.clientes,
                        action.payload,
                    ], snackbarShow:true,spinnerquery:false,mensaje:'Agregado Correctamente'}
        //read data
        case EDITAR_CLIENT:
             return { ...state,
                    cliente:{nombre:action.payload.nombre,
                            apellido:action.payload.apellido,
                            direccion:action.payload.direccion,
                            sexo:action.payload.sexo,
                            id:action.payload.id} }
    //update data
        case UPDATE_CLIENT:
               let newData = state.clientes.map(cliente => {
                   return cliente.id === action.payload.id ? action.payload : cliente 
               })
               return{
                   ...state,
                   clientes:newData,
                   snackbarShow:true,
                   spinnerquery:false,
                   mensaje:'Actualizado Correctamente'
               }
     //delete data
        case DELETE_CLIENT:
            const letData = state.clientes.filter(dato => {
                return action.payload !== dato.id
            })
            return{...state,clientes:letData,snackbarShow:true,spinnerquery:false,mensaje:'Eliminado Correctamente' }
         //show data
        case LISTA_CLIENT:
        return {
            ...state,clientes:action.payload,
            spinner:false,
            spinnerquery:false
            }
        case BUSCACLIENTE:
            return{
                ...state,clientes:action.payload,
                spinnerquery:false
            }
    //modals
        case SHOW_MODAL:
            return{
                ...state,
                modal:action.payload
            }
        case CLOSE_MODAL:
            return{
                ...state,
                modal:action.payload,
                cliente:{id:'',nombre:'',apellido:'',direccion:'',sexo:'Seleccione'}
            }
        //snackbars
        case SHOW_SNACKBAR:
            return{
                ...state,
                snackbarShow:action.payload
            }
        case HIDE_SNACKBAR:
            return{
                ...state,
                snackbarShow:action.payload
            }
            //message
        case SHOW_MESSAGE:
            return{
                ...state,mensaje:action.payload
            }
            //visible query
        case SPINNER_QUERY:
            return{
                ...state,spinnerquery:action.payload
            }
        case CANTIDAD_CLIENTES:
            return{
                ...state,totalclientes:action.payload
            }
        case TOTAL_HOMBRES:
        return{
            ...state,totalhombres:action.payload
        }
        case TOTAL_MUJERES:
            return{
                ...state,totalmujeres:action.payload
            }
        default:
            return state
    }
}

export const AddCliente= (data) => async(dispatch,getState) =>{
    const db = firebase.firestore()  
    try{
    await db.collection('clientes').add({
            nombre:data.nombre,
            apellido:data.apellido,
            direccion:data.direccion,
            sexo:data.sexo
        }).then(docRef=>{
            const param={
                id:docRef.id,nombre:data.nombre,apellido:data.apellido,direccion:data.direccion,sexo:data.sexo
            }
            dispatch({
                 type:ADD_CLIENT,
                  payload:param
             })
        }) 
       
        
    }catch(err){
        console.log(err)
    } 
}

export const ListClient= () => async(dispatch,getState) =>{
    const db = firebase.firestore()  
    try{
       const data = await db.collection('clientes').get()
        const arrayData = data.docs.map(doc => ({id:doc.id,...doc.data()}))
        dispatch({
                type:LISTA_CLIENT,
                payload:arrayData
            })
    
  
    }catch(err){
        console.log(err)
    } 
}

export const DeleteClient = (id) =>async(dispatch) =>{
    const db = firebase.firestore()
       await db.collection('clientes').doc(id).delete().then(function(){
            dispatch({
                type:DELETE_CLIENT,
                payload:id
            })
       })
        const data =  await db.collection(`clientes/${id}/articulos`).get()
     const arraysid= data.docs.map(doc => ({id:doc.id}))
         arraysid.forEach(element => {
      db.collection(`clientes/${id}/articulos`).doc(element.id).delete()
  });
 
}

export const EditarCliente = (param) =>async(dispatch)=>{
    dispatch({
        type:EDITAR_CLIENT,
        payload:param
    })
}

//problem function reducer

export const UpdateCliente = (param) => async(dispatch,getState)=>{
    const data = firebase.firestore()
    try{
        const query = data.collection('clientes').doc(param.id)
        await query.update({
            nombre:param.nombre,
            apellido:param.apellido,
            direccion:param.direccion,
            sexo:param.sexo
        })
            dispatch({
                type:UPDATE_CLIENT,
                payload:param
             })
    }catch(err){
        console.log(err)
    }
} 
//crear acciones de los snackbar tambien reducers

export const openSnackbar = () =>(dispatch)=>{
    dispatch({
        type:SHOW_SNACKBAR,
        payload:true
    })
}
//events snackbar
export const closeSnackbar = () =>(dispatch)=>{
    dispatch({
        type:HIDE_SNACKBAR,
        payload:false
    })
}
//events modal
export const ShowModal = () => (dispatch) =>{
    dispatch({
        type:SHOW_MODAL,
        payload:true
    })
}

export const CloseModal = () => (dispatch) =>{
    dispatch({
        type:CLOSE_MODAL,
        payload:false
    })
}

//message snackbar
export const MessageSnackbar = (mensaje) => (dispatch) =>{
    dispatch({
        type:SHOW_MESSAGE,
        payload:mensaje
    })
}
//SPINNER QUERY
export const QuerySpinner = () => (dispatch) =>{
    dispatch({
        type:SPINNER_QUERY,
        payload:true
    })
}

export const BuscarCliente = (dato) => async(dispatch) =>{
    const db = firebase.firestore()
    try{   
       
        const data = await db.collection('clientes').orderBy('nombre').startAt(dato).endAt(dato+'\uf8ff').get().then(c =>{
            const array = c.docs.map(doc => ({id:doc.id,...doc.data()}))
            dispatch({
                type:BUSCACLIENTE,
                payload:array
            })
        })

    }catch(err){
        console.log(err)
    }
}
//GROUPS TOTALS HOMBRES , CLINETES , MUJERES


export const TotalHombres = ()=>async(dispatch)=>{
    const db = firebase.firestore()
    try{
        const data =  await db.collection(`clientes`).where('sexo','==','Hombre').get()
        const arrayCantidad = data.docs.map(doc => ({...doc.data()}))
        let total =0 
        arrayCantidad.forEach(element =>{
            total+=1
        })
        dispatch({
            type:TOTAL_HOMBRES,
            payload:total
        })
    }catch(err){
        console.log(err)
    }
}



export const TotalMujeres = ()=>async(dispatch)=>{
    const db = firebase.firestore()
    try{
        const data =  await db.collection(`clientes`).where('sexo','==','Mujer').get()
        const arrayCantidad = data.docs.map(doc => ({...doc.data()}))
        let total =0 
        arrayCantidad.forEach(element =>{
            total+=1
        })
        dispatch({
            type:TOTAL_MUJERES,
            payload:total
        })
    }catch(err){
        console.log(err)
    }
}

//TOTAL
export const TotalClientes = () => async(dispatch) =>{
    const db = firebase.firestore()
    try{
        const data =  await db.collection(`clientes`).get()
        const arrayCantidad = data.docs.map(doc => ({...doc.data()}))
        let total =0 
        arrayCantidad.forEach(element =>{
            total+=1
        })
        dispatch({
            type:CANTIDAD_CLIENTES,
            payload:total
        })
    }catch(err){
        console.log(err)
    }
}
