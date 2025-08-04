//const listaProductos = document.getElementById("productos")
//let productos = []


//const mostrarProductos = ()=>{
//    listaProductos.innerHTML = ""
//    productos.forEach(prod =>{
    //Creo elementos
//    const li = document.createElement("li")
//    const div = document.createElement("div")
//    const btn = document.createElement("button")
    // Modifico
//    li.id = prod.id
//    div.innerText = `${prod.nombre} - $${prod.precio}`
//    btn.innerText = "Agregar al carrito"
//    btn.addEventListener("click",()=>{
//        agregarCarrito(prod)
//        Toastify({
//        text: `Agregado ${prod.nombre} al carrito`,
//        duration: 5000,
//        newWindow: true,
//        gravity: "top",
//        position: "right",
//        stopOnFocus: true,
//        style: {
 //       background: "linear-gradient(to right, #6a964c, #efdc97)",
//        }
//        })
//        .showToast();
//    })
//    //agregar al DOM
//    li.appendChild(div)
 //   li.appendChild(btn)
 //   listaProd.appendChild(li)
//    })
//}

//const traerProductos = async ()=>{
//    try {
//    const datosJson = await fetch("productos.json")
//    const datosProcesados = await datosJson.json() 
 //       productos = datosProcesados
//        mostrarProductos()
//    } catch (error) {
 //       listaProductos.innerText = "Error 404, no se consiguieron los datos, intenta más tarde"
 //   }
//}

//traerProductos()