import React, { PureComponent } from 'react'
import {Container,Text} from 'native-base'
import ListasTallas from '../../layout/ListasTallas'

const ListTallaSecond = () => {
    const [talla,setTalla] = React.useState([
        {id:1,talla:"8",unidad:75,uni1:3,uni2:4,uni3:6,uni:1,
        costo1:165,costo2:208,costo3:300,costo4:540},
        {id:2,talla:"10",unidad:75,uni1:3,uni2:4,uni3:6,uni:1,
        costo1:165,costo2:208,costo3:300,costo4:600},
        {id:3,talla:"12",unidad:75,uni1:3,uni2:4,uni3:6,uni:1,
        costo1:180,costo2:228,costo3:330,costo4:600}
    ])
    return (
        <Container>
           <ListasTallas talla={talla}/>
        </Container>
      );
}
 
export default ListTallaSecond;