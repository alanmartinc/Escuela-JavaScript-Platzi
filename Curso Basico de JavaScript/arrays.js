// Estructura/lista de datos para guardar ciertos valores (números, strings, objetos).

var frutas = ["Manzana", "Plátano", "Cereza", "Fresa"];

console.log(frutas);

// Elementos de un array
console.log(frutas.length);

// Acceder a cada elemento
console.log(frutas[0]);

// Agregar elemento al final
var masFrutas = frutas.push("Uvas");

// Eliminar elementos
var ultimo = frutas.pop("Uvas")

// Agregar elemento al inicio
var nuevaLongitud = frutas.unshift("Naranja");

// Eliminar elemento del inicio
var nuevaLongitud = frutas.shift("Naranja");

// Saber la posicion elemento del array
var posicion = frutas.indexOf("Cereza");

// Traer el elemento
frutas[2];