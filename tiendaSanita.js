//array de productos
const productos = [ 
    {nombre: "Almendras- 500g", precio:1500, id: 1},
    {nombre: "Nueces- 1kg" , precio:2700, id: 2},
    {nombre: "Avena- 200g" , precio:1000, id: 3},
    {nombre: "Mix semillas- 1kg" , precio:2400, id: 4},
    {nombre: "Mix frutos secos- 1kg" , precio:3000, id: 5},
    {nombre: "Harina de almendras- 1kg" , precio:1200, id: 6},
    {nombre: "Arroz Integral- 500g" , precio:700, id: 7},
]

//variables del DOM
const listaProd = document.getElementById("listaProd")
const listaCarrito = document.getElementById("listaCarrito")
const formularioCompra = document.getElementById("formularioCompra")
const botonCompra = document.getElementById("btnCompra")

//FUNCIONES

//-listado de productos
function mostrarProd(){
    listaProd.innerHTML = ""
    productos.forEach(prod=>{
    // Creo elementos
    const li = document.createElement("li")
    const div = document.createElement("div")
    const btn = document.createElement("button")
    // Modifico
    li.id = prod.id
    div.innerText = `${prod.nombre} - $${prod.precio}`
    btn.innerText = "Comprar"
    btn.addEventListener("click",()=>{
        agregarCarrito(prod)
    })
    // agregar al DOM
    li.appendChild(div)
    li.appendChild(btn)
    listaProd.appendChild(li)
    })
}

//-carrito de compra

let carrito = JSON.parse(localStorage.getItem("carrito")) || []

//suma de productos agregados al carrito
const calcularTotalCarrito = ()=>{
    let total = carrito.reduce((suma,elemento)=>{
    return suma + elemento.precio
    },0)
    return total
}

//visualizacion del total
const mostrarTotal = ()=>{
    const divTotal = document.getElementById("total")
    divTotal.innerText = `Total: $${calcularTotalCarrito()}`
}

//guardo datos de la compra
const guardarCarrito = ()=>{
    const carritoJSON = JSON.stringify(carrito)
    localStorage.setItem("carrito", carritoJSON)
}

//visualizacion de los prroductos agregados al carrito
const mostrarCarrito = ()=>{
    listaCarrito.innerHTML = ""
    carrito.forEach(prod=>{
    const li = document.createElement("li")
    li.innerHTML = `${prod.nombre} - $${prod.precio}`
    listaCarrito.appendChild(li)
    })
}

const vaciarCarrito = ()=>{
    carrito = []
    guardarCarrito()
    mostrarCarrito()
    mostrarTotal()
}

const agregarCarrito = (prod)=>{
    carrito.push(prod)
    mostrarCarrito()
    mostrarTotal()
    guardarCarrito()
}

//-finalizacion de compra
const comprar =(nombre)=>{
    const agradecimiento = document.getElementById("agradecimiento")
    agradecimiento.innerText = `Gracias por su compra ${nombre}!`
    vaciarCarrito()
}

formularioCompra.addEventListener("submit",(e)=>{
    e.preventDefault()
    const informacion = new FormData(e.target)
    const submit = Object.fromEntries(informacion)
    console.log(submit)
    comprar(submit.nombre+" "+submit.apellido)
})

//ejecución de funciones
function inicializar(){
    mostrarProd()
    mostrarCarrito()
    mostrarTotal()
}

inicializar()