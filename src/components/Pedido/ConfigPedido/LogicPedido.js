class Pedido{
    constructor(){}

    getPedidos(){
        const tallas=[
            {id:'1',nombre:'Seleccione'},
            {id:'2',nombre:'Talla 2'},
            {id:'3',nombre:'Talla 4'},
            {id:'4',nombre:'Talla 6'},
            {id:'5',nombre:'Talla 8'},
            {id:'6',nombre:'Talla 10'},
            {id:'7',nombre:'Talla 12'},
            {id:'8',nombre:'Talla 14'},
            {id:'9',nombre:'Talla 16'},
            {id:'10',nombre:'Talla S'},
            {id:'11',nombre:'Talla M'},
            {id:'12',nombre:'Talla L'},
            {id:'13',nombre:'Talla XL'},
        ]
        return tallas
    }
    getMarcas(){
        //maarcas funcional sin necesidad de la imagen
        const marcas=[
            {id:'1',nombre:'Seleccione'},
            {id:2,nombre:'Nike'},
            {id:3,nombre:'Adidas'},
            {id:4,nombre:"Reebook"},
            {id:5,nombre:"Fila"},
            {id:6,nombre:"Puma"},
            {id:7,nombre:'Jordan'}
          ]
          return marcas
    }
    getSexo(){
        const sexos=[
            {id:'1',nombre:'Seleccione'},
            {id:'2',nombre:'Hombre'},
            {id:'3',nombre:'Mujer'}
          ]
          return sexos
    }
    getColores(){
        //implementar un concat imagne
        const colores = [
                {id:1,nombre:'Sky',imagen:require('../../../../assets/imagenes/Colores/PARTE1/Sky.jpg')},
                {id:2,nombre:'Azulino',imagen:require('../../../../assets/imagenes/Colores/PARTE1/Azulino.jpg')},
                {id:3,nombre:'Acero',imagen:require('../../../../assets/imagenes/Colores/PARTE1/Acero.jpg')},
                //parte 2
                {id:4,nombre:'Blanco',imagen:require('../../../../assets/imagenes/Colores/PARTE2/Blanco.jpg')},
                {id:5,nombre:'Melangue 3%',imagen:require('../../../../assets/imagenes/Colores/PARTE2/Melangue3.jpg')},
                {id:6,nombre:'Melangue 10%',imagen:require('../../../../assets/imagenes/Colores/PARTE2/Melangue10.jpg')},
                {id:7,nombre:'Negro',imagen:require('../../../../assets/imagenes/Colores/PARTE2/Negro.jpg')},
                //parte 3
                {id:8,nombre:'Mostaza',imagen:require('../../../../assets/imagenes/Colores/PARTE3/Mostaza.jpg')},
                {id:9,nombre:'Oro',imagen:require('../../../../assets/imagenes/Colores/PARTE3/Oro.jpg')},
                {id:10,nombre:'Brasil',imagen:require('../../../../assets/imagenes/Colores/PARTE3/Brasil.jpg')},
                //parte 4 
                {id:11,nombre:'Chicle',imagen:require('../../../../assets/imagenes/Colores/PARTE4/Chicle.jpg')},
                {id:12,nombre:'Fucsia',imagen:require('../../../../assets/imagenes/Colores/PARTE4/Fugsia.jpg')},
                {id:13,nombre:'Rosa',imagen:require('../../../../assets/imagenes/Colores/PARTE4/Rosado.jpg')},
                {id:14,nombre:'Guinda',imagen:require('../../../../assets/imagenes/Colores/PARTE4/Guinda.jpg')},
                //parte 5
                {id:15,nombre:'Melon',imagen:require('../../../../assets/imagenes/Colores/PARTE5/Melon.jpg')},
                {id:16,nombre:'Agua',imagen:require('../../../../assets/imagenes/Colores/PARTE5/Agua.jpg')},
        ]
        return colores
    }

}

// module.exports = CalculoPedido
export default Pedido
