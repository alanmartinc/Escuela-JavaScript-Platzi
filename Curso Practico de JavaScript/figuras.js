// Código del cuadrado
const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrada = ladoCuadrado * ladoCuadrado;

console.group("Cuadrado");
console.log(`Los lados del cuadrado miden: ${ladoCuadrado}cm`);
console.log(`El perímetro del cuadrado es: ${perimetroCuadrado}cm`);
console.log(`El área del cuadrado es: ${areaCuadrada}cm^2`);
console.groupEnd();

// Código del triángulo
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

console.group("Triángulo");
console.log(
  `Los lados del triángulo miden: ${ladoTriangulo1}cm y ${ladoTriangulo2}cm`
);
console.log(`La base del triángulo es: ${baseTriangulo}cm`);
console.log(`La altura del triángulo es: ${alturaTriangulo}cm`);
console.log(`El perímetro del triángulo es: ${perimetroTriangulo}cm`);
console.log(`El área del triángulo es: ${areaTriangulo}cm^2`);
console.groupEnd();

// Código del circulo
const radioCirculo = 4;
const diametroCirculo = radioCirculo * 2;
const PI = Math.PI;
const perimetroCirculo = diametroCirculo * PI;
const areaCirculo = radioCirculo * radioCirculo * PI;

console.group("Círculos");
console.log(`El radio del círculo es: ${radioCirculo}cm`);
console.log(`El diametro del círculo es: ${diametroCirculo}cm`);
console.log(`PI es: ${PI}`);
console.log(`El perimetro del círculo es: ${perimetroCirculo}cm`);
console.log(`El area del círculo es: ${areaCirculo}cm^2`);
console.groupEnd();
