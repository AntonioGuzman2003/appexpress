
const express = require('express');
const app = express();

// Definición del puerto
const port = 10900;

// Ruta raíz
app.get('/', (req, res) => {
  res.send(`<h1>Bienvenido a mi aplicación Express</h1>
  <p>Las rutas disponibles son:</p>
  <ul>
    <li><a href="/clientes">Clientes</a></li>
    <li><a href="/productos">Productos</a></li>
  </ul>
  `);
});

// Ruta para mostrar clientes
app.get('/clientes', (req, res) => {
  const clientes = [
    { nombre: 'Antonio Guzman', id: 1 },
    { nombre: 'Carla Gutierrez', id: 2 },
    { nombre: 'Maria Palacios', id: 3 },
  ];
  res.send(`<h1>Listado de clientes</h1>
  <ul>
    ${clientes.map(cliente => `<li>${cliente.nombre} - ID: ${cliente.id}</li>`).join('')}
  </ul>
  `);
});

// Ruta para mostrar productos
app.get('/productos', (req, res) => {
  const productos = [
    { nombre: 'Laptop', precio: 1000 },
    { nombre: 'Televisor ', precio: 2000 },
    { nombre: 'PS4', precio: 3000 },
  ];
  res.send(`<h1>Listado de productos</h1>
  <ul>
    ${productos.map(producto => `<li>${producto.nombre} - Precio: $${producto.precio}</li>`).join('')}
  </ul>
  `);
});
app.use(express.static('public'));

// Inicio del servidor
app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});