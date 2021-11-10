// Scope global
var nombre = "Diego";

function func() {
    // Scope local
    var apellido = "De granda";
    return nombre + " " + apellido
}

func(); // "Diego De Granda"

// Lo que esta en global no puede acceder a local y lo que esta en local puede acceder a global.
console.log(apellido); // apellido is not defined