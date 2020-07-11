import {createStore,combineReducers,compose,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import CRUDCliente from './ClienteDucks'
import CRUDPedido from './PedidoDucks'

const rootReducer = combineReducers({
    cliente: CRUDCliente,
    pedido:CRUDPedido
})

export default function generateStore(){
    const store = createStore(rootReducer,applyMiddleware(thunk))
    return store
}

//problema
// An unhandled error was caught from submitForm(), 
//[Error: Actions must be plain objects. Use custom middleware for async actions.

//solucion habilitar midleware para usar thunk funciones de acciones