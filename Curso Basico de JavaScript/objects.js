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
