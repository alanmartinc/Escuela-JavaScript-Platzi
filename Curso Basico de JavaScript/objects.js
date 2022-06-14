/* Objetos */
var miAuto = {
  marca: "Ford",
  modelo: "Mustang",
  anio: "2015",
  color: "negro",
  detalleDelAuto: function () {
    console.log(`Auto ${this.modelo} ${this.anio}`);
  },
};

// Traer un valor del objeto
miAuto.marca;

// Llamar a la funcion dentro del objeto
miAuto.detalleDelAuto();

/*------------------------------------------------*/

/* Objetos Función constructora */
function auto(marca, modelo, anio, color) {
  this.marca = marca;
  this.modelo = modelo;
  this.anio = anio;
  this.color = color;
}

// Crear un objeto
// New es una palabra reservada, va a generar una nueva instancia de nuestra funcion constructora
// Una instancia es generar un objeto que deriva de otro objeto
var autoNuevo = new auto("Ford", "Mustang", "2015", "negro");

// Llamar al nuevo objeto
autoNuevo;
