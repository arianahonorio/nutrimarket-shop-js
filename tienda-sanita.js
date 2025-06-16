/* Creación de tienda (ej, mix de semillas, harinas, frutos secos), carga de productos*/

const tiendaSanita= {
    productos: [],
    //lista de productos y necesidad constante
    agregarProductos() {
        const nombreProducto= prompt ("Ingrese el nombre del producto").toUpperCase()
        const productoNecesitadoUrgente= confirm ("¿Este producto lo consumis con frecuencia?")
        if(productoNecesitadoUrgente) {
            tiendaSanita.productos.unshift(nombreProducto)
        }
        else{
            tiendaSanita.productos.push(nombreProducto)
        }
    },
    buscarListado(){
        //buscamos un producto según su prioridad
        const productoConsultar= prompt("Ingrese el nombre del producto").toUpperCase()
        const buscar= tiendaSanita.productos.indexOf(productoConsultar)
        if(buscar === -1){
            alert(`El producto solicitado: ${productoConsultar}. No está en la lista.`)
        } else {
            alert(`El producto solicitado: ${productoConsultar}. Es el ${buscar+1} en la lista.`)
        }
    }
}

//panel de control
function ingresarOpcionesDeControl (){
    let opcionIngresada= parseInt(prompt("Ingrese: \n 1- Agregar producto a la lista. \n 2- Buscar producto en lista. \n 3- Salir. "))
    while(isNan (opcionIngresada) || opcionIngresada <1 || opcionIngresada >3){
        opcionIngresada= parseInt(prompt("Ingrese \n 1- Agregar producto a la lista. \n 2- Buscar producto en lista. \n 3- Salir. \n Por favor, ingrese un valor del 1 al 3"))
    } 
    return opcionIngresada
}

//panel del control para poder seleccionar las opciones
function seleccionarOpcion (operacion){
    switch(operacion){
        case 1: 
            tiendaSanita.agregarProductos()
            break;
        case 2: 
            tiendaSanita.buscarListado()
            break;
        case 3:
            loop= false
            break;
        default: 
            alert("¡Por avor ingrese solo números del 1 al 3!")
    }
}

//ejecutando panel de control
function app(){
    confirm("Bienvenidos a NutriMarket! Estamos creando nuestra tienda y queremes saber cuáles son los productos que más necesitas. Confirma para poder sugerir...")
    let loop= true
    while(loop) {
        let operacion= ingresarOpcionesDeControl ()
        seleccionarOpcion(operacion)
    }
    alert("Chau! Gracias por su tiempo!")
}

app()