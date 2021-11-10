// Hoisting: Es cuando mandas a llamar una variable antes de declararla o inicializarla

console.log(miNombre);
var miNombre = "Diego";
// undefined
// undefined

var miNombre = undefined;
console.log(miNombre + "Soy ese hoisting");
miNombre = "Diego";
// undefined
// "Diego"

hey();
function hey() {
    console.log("hola " + miNombre);
}
var miNombre = "Diego";
// Hola undefined
// undefined