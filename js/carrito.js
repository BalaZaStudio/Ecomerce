
// Extraemos la informacion de LocalStorage

const productosEnCarrito = JSON.parse(localStorage.getItem("productos-en-carrito"));

// Recogemos los Elementos del HTML

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorResumen = document.querySelector("#carrito-resumen");
const cantCarrito = document.querySelector("#num-en-carrito");

console.log(productosEnCarrito);

// Funcion que carga los productos comprados en el carrito
function cargarProductosCarrito() {
    if (productosEnCarrito && productosEnCarrito.length > 0) {
        // Ya existe Productos cargados en el Carrito
        contenedorCarritoVacio.classList.add("disabled");

        //  Quitamos las clases Disabled para visualizarlos
        contenedorCarritoProductos.classList.remove("disabled");
        contenedorResumen.classList.remove("disabled");

        contenedorCarritoProductos.innerHTML = "";

        productosEnCarrito.forEach(producto => {
            // Determinamos el tipo de envio
            let tipo_envio = "";
            if (producto.envio != "Envío Gratis") {
                tipo_envio = (producto.envio).toLocaleString() + " €";
                tipo_estilo = "";

            } else {
                tipo_envio = "Envío Gratis";
                // Precio-envio es una clase que luego la asignaremos
                tipo_estilo = "precio-envio"
            }

            const div = document.createElement("div");
            div.classList.add("carrito-producto");
            div.innerHTML = `
            <div class="carrito-producto-proveedor">
                <span>${producto.proveedor}</span>
            </div>
            <div class="carrito-item">
                <div class="container-producto-img">
                    <img src="${producto.imagen[0]}" alt="" class="carrito-producto-img">
                </div>

                <div class="carrito-producto-info">
                    <span class="carrito-producto-titulo">${producto.titulo}</span>
                    <div class="carrito-producto-opciones">
                        <button class="carrito-producto-eliminar" id="${producto.id}">Eliminar</button>
                    </div>
                </div>
                <div class="container-selector-cantidad">
                    <div class="selector">
                        <button class="restar-cantidad" id="${producto.id}"> <i class="bi bi-dash-lg"></i> </button>
                        <span class="cantidad">${producto.cantidad}</span>
                        <button class="sumar-cantidad" id="${producto.id}"> <i class="bi bi-plus-lg"></i> </button>
                    </div>
                </div>
                <div class="carrito-producto-precio">
                    <p> ${(producto.precio * producto.cantidad).toLocaleString() + "€ "}</p>
                </div>
            </div>
            <div class="carrito-producto-precio-envio">
                <span>Envio</span>
                <span class="${tipo_estilo}">${tipo_envio}</span>
            </div>
            <div class="carrito-producto-mas-info">
                <span>Aprovechá tu envío gratis agregando más. <a href="#">Ver más producto del vendedor</a></span>
            </div>
        `
            contenedorCarritoProductos.append(div);

        });

        actualizarResumenCarrito();

        agregarEventListenerBotonSumarCantidad();
        agregarEventListenerBotonRestarCantidad();

        actualizarNumEnCarrito();

    } else {  // Sino hay productos en el carrito

        console.log("NO hay productos")
        contenedorCarritoVacio.classList.remove("disabled");
        contenedorCarritoProductos.classList.add("disabled");
        contenedorResumen.classList.add("disabled");

        actualizarNumEnCarrito();
    }

    agregarEventListenerBotonesEliminar();
}

cargarProductosCarrito();

// Actualiza la cantidad de productos en el carrito
function actualizarNumEnCarrito() {
    let nuevaCantEnCarrito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0)
    //console.log(nuevaCantEnCarrito);
    cantCarrito.innerHTML = nuevaCantEnCarrito;
    return nuevaCantEnCarrito;
}

// Agrega eventos de eliminación a los botones de cada producto en el carrito
function agregarEventListenerBotonesEliminar() {
    botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito);
    })
}

// Agrega eventos para aumentar la cantidad de cada producto en el carrito
function agregarEventListenerBotonSumarCantidad() {
    botonesSumar = document.querySelectorAll(".sumar-cantidad");
    botonesSumar.forEach(boton => {
        boton.addEventListener("click", sumarCantidad);
    })
}

// Incrementa la cantidad de un producto específico en el carrito
function sumarCantidad(e) {
    const index = productosEnCarrito.findIndex(producto => producto.id === e.currentTarget.id);
    console.log(productosEnCarrito[index].cantidad);
    productosEnCarrito[index].cantidad++;
    console.log(productosEnCarrito[index].cantidad);
    cargarProductosCarrito();
    actualizarResumenCarrito();
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

// Agrega eventos para disminuir la cantidad de cada producto en el carrito
function agregarEventListenerBotonRestarCantidad() {
    botonesRestar = document.querySelectorAll(".restar-cantidad");
    botonesRestar.forEach(boton => {
        boton.addEventListener("click", restarCantidad);
    })
}

// Disminuye la cantidad de un producto específico en el carrito, hasta un mínimo de 1
function restarCantidad(e) {
    const index = productosEnCarrito.findIndex(producto => producto.id === e.currentTarget.id);
    console.log(productosEnCarrito[index].cantidad);
    if (productosEnCarrito[index].cantidad > 1) {
        productosEnCarrito[index].cantidad--;
    }

    console.log(productosEnCarrito[index].cantidad);
    cargarProductosCarrito();
    actualizarResumenCarrito();
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

// Elimina un producto del carrito
function eliminarDelCarrito(e) {
    const idBoton = e.currentTarget.id;
    console.log(idBoton);
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
    console.log(productosEnCarrito)
    productosEnCarrito.splice(index, 1);
    console.log(productosEnCarrito)

    //volvemos a cargar los productos en el carrito
    cargarProductosCarrito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

// Actualiza el resumen del carrito, incluyendo cantidad total, precio total de productos, costo de envío y precio final
function actualizarResumenCarrito() {
    // Seleccionar los elementos de resumen de cantidad total de productos
    const totalProductos = document.querySelectorAll(".num-total");
    totalProductos[0].innerHTML = actualizarNumEnCarrito(); // Actualiza la cantidad de productos en el carrito

    // Seleccionar los elementos de precio total de productos
    const totalCompra = document.querySelectorAll(".precio-productos-compra");
    // Calcular el total de los productos (cantidad * precio) y formatearlo a moneda
    totalCompra[0].innerHTML = (productosEnCarrito.reduce((acc, producto) => acc + (producto.cantidad * producto.precio), 0)).toLocaleString() + " €";

    // Seleccionar el elemento de precio de envío
    const precioTotalEnvio = document.querySelectorAll(".carrito-resumen-precio-envio");

    // Filtrar los productos que no tienen "Envío Gratis"
    const productosFiltrados = productosEnCarrito.filter(producto => producto.envio !== "Envío Gratis");

    // Sumar los costos de envío de los productos filtrados
    const calculoSumaEnvio = productosFiltrados.reduce((acc, producto) => {
        // Asegúrate de que el precio de envío sea un número
        const envio = typeof producto.envio === "number" ? producto.envio : 0;
        return acc + envio;
    }, 0);

    // Actualizar el precio de envío en la vista
    precioTotalEnvio[0].innerHTML = calculoSumaEnvio.toLocaleString() + " €";

    // Seleccionar el elemento de precio final
    const precioFinal = document.querySelectorAll(".precio-final");
    // Calcular el precio final sumando el precio de los productos y el costo de envío
    const calculoPrecioFinal = calculoSumaEnvio + (productosEnCarrito.reduce((acc, producto) => acc + (producto.cantidad * producto.precio), 0));

    // Actualizar el precio final en la vista
    precioFinal[0].innerHTML = calculoPrecioFinal.toLocaleString() + " €";
}
