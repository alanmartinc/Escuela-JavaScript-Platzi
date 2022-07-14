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

// --------------------------------------------------------

let hello = "Hello";
let world = "World";
let epicPhrase = hello + " " + world;
console.log(epicPhrase);

// es6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

// --------------------------------------------------------

let lorem =
  "Qui consequatur. Commodi. Ipsum vel duis yet minima \n" +
  "otra frase epica que necesitamos.";
console.log(lorem);

// es6
let lorem2 = `otra frase epica que necesitamos
ahora es otra frase epica
`;
console.log(lorem2);

// --------------------------------------------------------

let person = {
  name: "Alan",
  age: 25,
  country: "AR",
};
console.log(person.name, person.age, person.country);

// es6
let person2 = {
  name: "Alan",
  age: 25,
  country: "AR",
};

let { name, age, country } = person2;
console.log(name, age, country);

// --------------------------------------------------------

let team1 = ["Oscar", "Julian", "Ricardo"];
let team2 = ["Valeria", "Yesica", "Camila"];
let education = [
  "David",
  "Oscar",
  "Julian",
  "Ricardo",
  "Valeria",
  "Yesica",
  "Camila",
];
console.log(education);

// es6
let team3 = ["Oscar", "Julian", "Ricardo"];
let team4 = ["Valeria", "Yesica", "Camila"];
let education2 = ["David", ...team3, ...team4];
console.log(education2);
