import React, { PureComponent } from 'react'
import {Container,Text} from 'native-base'
import ListasTallas from '../../layout/ListasTallas'

const ListTallaThree = () => {
    const [talla,setTalla] = React.useState([
        {id:1,talla:"14",unidad:80,uni1:3,uni2:4,uni3:6,uni:1,
        costo1:180,costo2:228,costo3:330,costo4:600},
        {id:2,talla:"16",unidad:80,uni1:3,uni2:4,uni3:6,uni:1,
        costo1:180,costo2:228,costo3:330,costo4:600}
    ])
    return (
        <Container>
           <ListasTallas talla={talla}/>
        </Container>
      );
}
 
export default ListTallaThree;