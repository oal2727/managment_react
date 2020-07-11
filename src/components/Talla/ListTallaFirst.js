import React, { PureComponent } from 'react'
import {Container,Text} from 'native-base'
import ListasTallas from '../../layout/ListasTallas'
const ListTallaFirst = () => {
    const [talla,setTalla] = React.useState([
        {id:1,talla:"2",unidad:70,uni1:3,uni2:4,uni3:6,uni:1,
        costo1:165,costo2:208,costo3:300,costo4:540},
        {id:2,talla:"4",unidad:70,uni1:3,uni2:4,uni3:6,uni:1,
        costo1:165,costo2:208,costo3:300,costo4:540},
        {id:3,talla:"6",unidad:70,uni1:3,uni2:4,uni3:6,uni:1,
        costo1:165,costo2:208,costo3:300,costo4:540}
    ])

    return ( 
        <Container>
           <ListasTallas talla={talla}/>
        </Container>

     );
}
 
export default ListTallaFirst;