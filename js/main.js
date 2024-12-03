//Arreglo que contiene los productos
const productos = [
    {
        id: "sobremesa-01",
        titulo: "HP OMEN 40L GT21-1036ns",
        imagen: [
            "./img/sobremesa/11.png",
            "./img/sobremesa/12.png",
            "./img/sobremesa/13.png"
        ],
        categoria: {
            nombre: "Sobremesa",
            id: "sobremesa"
        },
        precio: 1700,
        descuento: 4,
        informacion: [
            "Procesador Intel® Core™ i7 de 13ª generación con 16 núcleos y 24 hilos.",
            "Frecuencia del procesador turbo de 5,4 GHz.",
            "Memoria RAM de 32 GB DDR5-SDRAM (ampliable hasta 128 GB).",
            "Almacenamiento SSD de 1 TB.",
            "Gráficos potentes con tarjeta NVIDIA GeForce RTX 3080.",
            "Sistema de refrigeración avanzado y diseño optimizado para juegos."
        ],
        envio: "Envío Gratis",
        stock: 130,
        proveedor: "HP",
    },
    {
        id: "sobremesa-02",
        titulo: "MSI MAG Infinite S3 14NUC5-1624ES",
        imagen: [
            "./img/sobremesa/21.png",
            "./img/sobremesa/22.png",
            "./img/sobremesa/23.png"
        ],
        categoria: {
            nombre: "Sobremesa",
            id: "sobremesa"
        },
        precio: 1795,
        descuento: 7,
        informacion: [
            "Procesador Intel® Core™ de 14ª generación.",
            "Gráficas MSI GeForce RTX™ serie 4000 con acelerador de IA.",
            "AI Gaming Desktop: mejoras impulsadas por inteligencia artificial en refrigeración, gaming y streaming.",
            "MSI AI Engine ajusta automáticamente las configuraciones del sistema.",
            "Frozr AI Cooling optimiza el flujo de aire ajustando la velocidad del ventilador con IA.",
            "Silent Storm Cooling 2 separa las cámaras para optimizar el flujo de aire.",
            "Admite memoria DDR5 con disipador térmico.",
            "SSD M.2 con velocidad de transmisión hasta 3300 MB/s para cargar juegos rápidamente.",
        ],
        envio: 20,
        stock: 21,
        proveedor: "MSI",
    },
    {
        id: "sobremesa-03",
        titulo: "PC Racing Top Gaming",
        imagen: [
            "./img/sobremesa/31.png",
            "./img/sobremesa/32.png",
            "./img/sobremesa/33.png"
        ],
        categoria: {
            nombre: "Sobremesa",
            id: "sobremesa"
        },
        precio: 1919,
        descuento: 14,
        informacion: [
            "Fuente de 1000W (o similar, según disponibilidad).",
            "Procesador Intel Core i7-14700KF.",
            "Placa Base Z790 (o similar, según disponibilidad).",
            "RAM de 64GB DDR5.",
            "Almacenamiento: 2TB SSD M.2 Nvme (Disco 1).",
            "Gráfica RTX 4080 Super XTX 16GB GDDR6.",
            "Refrigeración líquida.",
            "Conexión WIFI incluida.",
            "Conexiones delanteras: 2x USB 3.0, 1x USB 2.0, 1x HD audio, 1x micrófono.",
            "Conexiones traseras: 2x USB 3.0 Tipo A Gen1, 2x USB 2.0 Tipo A, 1x HDMI, Realtek® RTL8111H Gigabit LAN.",
            "Sistema operativo Windows 11 PRO instalado y activado."
        ],
        envio: 80,
        stock: 21,
        proveedor: "Pc Componentes",
    },
    {
        id: "sobremesa-04",
        titulo: "Lenovo ThinkStation P920",
        imagen: [
            "./img/sobremesa/41.png",
            "./img/sobremesa/42.png",
            "./img/sobremesa/43.png"
        ],
        categoria: {
            nombre: "Sobremesa",
            id: "sobremesa"
        },
        precio: 1122,
        descuento: 18,
        informacion: [
            "Procesador Intel® Xeon® Silver 4214, 12 núcleos.",
            "Frecuencia del procesador: 2.2 GHz, turbo a 3.2 GHz.",
            "Caché del procesador: 16.5 MB.",
            "Memoria interna: 8 GB DDR4-SDRAM.",
            "Ranuras de memoria: 16x DIMM.",
            "Velocidad de memoria: 2666 MHz.",
            "Almacenamiento SSD de 256 GB.",
            "Conexión Ethernet LAN: 10/100/1000 Mbit/s.",
        ],
        envio: "Envío Gratis",
        stock: 21,
        proveedor: "DIGIT",
    },
    {
        id: "celular-01",
        titulo: "Moto G13 Dual Sim 128 Gb Azul Difuso 4 Gb Ram",
        imagen: [
            "./img/celulares/11.png",
            "./img/celulares/12.png",
            "./img/celulares/13.png"
        ],
        categoria: {
            nombre: "Celulares",
            id: "celulares"
        },
        precio: 700,
        descuento: 14,
        informacion: [
            "Pantalla IPS de 6.5.",
            "Camara trasea 13Mpx.",
            "Cámra delantera 5Mpx",
            "Procesaor 1.66 Gh con 2GB de RAM.",
            "Batería interna 54 GB.",
            "Con reconocimiento facia.l"
        ],
        envio: "Envío Gratis",
        stock: 100,
        proveedor: "OVERHARD",
    },
    {
        id: "celular-02",
        titulo: "Moto E22 64gb 4gb Ram Negro Test",
        imagen: [
            "./img/celulares/21.png",
            "./img/celulares/22.png",
            "./img/celulares/23.png"
        ],
        categoria: {
            nombre: "Celulares",
            id: "celulares"
        },
        precio: 795,
        descuento: 17,
        informacion: [
            "Dispositivo liberado para que elijas la compañía telefónica que prefieras",
            "Pantalla de 6.5",
            "Cámra delantera 5Mpx",
            "Procesaor 1.66 Gh con 2GB de RAM.",
            "Batería 4020m.",
            "Memoria interna de 54 GB"
        ],
        envio: 20,
        stock: 21,
        proveedor: "OVERHARD",
    },
    {
        id: "celular-03",
        titulo: "Samsung A04s 128 GB negro 4 GB RAM",
        imagen: [
            "./img/celulares/31.png",
            "./img/celulares/32.png",
            "./img/celulares/33.png"
        ],
        categoria: {
            nombre: "Celulares",
            id: "celulares"
        },
        precio: 119,
        descuento: 10,
        informacion: [
            "Dispositivo liberado para que elijas la compañía telefónica que prefieras.",
            "Pantalla PLS de 6.5'.",
            "Tiene 3 cámaras traseras de 50Mpx/2Mpx/2Mpx.",
            "Cámara delantera de 5Mpx.",
            "Procesador Exynos 850 Octa-Core de 2GHz con 4GB de RAM.",
            "Batería de 5000mAh.",
            "Memoria interna de 128GB.",
            "Con reconocimiento facial y sensor de huella dactilar."
        ],
        envio: 50,
        stock: 21,
        proveedor: "DIGIT",
    },
    {
        id: "celular-04",
        titulo: "Samsung Galaxy A04s 128 GB blanco 4 GB RAM",
        imagen: [
            "./img/celulares/41.png",
            "./img/celulares/42.png",
            "./img/celulares/43.png"
        ],
        categoria: {
            nombre: "Celulares",
            id: "celulares"
        },
        precio: 122,
        descuento: 13,
        informacion: [
            "Dispositivo liberado para que elijas la compañía telefónica que prefieras.",
            "Pantalla PLS de 6.5'.",
            "Tiene 3 cámaras traseras de 50Mpx/2Mpx/2Mpx.",
            "Cámara delantera de 5Mpx.",
            "Procesador Exynos 850 Octa-Core de 2GHz con 4GB de RAM.",
            "Batería de 5000mAh.",
            "Memoria interna de 128GB.",
            "Con reconocimiento facial y sensor de huella dactilar."
        ],
        envio: "Envío Gratis",
        stock: 21,
        proveedor: "DIGIT",
    },
    {
        id: "notebook-01",
        titulo: "Samsung Galaxy Book3 15.6 Intel Core I3 6 Núcleos 8gb 256gb Color Silver",
        imagen: [
            "./img/notebooks/11.png",
            "./img/notebooks/12.png",
            "./img/notebooks/13.png",
        ],
        categoria: {
            nombre: "Notebooks",
            id: "notebooks"
        },
        precio: 540,
        descuento: 13,
        informacion: [
            "Procesador Intel i3",
            "Memoria RAM de 8GB.",
            "Resolución de FHD",
            "Placa de video Intel Iris Xe",
            "Cuenta con puerto USB y puerto HDMI"
        ],
        envio: "Envío Gratis",
        stock: 2,
        proveedor: "ECOMODICO",
    },
    {
        id: "notebook-02",
        titulo: "Notebook Noblex N14x1000 14.1 Hd Intel Celeron 4gb/128gb Color Gris",
        imagen: [
            "./img/notebooks/21.png",
            "./img/notebooks/22.png",
            "./img/notebooks/23.png",
        ],
        categoria: {
            nombre: "Notebooks",
            id: "notebooks"
        },
        precio: 499,
        descuento: 34,
        informacion: [
            "Procesador Intel Celeron.",
            "Memoria RAM de 4GB.",
            "Resolución de 1366x768 px.",
            "Conexión wifi y bluetooth.",
            "Cuenta con 2 puertos USB y puerto HDMI.",
            "La duración de la batería depende del uso que se le dé al producto."
        ],
        envio: "Envío Gratis",
        stock: 35,
        proveedor: "Tienda New Sound",
    },
    {
        id: "notebook-03",
        titulo: "Notebook Hp 15-dy2061la Intel Core I3 1125g4 8gb 256gb Win10 Color Plateado",
        imagen: [
            "./img/notebooks/31.png",
            "./img/notebooks/32.png",
            "./img/notebooks/33.png",
        ],
        categoria: {
            nombre: "Notebooks",
            id: "notebooks"
        },
        precio: 669,
        descuento: 47,
        informacion: [
            "Procesador Intel Core i3.",
            "Memoria RAM de 8GB.",
            "Resolución de 1366x768 px.",
            "Placa de video Intel UHD Graphics Xe G4 48EUs.",
            "Conexión wifi y bluetooth.",
            "Cuenta con 3 puertos USB y puerto HDMI.",
            "Incluye lector de tarjeta de memoria.",
            "Posee pad numérico.",
            "Modo de sonido Stereo.",
            "La duración de la batería depende del uso que se le dé al producto."
        ],
        envio: "Envío Gratis",
        stock: 35,
        proveedor: "HP TIENDA OFICIAL",
    },
    {
        id: "notebook-04",
        titulo: "Notebook Gamer Rog Strix G15 G513rm-hq084w 15.6 R7 512gb Color Eclipse gray",
        imagen: [
            "./img/notebooks/41.png",
            "./img/notebooks/42.png",
            "./img/notebooks/43.png",
        ],
        categoria: {
            nombre: "Notebooks",
            id: "notebooks"
        },
        precio: 499,
        descuento: 5,
        informacion: [
            "Procesador AMD Ryzen 7.",
            "Memoria RAM de 16GB.",
            "Resolución de 2560x1440 px.",
            "Placa de video Nvidia RTX 3060.",
            "Conexión wifi y bluetooth.",
            "Cuenta con 4 puertos USB y puerto HDMI.",
            "Con teclado retroiluminado.",
            "La duración de la batería depende del uso que se le dé al producto."
        ],
        envio: 600,
        stock: 35,
        proveedor: "ATAJO AR",
    },
    {
        id: "televisor-01",
        titulo: "Tv 24' Kodak We-24tm005 Hd ",
        imagen: [
            "./img/televisores/11.png",
            "./img/televisores/12.png",
            "./img/televisores/13.png",
        ],
        categoria: {
            nombre: "Televisores",
            id: "televisores"
        },
        precio: 999,
        descuento: 10,
        informacion: [
            "Su resolución es HD.",
            "Tecnología HDR para una calidad de imagen mejorada.",
            "Modo de sonido: Dolby Digital.",
            "Manejalo por comando de voz.",
            "Sistema operativo Android.",
            "Conectá tus dispositivos mediante sus 3 puertos HDMI y sus 2 puertos USB.",
            "Dimensiones: 71.6cm de ancho, 43.3cm de alto, 7.6cm de profundidad.",
            "Entretenimiento y conectividad en un mismo lugar."
        ],
        envio: "Envío Gratis",
        stock: 10,
        proveedor: "OPEN FACTORY",
    },
    {
        id: "televisor-02",
        titulo: "Smart Led Fhd 40 Pulgadas Google Tv Chromecast Tda Android Kodak",
        imagen: [
            "./img/televisores/21.png",
            "./img/televisores/22.png",
            "./img/televisores/23.png",
        ],
        categoria: {
            nombre: "Televisores",
            id: "televisores"
        },
        precio: 600,
        descuento: 27,
        informacion: [
            "Su resolución es Full HD.",
            "Tecnología HDR para una calidad de imagen mejorada.",
            "Modo de sonido: Dolby Atmos.",
            "Manejalo por comando de voz.",
            "Tiene función Screen Share.",
            "Con YouTube.",
            "Google Assistant incorporado.",
            "Sistema operativo Android 10.",
            "Capacidad de almacenamiento de 8GB.",
            "Conectá tus dispositivos mediante sus 3 puertos HDMI y sus 2 puertos USB."
        ],
        envio: "Envío Gratis",
        stock: 10,
        proveedor: "MALL WEB",
    },
    {
        id: "televisor-03",
        titulo: "Smart Tv Samsung Hd 32 T4300",
        imagen: [
            "./img/televisores/31.png",
            "./img/televisores/32.png",
            "./img/televisores/33.png",
        ],
        categoria: {
            nombre: "Televisores",
            id: "televisores"
        },
        precio: 700,
        descuento: 27,
        informacion: [
            "Su resolución es HD.",
            "Tecnología HDR para una calidad de imagen mejorada.",
            "Modo de sonido: Dolby Digital Plus.",
            "Manejalo por comando de voz.",
            "Tiene función Screen Share.",
            "Con Samsung TV Plus.",
            "Sistema operativo Tizen.",
            "Conectá tus dispositivos mediante sus 2 puertos HDMI y su puerto USB.",
            "Dimensiones: 737.4mm de ancho, 438mm de alto, 74.1mm de profundidad.",
            "Entretenimiento y conectividad en un mismo lugar."
        ],
        envio: 80,
        stock: 10,
        proveedor: "MALL WEB",
    },
    {
        id: "televisor-04",
        titulo: "Tv Tcl Qled 55 4k C635 Uhd Google Tv Micro Dimming 120 Hz",
        imagen: [
            "./img/televisores/41.png",
            "./img/televisores/42.png",
            "./img/televisores/43.png",
        ],
        categoria: {
            nombre: "Televisores",
            id: "televisores"
        },
        precio: 1590,
        descuento: 10,
        informacion: [
            "Su resolución es 4K.",
            "Tecnología HDR para una calidad de imagen mejorada.",
            "Con Google Duo.",
            "Sistema operativo Google TV.",
            "Conectá tus dispositivos mediante sus 3 puertos HDMI.",
            "Entretenimiento y conectividad en un mismo lugar."
        ],
        envio: "Envío Gratis",
        stock: 10,
        proveedor: "MALL WEB",
    }
]

// Elementos a modificar HTML

const contenedorProductos = document.querySelector("#contenedor-productos");
const tituloSeccion = document.querySelector("#titulo-seccion");
const cantCarrito = document.querySelector("#num-en-carrito");

// Funcion para Mostrar todos los productos
// Recibe un parametro porque la vamos a utilizar para cargar todos los productos
// o si ha elegido una opcion filtrar por la opcion que eligio
function cargarProductos(productos) {
    //Vaciamos el contenedor
    contenedorProductos.innerHTML = "";


    // Recorremos todo el arreglo de productos
    productos.forEach(producto => {
        // Creamos un div para el elemento producto
        const div = document.createElement("div");
        div.classList.add("producto");

        // Determinamos como mostrar el tipo de envio
        let precio_envio = ""
        if (producto.envio != "Envio Gratis") { // El envio tiene un precio
            precio_envio = "";
        } else {
            precio_envio = producto.envio;
        }
        div.innerHTML = `
    <img src="${producto.imagen[0]}" alt="" class="producto-imagen">
                    <div class="producto-detalles">
                        <h3 class="producto-titulo">${producto.titulo}</h3>
                        <p class="producto-precio">${(producto.precio).toLocaleString()} € <span
                        class="descuento">${producto.descuento} % Descuento</span></p>
                        <p class="producto-tipo-envio">${precio_envio} </p>
                    </div>
        `;

        // Agregamos el id a dicho producto
        div.id = producto.id;
        contenedorProductos.append(div)
    })

}


// Lllamamos  a la Funcion , Inicialmente le pasamos todos los productos
cargarProductos(productos);


// Tomo los botones de las categorias

const botonesCategorias = document.querySelectorAll(".boton-categoria");

// Agregamos un EvenListener onclick a cada boton de la categoria

function asignarEventListenerBotonCategoria() {
    botonesCategorias.forEach(boton => {
        boton.addEventListener("click", (e) => {
            // Contolo si se hizo clic en una categoria o en todas
            if (e.currentTarget.id != "todos") {
                // Filtramos por id , ya que el id tiene la categoria
                const productosFiltrados = productos.filter(producto => producto.categoria.id === e.currentTarget.id);

                // Colocamos el titulo de la seccion , para eso debemos buscar los elementos filtrados que coincidan
                // con la categoria seleccionada ( No sabemos cual ) y luego tomar el nombre de dicha categoria

                const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);

                tituloSeccion.innerHTML = productoCategoria.categoria.nombre;

                // Llamo a la funcion que carga a los productos con los productos filtrados

                cargarProductos(productosFiltrados);
            } else { // Se hace clic en todos los productos
                cargarProductos(productos);
                tituloSeccion.innerHTML = "Todos los Productos";
            }

            // Tras la carga de todos los Productos , asignamos a cada producto un eventListener para que al hacer
            // click se muestre la info de dicho producto
            asignarEventListenerProductos();
        })
    })
}

// LLamamos a la funcion asignarEventListenerBotonCategoria
asignarEventListenerBotonCategoria();


// Creamos el elemento donde se agregara la informacion del producto seleccionado
const contenedorProductoVisitado = document.querySelector("#contenedor-producto-visitado");

// Funcion que agrega el eventListener a cada producto
function asignarEventListenerProductos() {
    const divsProductos = document.querySelectorAll(".producto");

    divsProductos.forEach(producto => {
        producto.addEventListener("click", (e) => {
            contenedorProductos.style = "none";

            // Creamos un div para mostrar la info del producto
            const div = document.createElement("div");
            div.classList.add("producto-visitado");
            div.id = e.currentTarget.id;


            //  Buscamos en el array el producto en el que hacemos click

            const prod = productos.find((producto) => producto.id === e.currentTarget.id);

            div.innerHTML = `
             <span class="cerrar" onclick="cerrar()"> <i class="bi bi-x-circle"></i> </span>
                    <div class="fotos-galeria">
                        <div class="miniaturas">
                            <img src="${prod.imagen[0]}" alt="" class="img-miniatura">
                            <img src="${prod.imagen[1]}" alt="" class="img-miniatura">
                            <img src="${prod.imagen[2]}" alt="" class="img-miniatura">
                        </div>
                        <div class="foto-principal">
                            <img src="${prod.imagen[0]}" alt="" id="foto-principal">
                        </div>
                    </div>
                    <div class="info-producto">
                        <h2 class="titulo-producto">${prod.titulo}</h2>

                        <p class="precio-producto">${(prod.precio).toLocaleString()} €
                        <span class="descuento"> ${prod.descuento} % Descuento</span></p>

                        <span class="txt">Lo que tenes que saber de este producto</span>
                        <ul id="listado-info">
                        </ul>
                    </div>
                    <div class="info-compra">
                        <span class="info-stock">Stock disponible</span>
                        <span class="cantidad">Cantidad: 1 unidad <span class="stock">( ${prod.stock} disponibles)
                        </span> </span>

                        <button class="btn-agregar-al-carrito" id="${prod.id}">Agregar al Carrito</button>

                        <span class="vendedor">Vendido por <a href="#">${prod.proveedor}</a></span>

                        <div class="beneficios">
                            <div class="beneficio">
                                <div class="col">
                                    <i class="bi bi-arrow-return-left"></i>
                                </div>
                                <div class="col">
                                    <a href="#">Devolución Gratis</a> Tenes 30 días desde que lo recibis
                                </div>
                            </div>
                            <div class="beneficio">
                                <div class="col">
                                    <i class="bi bi-shield-check"></i>
                                </div>
                                <div class="col">
                                    <a href="#">Compra protegida</a> recibí el producto que esperabas o te devolvemos tu
                                    dinero.
                                </div>
                            </div>
                            <div class="beneficio">
                                <div class="col">
                                    <i class="bi bi-trophy"></i>
                                </div>
                                <div class="col">
                                    <a href="#">Mercado Puntos</a> Sumá 900 puntos.
                                </div>
                            </div>
                        </div>

                    </div>
            `;

            // Agregamos el div al contenedor
            contenedorProductoVisitado.append(div);
            contenedorProductoVisitado.style.display = "flex";

            // Cargamos la info de los detalles en el listado
            const listadoInfo = document.querySelector("#listado-info");

            // Agrego los items
            prod.informacion.forEach(info => {
                const li = document.createElement("li");
                li.innerHTML = info;
                listadoInfo.append(li);
            })

            // Agrego funcionalidad a los botones de miniaturas
            asignarEventListenerMiniatura();


            // Asignamos funcionalidad (EventListener) al boton Agregar al carrito
            const btnAgregar = document.querySelectorAll(".btn-agregar-al-carrito");
            btnAgregar[0].addEventListener("click", agregarAlCarrito);

        })
    })
}

asignarEventListenerProductos();


// Funcion para cerrar la ventana de productos

function cerrar() {
    contenedorProductoVisitado.innerHTML = "";
    contenedorProductos.style.display = "grid";
    contenedorProductoVisitado.style.display = "none";
}

// Funcion para manejar las miniaturas

function asignarEventListenerMiniatura() {
    const imgMiniatura = document.querySelectorAll(".img-miniatura");
    const fotoPrincipal = document.querySelector("#foto-principal");

    imgMiniatura.forEach(mini => {
        mini.addEventListener("click", (e) => {

            fotoPrincipal.src = e.target.src;

        })
    })
}

// Estructura para Guardar los Elementos Agregados al Carrito
// Vamos a necesitar tomar los elementos de LocalStorage que esta en Carrito.html
let productosEnCarrito;

// Controlamos si hay algo en el LocalStorage
const productosEnCarritoLS = JSON.parse(localStorage.getItem("productos-en-carrito"));
if (productosEnCarritoLS) {  // Ya hay elementos en el carrito LocalStorage
    productosEnCarrito = productosEnCarritoLS;
    actualizarNumEnCarrito();

} else { // No hay Elementos en carrito LocalStorage
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {

    // Seleccionamos el id del boton
    const idBoton = e.currentTarget.id;
    // Busco dicho id en el Arreglo de productos
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    // Conmtrolamos si el producto ya esta en el carrito

    if (productosEnCarrito.some(producto => producto.id === idBoton)) {
        // El producto que se quiere agregar y ya esta en el carrito
        // Se busca y se aumenta en cantidad
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
        console.log(productosEnCarrito);

    } else {
        // Producto no esta en el carrito , se le crea al objeto una propiedad nueva llamada cantidad
        // para ir guardando la cantidad de este producto
        productoAgregado.cantidad = 1;

        // Agregamos el producto al carrito
        productosEnCarrito.push(productoAgregado);

    }

    // Actualizamos el numero que indica la Cantidad en el Carrito
    actualizarNumEnCarrito();

    // Cargamos en LocalStorage los productos del Carrito para recuperarlo a posterior en la Seccion Carrito
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));

    // Redirigimos al Carrito
    location.href = "./carrito.html";
}

function actualizarNumEnCarrito() {
    // Sumamos todas las cantidades de los productos en el Carrito
    let nuevaCantEnCarrito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    cantCarrito.innerHTML = nuevaCantEnCarrito;

}
actualizarNumEnCarrito();

// Función para filtrar productos en base a la búsqueda
function buscarProductos() {
    const inputBusqueda = document.querySelector('.container-search .input input');
    if (!inputBusqueda) return; // Verifica que el elemento de búsqueda exista

    const query = inputBusqueda.value.toLowerCase().trim();
    console.log("Consulta de búsqueda:", query); // Depuración: imprime el texto de búsqueda

    // Filtra los productos según el título, haciendo la búsqueda más flexible
    const resultados = productos.filter(producto =>
        producto.titulo && producto.titulo.toLowerCase().includes(query) // Búsqueda más flexible
    );

    console.log("Resultados de búsqueda:", resultados); // Depuración: imprime los resultados filtrados
    mostrarResultados(resultados);
}

// Función para mostrar los productos filtrados
function mostrarResultados(resultados) {
    const contenedorProductos = document.getElementById('contenedor-productos');
    if (!contenedorProductos) return; // Verifica que el contenedor exista

    contenedorProductos.innerHTML = ''; // Limpia los productos anteriores

    if (resultados.length > 0) {
        resultados.forEach(producto => {
            const productoDiv = document.createElement('div');
            productoDiv.classList.add('producto');
            productoDiv.innerHTML = `
                <img src="${producto.imagen[0]}" alt="${producto.titulo}" class="producto-imagen">
                <div class="producto-detalles">
                    <h3 class="producto-titulo">${producto.titulo}</h3>
                    <p class="producto-precio">${producto.precio} € <span class="descuento">${producto.descuento}</span></p>
                    <p class="producto-tipo-envio">${producto.envio}</p>
                </div>
            `;
            contenedorProductos.appendChild(productoDiv);
        });
    } else {
        contenedorProductos.innerHTML = '<p>No se encontraron productos.</p>';
    }
}

// Eventos para activar la búsqueda
const inputBusqueda = document.querySelector('.container-search .input input');
if (inputBusqueda) {
    inputBusqueda.addEventListener('input', buscarProductos); // Buscar al escribir
}



