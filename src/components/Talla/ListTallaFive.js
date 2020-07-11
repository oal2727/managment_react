import React, { PureComponent } from 'react'
import {Container,Text} from 'native-base'
import ListasTallas from '../../layout/ListasTallas'

const ListTallaFive = () => {
    const [talla,setTalla] = React.useState([
        {id:1,talla:"XL",unidad:95,uni1:3,uni2:4,uni3:6,uni:1,
        costo1:243,costo2:316,costo3:462,costo4:864},
    ])
    return (
        <Container>
           <ListasTallas talla={talla}/>
        </Container>
      );
}
 
export default ListTallaFive;