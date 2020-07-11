export const CalculoPedido = (values) =>{
    console.log(values)
    const talla = values.talla
    const unidades = values.unidad
    //aislar por precio unidad
    if(talla == "2" || talla == "4" || talla == "6"){
        const preciounidad=70
        const preciorebaja1=55
        const preciorebaja2=52
        const preciorebaja3=50
        const preciorebaja4=45
        CostoPedido(unidades,preciounidad,preciorebaja1,preciorebaja2,preciorebaja3,preciorebaja4)

    }else if( talla == "8"){
        const preciounidad=75
        const preciorebaja1=55
        const preciorebaja2=52
        const preciorebaja3=50
        const preciorebaja4=45
        CostoPedido(unidades,preciounidad,preciorebaja1,preciorebaja2,preciorebaja3,preciorebaja4)
    }else if(talla == "10"){
        const preciounidad=75
        const preciorebaja1=55
        const preciorebaja2=52
        const preciorebaja3=50
        const preciorebaja4=50
        CostoPedido(unidades,preciounidad,preciorebaja1,preciorebaja2,preciorebaja3,preciorebaja4)
    }else if(talla == "12"){
        const preciounidad=75
        const preciorebaja1=60
        const preciorebaja2=57
        const preciorebaja3=55
        const preciorebaja4=50
        CostoPedido(unidades,preciounidad,preciorebaja1,preciorebaja2,preciorebaja3,preciorebaja4)
    }else if(talla == "14" || talla == "16"){
        console.log("talla 14")
        const preciounidad=80
        const preciorebaja1=60
        const preciorebaja2=57
        const preciorebaja3=55
        const preciorebaja4=50
        CostoPedido(unidades,preciounidad,preciorebaja1,preciorebaja2,preciorebaja3,preciorebaja4)
    }else if(talla == "S" || talla == "M" || talla =="L"){
        const preciounidad=90
        const preciorebaja1=76
        const preciorebaja2=74
        const preciorebaja3=72
        const preciorebaja4=70
        CostoPedido(unidades,preciounidad,preciorebaja1,preciorebaja2,preciorebaja3,preciorebaja4)
    }else{
        const preciounidad=95
        const preciorebaja1=81
        const preciorebaja2=79
        const preciorebaja3=77
        const preciorebaja4=75
        CostoPedido(unidades,preciounidad,preciorebaja1,preciorebaja2,preciorebaja3,preciorebaja4)
    }
}
const CostoPedido = (unidades,preciounidad,preciorebaja1,preciorebaja2,preciorebaja3,preciorebaja4) => {
    if(unidades <= 2){
        return preciounidad * unidades
    }else if(unidades == 3){
        return  preciorebaja1 * 3
    }
    // 4 unidades listo
    else if(unidades <= 4){
        return  preciorebaja2 * 4
    }else if(4 <= unidades && unidades <= 5){
        return preciorebaja2 * unidades
    }
    // 6 unidades listo 
    else if(unidades == 6){
        return  preciorebaja3 * 6
     
    }else if(6 <= unidades && unidades <= 11){
        console.log("unidades 7 heres")
        console.log(preciorebaja3 * unidades)
        return  preciorebaja3 * unidades            
    }
    //12 unidades listo
    else if(unidades == 12){
        return preciorebaja4 * 12
    }else{
        return preciorebaja4 * unidades
    }
}

// module.exports = CalculoPedido