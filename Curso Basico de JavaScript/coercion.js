// Implicita: Cuando la maquina nos ayuda a cambiar de un tipo de valor a otro.
// Explicita: Cuando nosotros obligamos a que cambie un valor de un tipo a otro.

// Implicita:
var a = 4 + "7"

typeof a
"string"

var b = 4 * "7"
typeof b
"number"

// Explicita:
var a = 20;
var b = a + "";

console.log(b);
20

typeof b;
"string"

var c = String(a);

typeof c;
"string"

console.log(c);
20

var d = Number(c);

typeof d
"number"