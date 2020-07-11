import React, { PureComponent } from 'react'
import {Container,Text} from 'native-base'
import ListasTallas from '../../layout/ListasTallas'

const ListaTallaFour = () => {
    const [talla,setTalla] = React.useState([
        {id:1,talla:"S",unidad:90,uni1:3,uni2:4,uni3:6,uni:1,
        costo1:228,costo2:296,costo3:432,costo4:840},
        {id:2,talla:"M",unidad:90,uni1:3,uni2:4,uni3:6,uni:1,
        costo1:228,costo2:296,costo3:432,costo4:840},
        {id:3,talla:"L",unidad:90,uni1:3,uni2:4,uni3:6,uni:1,
        costo1:228,costo2:296,costo3:432,costo4:840}
    ])
    return (
        <Container>
           <ListasTallas talla={talla}/>
        </Container>
      );
}
 
export default ListaTallaFour;