# Welcome to la documentación de la tienda online

Este manual describe cómo utilizar la aplicación web de e-commerce, diseñada para facilitar la compra de **PCs de sobremesa**, **móviles**, **notebooks** y **televisores**. La aplicación está pensada para ser **intuitiva** y **fácil de usar**.

## Contenido
1. [Descripción](#descripcion)
2. [Estructura de las Vistas e Interfaces](#estructura-de-las-vistas-e-interfaces)
3. [Flujos de Comunicación](#flujos-de-comunicacion)
4. [Instrucciones de Uso](#instrucciones-de-uso)
5. [Instalación](#instalacion)

---

## Descripción

La aplicación web de e-commerce desarrollada para este proyecto tiene como objetivo principal proporcionar una solución integral para la compra de **PCs de sobremesa**, **móviles**, **notebooks** y **televisores**. Está diseñada para ser **intuitiva** y **fácil de utilizar**, con una interfaz de usuario simple y amigable que permite a los usuarios navegar rápidamente y acceder a productos y funciones clave sin necesidad de una curva de aprendizaje pronunciada.

---

## Estructura de las Vistas e Interfaces

Al acceder a la aplicación, los usuarios se encontrarán con una interfaz ordenada y moderna, pensada para ofrecer una experiencia de compra fluida. A continuación, se detallan las principales vistas e interfaces de la aplicación:

### 🛒 **Catálogo de Productos**
Esta vista permite a los usuarios explorar de manera ordenada y detallada todos los productos disponibles en la tienda en ese momento. Utilizando una interfaz gráfica con botones, etiquetas y tablas, los usuarios pueden clasificar los productos por tipo (PC, móvil, etc.), marca, modelo y precio, lo que facilita la búsqueda y selección del producto deseado.

### 🛍️ **Carrito de Compras**
En esta sección, los usuarios pueden revisar los productos añadidos al carrito, ver su cantidad, precio total y proceder a la compra. Se proporcionan opciones para modificar las cantidades de los productos o eliminarlos del carrito.

### 📄 **Página de Detalles de Producto**
Al hacer clic en un producto del catálogo, los usuarios accederán a una vista detallada que proporciona información completa sobre el producto seleccionado, incluidas sus especificaciones técnicas, opiniones de otros usuarios y opciones de compra. Esta página ofrece botones de "Agregar al carrito" y enlaces a otros productos similares, facilitando la navegación y la toma de decisiones de compra.

---

## Flujos de Comunicación

La aplicación sigue un flujo de comunicación lógico que permite a los usuarios moverse fácilmente entre las diferentes vistas y funcionalidades. Desde la página de inicio, los usuarios pueden acceder al catálogo, al carrito y a los detalles de cada producto. Los flujos se describen a continuación:

### 1. 🚀 **Flujo desde la Página de Inicio**
- Los usuarios llegan a la página de inicio y acceden al catálogo de productos.
- Desde el catálogo, pueden seleccionar un producto para ver más detalles.
- Pueden agregar productos al carrito, lo que se mantiene entre sesiones gracias al uso de **localStorage**.

### 2. 🛒 **Manejo del Carrito de Compras**
- Los productos añadidos al carrito se almacenan en **localStorage**, lo que permite a los usuarios revisar y modificar su selección en cualquier momento.
- El carrito se puede revisar en cualquier momento antes de proceder con el pago.

### 3. 🔄 **Acciones Adicionales**
- Los usuarios pueden navegar a productos relacionados o volver a la página principal desde cualquier vista.
- El flujo está diseñado para ser rápido y eficiente, asegurando una experiencia de compra sin fricciones.

---

## Instrucciones de Uso

1. Al acceder a la página principal, se presentarán las categorías de productos. Los usuarios pueden navegar por el catálogo y filtrar productos según sus preferencias.
2. Al hacer clic en un producto, los usuarios verán la descripción completa y podrán agregarlo al carrito.
3. En el carrito, los usuarios pueden revisar sus selecciones, realizar ajustes en las cantidades y proceder al pago cuando estén listos.

---

## Instalación

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/tu_usuario/tu_repositorio.git
