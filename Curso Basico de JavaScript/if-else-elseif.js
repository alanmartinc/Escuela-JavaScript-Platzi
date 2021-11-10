if(true) {
    console.log("Hola");
}
// Hola

if(false) {
    console.log("Hola");
}
// undefined

if(false) {
    console.log("Hola");
} else {
    console.log("Soy falso");
}
// Soy falso

var edad = 18;
if(edad === 18) {
    console.log("Puedes votar");
} else if (edad > 18) {
    console.log("Puedes votar de nuevo");
} else {
    console.log("No puedes votar");
}
// Puedes votar

var edad = 19;
if(edad === 18) {
    console.log("Puedes votar");
} else if (edad > 18) {
    console.log("Puedes votar de nuevo");
} else {
    console.log("No puedes votar");
}
// Puedes votar de nuevo

var edad = 17;
if(edad === 18) {
    console.log("Puedes votar");
} else if (edad > 18) {
    console.log("Puedes votar de nuevo");
} else {
    console.log("No puedes votar");
}
// No puedes votar

condition ? true : false;

var numero = 1;
var resultado = numero === 1 ? "Sí soy un uno" : "No, no soy uno";
console.log(resultado);
// Sí soy un uno