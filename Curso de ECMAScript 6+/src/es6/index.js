function newFunction(name, age, country) {
  var name = name || "Alan";
  var age = age || 25;
  var country = country || "AR";
  console.log(name, age, country);
}

// es6
function newFunction2(name, age, country) {
  console.log(name, age, country);
}

newFunction2("Alan", 25, "AR");

let hello = "Hello";
let world = "World";
let epicPhrase = hello + " " + world;
console.log(epicPhrase);

// es6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);
