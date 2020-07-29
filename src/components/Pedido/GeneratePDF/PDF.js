import React, { useEffect } from 'react'
import {Button,Text} from 'native-base'
import  * as Print from 'expo-print';
import { AntDesign } from '@expo/vector-icons'; 
import {useDispatch,connect} from 'react-redux'
import {ListarPedidos} from '../../../Redux/PedidoDucks'
const PDFComponent = (props) => {

    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(ListarPedidos(props.id))
        // console.log(props.pedidos.id.substring(0,6))
    },[])

    const defaultPrint = async () => {
          await Print.printAsync({
             html:`
             <!DOCTYPE html>
           <html lang="en">
           <body>
              <div style="text-align:center;">
               <h1>Codigo del Pedido : ${props.id.substring(0,6)}</h1>
             <div style="justify-content:center;">
             <h3>Nombre y Apellido:${props.nombre} ${props.apellido}</h3>
             <h3>Direccion:${props.direccion}</h3>
             </div>
                <div class="container">
                
                <div class="row">
                ${
                    props.pedidos.map(item => (
                      `<div class="card" key=${item.id}>
                      <div class="card-header">
                          <img src="${item.image}" class="image_pedido">
                      </div>
                          <div class="card-body">
                          <h3>${item.talla} ${item.sexo}</h3>
                         <h4>Detalle</h4>
                         ${
                             item.nota === "" ? 
                             `<p class="body-detail">No hay Detalle</p>`
                             :
                             `<p class="body-detail">${item.nota}</p>`
                         }
                         
                            <span>Marca : ${item.marca}<span> 
                            <div class="detail-description">
                            <span>Color: ${item.color}</span>
                             <span>Unidades: ${item.unidad}</span>
                            </div>
                          <span style="margin-top:10px;">Total : $/.${item.total} </span>
                        </div>
                    </div>`
                    ))
                }
                  </div>
                </div>
              </div>
             </body>
             </html>
              <style>
              .container{
              text-align:center;
              max-width:1500px;
              padding-right:15px;
              padding-left:15px;
              margin-right:auto;
              margin-left:auto;
              }
              .image_logo{
                position:absolute;
                right:0px;
                top:0;
              }
              .image_pedido{
                width:300px;
                height:150px;
              }
              .title-card{
                color:dodgerblue;
              }
              .row{
                display:flex;
                flex-wrap:wrap;
                justify-content:space-between;
                flex-direction:row;
                margin-right:-15px;
                margin-left:-15px;
              }
              .card{
                margin-top:15px;
                width:300px;
                height:400px;
                display:flex;
                flex-direction:column;
                background-color:#fff;
                border:1px solid rgba(0,0,0,.125);
              }
              .body-detail{
                margin-left:10px;
                margin-right:10px;
              }
              .detail-description{
                display:flex;
                justify-content:space-between;
                margin-left:10px;
                margin-right:10px;
                margin-bottom:5px;
              }
              </style>
             `,
             orientation:Print.Orientation.portrait
    
            });
        }

    return (
        <Button onPress={defaultPrint} style={{width:200,alignSelf:'center',padding:20,marginTop:10}} iconLeft light>
        <AntDesign name="printer" size={24} color="white" />  
         <Text  style={{fontFamily:'Roboto-Light',color:'white'}}>Generar PDF</Text>
   </Button>
      );
}

const mapPropsToState = (state) =>{
    return{
        pedidos:state.pedido.pedidos,
    }
}
export default connect(mapPropsToState)(PDFComponent);