// Ciclo: Tarea que pueda repetirse sin que se tenga que hacer de forma manual

/* For y for of */
var estudiantes = ["Maria", "Alan", "Sergio", "Dario"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

for(var i = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i]);
}

for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}

/* While */
var estudiantes = ["Maria", "Alan", "Sergio", "Dario"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

while(estudiantes.length > 0){
    console.log(estudiantes);
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}