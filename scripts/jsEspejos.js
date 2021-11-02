const productos = [
    {id: 0, nombre: 'Ameba', tipo: 'Espejo', precio: 3500},
    {id: 1, nombre: 'Blue Lake', tipo: 'Espejo', precio: 5900},
    {id: 2, nombre: 'Casper', tipo: 'Espejo', precio: 3800},
    {id: 3, nombre: 'Circular', tipo: 'Espejo', precio: 3660},
    {id: 4, nombre: 'Bubble Gum', tipo: 'Espejo', precio: 7300},
    {id: 5, nombre: 'Circular con marco de hierro', tipo: 'Espejo', precio: 3500},
    {id: 6, nombre: 'Cloudy', tipo: 'Espejo', precio: 6800},
    {id: 7, nombre: 'Fases Lunares', tipo: 'Espejo', precio: 4800},
    {id: 8, nombre: 'Mystic', tipo: 'Espejo', precio: 5800},
    {id: 9, nombre: 'Oval', tipo: 'Espejo', precio: 6400},
    {id: 10, nombre: 'Portal', tipo: 'Espejo', precio: 8000},
    {id: 11, nombre: 'Rectangular con marco', tipo: 'Espejo', precio: 5800},
    {id: 12, nombre: 'Waves', tipo: 'Espejo', precio: 8500},
    {id: 13, nombre: 'Mega Casper', tipo: 'Espejo', precio: 8400},
    {id: 14, nombre: 'Aura', tipo: 'Espejo', precio: 6800},
    {id: 15, nombre: 'Bubble Top', tipo: 'Espejo', precio: 7300},
    {id: 16, nombre: 'White Noise', tipo: 'Espejo', precio: 5500},
    {id: 17, nombre: 'Rave', tipo: 'Espejo', precio: 3800},
    {id: 18, nombre: 'Rectangular con marco de hierro', tipo: 'Espejo', precio: 5400},

]

// esta funcion genera el html con los productos
const mostrarProductos = () => {
    for (const producto of productos){
        let contenedor = document.createElement('div');
        contenedor.innerHTML = 
        `
            <div class="col gallery__item">                                
                <a class="gallery__anchor" href="" onclick=obtenerCantidadProductosComprados(${producto.id})><img src="../img/espejos/${producto.id}.jpeg" alt="${producto.nombre}" class="gallery__img rounded">
                <h3 class="gallery__txt--lg">${producto.tipo} ${producto.nombre}</h3></a>
                <p class="gallery__txt--md">$ ${producto.precio}</p>
                <p class="gallery__txt--sm">3 cuotas sin interés de $ ${producto.precio/3}</p>
            </div>
        `
        document.getElementById('prod').appendChild(contenedor);
    }
}

// hacer una funcion que me traiga el texto del span y lo convierta a numero, lo incemente en 1 y luego cambiamos el texto del span

const obtenerCantidadProductosComprados = (idProducto) => {
    console.log(idProducto);
    let elemento = document.getElementsByClassName('shop')[0];
    let cantidad = parseFloat(elemento.innerHTML) + 1;
    elemento.innerHTML = cantidad;
    agregarProductoAlCarrito(idProducto)
}


// el carrito ya tiene un producto
let prod = [
    {id: 0, nombre: 'Ameba', tipo: 'Espejo', precio: 3500}
]
localStorage.setItem('Carrito', JSON.stringify(prod))
let carrito = JSON.parse(localStorage.getItem('Carrito')); // convierto un objeto JSON en javascript (string a objeto)

// guardar en un arreglo de objetos el producto comprado (clickeado)
const agregarProductoAlCarrito = (idProducto) => {
    // buscar en el arreglo de productos el producto clickeado
    let productoComprado = productos.find(x=>x.id ==idProducto);
    carrito.push(productoComprado)
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

const verCarrito = () => {
    // dibujar en un div todos los productos comprados
    let contenedor = document.createElement('div');
    let compras = JSON.parse(localStorage.getItem('carrito'));

    for (const prod of compras) {
        contenedor.innerHTML += 
    `
    <div class="container-fluid">
        <div class="col gallery__item"> 
            <h2>${prod.tipo} ${prod.nombre}</h2>
            <img src="../img/espejos/${prod.id}.jpeg" class="gallery__img rounded" height="350rem" width="auto">
            <p class="gallery__txt--md">$ ${prod.precio}</p>
        </div>
    </div> 
    `
    }
    document.getElementById('carro').appendChild(contenedor);
}