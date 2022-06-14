/* Métodos de recorridos de Arrays */
var articulos = [
  {
    nombre: "Laptop",
    precio: 2000,
    cantidad: 1,
  },
  {
    nombre: "Mouse",
    precio: 100,
    cantidad: 2,
  },
  {
    nombre: "Teclado",
    precio: 300,
    cantidad: 3,
  },
];

// Filter: Valida si algo es verdadero o falso y lo mete en un nuevo array
var articulosFiltrados = articulos.filter(function (articulo) {
  return articulo.precio < 2000;
});

articulosFiltrados;

// Map: Recorre el array y devuelve un nuevo array con los resultados
var nombreArticulos = articulos.map(function (articulo) {
  return articulo.nombre;
});

nombreArticulos;

/*------------------------------------------------*/

/*Recorriendo Arrays con .find(), .forEach() y .some() */

// Find: Nos devuelve el primer elemento que cumpla con la condición
var articuloEncontrado = articulos.find(function (articulo) {
  return articulo.nombre === "Teclado";
});

articuloEncontrado;

// ForEach: Recorre el array y ejecuta una función
articulos.forEach(function (articulo) {
  console.log(articulo.nombre);
});

// Some: Valida si algo es verdadero o falso
var articulosBaratos = articulos.some(function (articulo) {
  return articulo.precio < 200;
});

articulosBaratos;
