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
    pedido:{id:null,unidad:'',color:'',talla:'',marca:"",sexo:'',image:null,imageUrl:''},
    totalmarcas:0,
    // image:{file:null,filename:null}
    file:null,
    filename:null,
    imageold:null
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
//FINAL QUERY
const SPINER_QUERY3='SPINER_QUERY3'
/// markupFormatterIOS
const SET_MARCA = 'SET_MARCA'

export const QuerysTypes = {
    MARCAQUERY : 'MARCA_QUERY',
    FECHAQUERY : 'FECHA_QUERY',
    QUERYSPINNER:'QUERY_SPINNER'
}

//image FILENAME AND FILE
const SET_FILE='SET_FILE'
const SET_FILENAME = 'SET_FILENAME'
const SET_IMAGEOLD = 'SET_IMAGEOLD'

export default function PedidoReducer(state=initialState,action){
    switch(action.type){
        //crud pedido
        case AÑADIR_PEDIDO:
            return {...state,
                pedidos:[
                    ...state.pedidos,
                    action.payload
                ],
                cantidadpedido:state.cantidadpedido+1,
                snackbar:true,
                spinnerquery:false,
                file:null,
                mensaje:'Pedido Agregado'
            }
        case EDIT_PEDIDO:
        return{
                ...state,
                pedido:{
                id:action.payload.id,
                unidad:action.payload.unidad,
                color:action.payload.color,
                marca:action.payload.marca,
                nota:action.payload.nota,
                sexo:action.payload.sexo,
                talla:action.payload.talla,
                image:action.payload.image,
                imageUrl:action.payload.imageUrl
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
                cantidadpedido:0,
                spinnerquery:false,
                // cantidadpedido:state.cantidadpedido+1,
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
                cantidadpedido:state.cantidadpedido-1,
                snackbar:true,
                mensaje:'Pedido Eliminado'
            }
        case UPDATE_PEDIDO:
        const newDato = state.pedidos.map(pedido => {
            return pedido.id === action.payload.id ? action.payload : pedido 
        })
            return{
                ...state,
                spinnerquery:false,
                pedidos:newDato,
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
                pedido:{id:null,unidad:'',color:'',talla:'',marca:'',nota:'',sexo:''}
            }
        case SPINNER_QUERY2:
            return{
                ...state,spinnerquery:action.payload
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
           //add files 
         case SET_FILE:
             return{
                 ...state,file:action.payload
             }
         case SET_FILENAME:
             return{
                 ...state,filename:action.payload
             }
          case SET_IMAGEOLD:
              return{
                  ...state,imageold:action.payload
              }
        default:
            return state
    }
}


export const TOOGLE_FILE=(file)=>(dispatch)=>{
       dispatch({
           type:SET_FILE,
           payload:file
       })
}
export const TOOGLE_FILENAME =(filename)=>(dispatch)=>{
    dispatch({
        type:SET_FILENAME,
        payload:filename
    })
}

export const TOOGLE_IMAGEOLD =(image) => (dispatch)=>{
    dispatch({
        type:SET_IMAGEOLD,
        payload:image
    })
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

// const UploadFile = (image,blob)=>{
//     try
//     {
//         // const dato = await db.collection(`clientes/${userid}/articulos`).add({
//             let upload =  firebase.storage().ref().child(`pedidos/${image}`).put(blob)
//             upload.on('state_changed',(snapshot)=>{
//                 var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//                 console.log('Upload is ' + progress + '% done');
//                     switch (snapshot.state) {
//                         case firebase.storage.TaskState.PAUSED: // or 'paused'
//                         console.log('Upload is paused');
//                         break;
//                         case firebase.storage.TaskState.RUNNING: // or 'running'
//                         console.log('Upload is running');
//                         break;
//             }}, function(error) {
//                         console.log(error)
//             }, async()=>{
//                 await upload.snapshot.ref.getDownloadURL()
//             })
//     }catch(err){
//         console.log(err)
//     }
// }


//recordar el total no va en la db
export const AddPedido = (userid,data,file) => async(dispatch) =>{
    const db = firebase.firestore()  
    // const date = new Date()
    // console.log(date)
    const response = await fetch(file)
    //image blob
    const blob = await response.blob()
    try
    {
        // const dato = await db.collection(`clientes/${userid}/articulos`).add({
            let upload = firebase.storage().ref().child(`pedidos/${data.image}`).put(blob)
            upload.on('state_changed',(snapshot)=>{
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case firebase.storage.TaskState.PAUSED: // or 'paused'
                        console.log('Upload is paused');
                        break;
                        case firebase.storage.TaskState.RUNNING: // or 'running'
                        console.log('Upload is running');
                        break;
            }}, function(error) {
                        console.log(error)
            }, async()=>{
                upload.snapshot.ref.getDownloadURL().then( async function(downloadURL) {
                    console.log('File available at', downloadURL);
                       await db.collection(`clientes/${userid}/articulos`).add({
                                color:data.color,
                                 image:data.image,
                                imageUrl : downloadURL,
                                 marca:data.marca,
                                 nota:data.nota,
                                  sexo:data.sexo,
                                talla:data.talla,
                                unidad:data.unidad,
                                createdAt: new Date()
                            }).then(docRef => {
                                data.id=docRef.id
                                data.imageUrl=downloadURL
                                dispatch({
                                    type:AÑADIR_PEDIDO,
                                    payload:data
                                })
                            })
                             
                })
            })
    }catch(err){
        console.log(err)
    }
}


export const EliminarPedido = (userid,pedidoid) => async(dispatch) =>{
    const db = firebase.firestore()  
    var storage = firebase.storage()
    var storageRef = storage.ref()
    try{
        const data = await  db.collection(`clientes/${userid}/articulos`).get()
        const arrayData = data.docs.map(doc => ({id:doc.id,...doc.data()}))
        console.log('get data delete',arrayData[0])
        await db.collection(`clientes/${userid}/articulos`).doc(pedidoid).delete()
        .then(function(){
             console.log('imagen delete',arrayData[0].image)
             const filename = arrayData[0].image
               var deleteRef = storageRef.child(`pedidos/${filename}`)
               deleteRef.delete().then(()=>{
                console.log("delete sucessfull")  
                dispatch({
                    type:DELETE_PEDIDO,
                    payload:pedidoid
                })
               })
                   
        })
    }catch(err){
        console.log(err)
    }
}

export const UpdatePedido = (data,userid,oldimage,file)=>async(dispatch)=>{
    const db= firebase.firestore()
    var storage = firebase.storage()
    var storageRef = storage.ref()
    //verificar si el archivo existe
    try{
        //verificar archivo funcional 
        storageRef.child(`pedidos/${data.image}`).getDownloadURL().then(onResolve, onReject);

        async function onResolve() { 
            //no cambia data.image ni data.url
            console.log("file exists")
            //requiero enviar del mismo nombre de archivo 
            const query = db.collection(`clientes/${userid}/articulos`).doc(data.id)
            await query.update({
                color:data.color,
                talla:data.talla,
                marca:data.marca,
                nota:data.nota,
                unidad:data.unidad,
                sexo:data.sexo
            }).then(() => {
                console.log("actualizando")
                dispatch({
                        type:UPDATE_PEDIDO,
                        payload:data
                })
            })
        }

        async function onReject(){ 
            console.log("no existe archivo")
            console.log("upload",data.image)
            console.log("file ",file)
            console.log("image ",oldimage)
            const response = await fetch(file)
            //image blob
            const blob = await response.blob()

            //estoy pasando un archivo com mismas variables xd
            var deleteRef = storageRef.child(`pedidos/${oldimage}`)
            deleteRef.delete().then(()=>{
            let upload = firebase.storage().ref().child(`pedidos/${data.image}`).put(blob)
            upload.on('state_changed',(snapshot)=>{
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case firebase.storage.TaskState.PAUSED: // or 'paused'
                        console.log('Upload is paused');
                        break;
                        case firebase.storage.TaskState.RUNNING: // or 'running'
                        console.log('Upload is running');
                        break;
            }}, function(error) {
                        console.log(error)
            }, async()=>{
                upload.snapshot.ref.getDownloadURL().then( async function(downloadURL) {
                      const query = db.collection(`clientes/${userid}/articulos`).doc(data.id)
                            await query.update({
                                color:data.color,
                                talla:data.talla,
                                marca:data.marca,
                                nota:data.nota,
                                unidad:data.unidad,
                                sexo:data.sexo,
                                image:data.image,
                                imageUrl:downloadURL
                            }).then(() => {
                                console.log(data)
                                // lo unico que cambio es el image y imageurl
                                data.imageUrl=downloadURL
                                dispatch({
                                    type:UPDATE_PEDIDO,
                                    payload:data
                               })
                            })
                })
            }) 
           })
        }

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

//funcional 100% => problema [Object Object]
export const DeleteAllPedidos = (userid)=> async(dispatch)=>{
    const db = firebase.firestore()  
    var storage = firebase.storage()
    var storageRef = storage.ref()

    const data = await  db.collection(`clientes/${userid}/articulos`).get()
       const arrayData= data.docs.map(doc => ({id:doc.id,...doc.data()}))
       //get all filesnames
       arrayData.forEach(element => {
           console.log('delete',element.image)
                var deleteRef = storageRef.child(`pedidos/${element.image}`)
                deleteRef.delete().then(()=>{
                      console.log("delete sucessfull pedido and images")
                        db.collection(`clientes/${userid}/articulos`).doc(element.id).delete().then( async function(){
                            dispatch({
                                type:DELETEALLPEDIDO,
                        })
                    })
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

// export const setMarca = (data)=>(dispatch)=>{
//     dispatch({
//         type:SET_MARCA,
//         payload:data
//     })
// }
export const SpinnerQueryFinal = (data)=>(dispatch)=>{
    dispatch({
        type:QuerysTypes.QUERYSPINNER,
        payload:data
    })
}
