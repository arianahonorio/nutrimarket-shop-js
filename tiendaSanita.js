//variables
const apiPropio= "./productos.json";
const listaProd = document.getElementById("productos");
const listaCarrito = document.getElementById("listaCarrito");
const formularioCompra = document.getElementById("formularioCompra");
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

//busco y muestro los productos desde mi JSON
async function buscarProd() {
    try {
        const datosJSON=await fetch(apiPropio);
        const datos=await datosJSON.json();
        mostrarProductos(datos);
    } catch (error) {
        console.warn(error);
    }
}

//muestro productos en el DOM
function mostrarProductos (arrayProd){
        listaProd.innerHTML="";
        arrayProd.forEach(prod =>{
            const {nombre, precio, id} = prod;
            //Creo elementos
            const li = document.createElement("li");
            const div = document.createElement("div");
            const btn = document.createElement("button");
            // Modifico
            li.id = id;
            div.innerText = `
                    <strong>${nombre}</strong><br>
                    <span>Precio: $${precio}</span><br>
                    <span>ID: ${id}</span>`;
            btn.innerText = "Agregar al carrito";
            btn.style.backgroundColor="#6a964c";
            btn.style.color= "white";
            btn.style.padding= "2px 2px 2px 2px";
            btn.style.fontSize="15px";
            btn.style.border="2px solid #6a694c";
            btn.style.borderRadius="20px 20px";
            btn.addEventListener("click",()=>{
                agregarCarrito(prod);
                Toastify({
                text: `Agregado ${prod.nombre} al carrito`,
                duration: 5000,
                newWindow: true,
                gravity: "top",
                position: "right",
                stopOnFocus: true,
                style: {
                    background: "linear-gradient(to right, #6a964c, #efdc97)",
                    }
                })
            .showToast();
        });
    //agregar al DOM
    li.appendChild(div);
    li.appendChild(btn);
    listaProd.appendChild(li);
    });
};


//-carrito de compra-

//suma de productos agregados al carrito
const calcularTotalCarrito = ()=>{
    let total = carrito.reduce((suma,elemento)=> suma + elemento.precio,0);
    return total;
};

//visualizacion del total
const mostrarTotal = ()=>{
    const divTotal = document.getElementById("total");
    divTotal.innerText = `Total: $${calcularTotalCarrito()}`;
};

//guardo datos de la compra
const guardarCarrito = ()=>{
    const carritoJSON = JSON.stringify(carrito);
    localStorage.setItem("carrito", carritoJSON);
};

//visualizacion de los prroductos agregados al carrito
const mostrarCarrito = ()=>{
    listaCarrito.innerHTML = "";
    carrito.forEach(({nombre, precio})=>{
    const li = document.createElement("li");
    li.innerHTML = `${nombre} - $${precio}`;
    listaCarrito.appendChild(li);
    });
};

const vaciarCarrito = ()=>{
    carrito = [];
    guardarCarrito();
    mostrarCarrito();
    mostrarTotal();
};

const agregarCarrito = (prod)=>{
    carrito.push(prod);
    mostrarCarrito();
    mostrarTotal();
    guardarCarrito();
};

//-finalizacion de compra
const comprar =(nombre)=>{
    const botonCompra = document.getElementById("btnCompra")
    botonCompra.addEventListener("click", function(){
        Swal.fire({
        title: '¡Compra exitosa!',
        text: `Gracias por tu compra ${nombre}`,     
        icon: 'success',
        showCancelButton: true,
        confirmButtonText: 'Seguir comprando...',
        cancelButtonText: "Cerrar"
        });
    });
};

formularioCompra.addEventListener("submit",(e)=>{
    e.preventDefault()
    const informacion = new FormData(e.target);
    const submit = Object.fromEntries(informacion);
    comprar(submit.nombre+" "+submit.apellido);
});


//ejecución de funciones
function inicializar(){
    buscarProd();
    mostrarCarrito();
    mostrarTotal();
}

inicializar();