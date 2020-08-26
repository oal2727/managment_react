import React,{useEffect}  from 'react'
import {Container} from 'native-base'
import ListConsultas from '../components/Consultas/ListConsultas'
const PageConsultasDashboard = ({route}) => {
    const id = route.params.id //id del cliente

    return (
            <Container>
                <ListConsultas id={id}/>
            </Container>
      );
}

export default PageConsultasDashboard;