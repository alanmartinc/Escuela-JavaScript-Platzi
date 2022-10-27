let person = { name: "Alexa", age: 24 };
let country = "COL"

let data = { ...person, country };
console.log(data);

function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1, 1, 2, 3)
