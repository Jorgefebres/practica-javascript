// Código del Cuadrado
console.group("Cuadrado");

function obtenerPerimetroCuadrado(ladoCuadrado) {
  return ladoCuadrado * 4;
}

function obtenerAreaCuadrado(ladoCuadrado) {
  return ladoCuadrado * ladoCuadrado;
}
console.groupEnd();

// Código del Triángulo
console.group("Triángulo");

function obtenerPerimetroTriangulo(
  ladoTriangulo1,
  ladoTriangulo2,
  baseTriangulo
) {
  return ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
}

function obtenerAreaTriangulo(baseTriangulo, alturaTriangulo) {
  return (baseTriangulo * alturaTriangulo) / 2;
}

function obtenerAlturaTriangulo(
  ladoTriangulo1,
  ladoTriangulo2,
  ladoTrianguloBase
) {
  if (ladoTriangulo1 == ladoTriangulo2 && ladoTriangulo1 == ladoTrianguloBase) {
    const altura = Math.sqrt(ladoTriangulo1 ** 2 - ladoTrianguloBase ** 2 / 4);
    return altura;
  } else {
    alert(
      "Las longitudes de los lados no corresponden a un triangulo isósceles"
    );
  }
}
console.groupEnd();

// Código del Círculo
console.group("Círculo");
// PI
const PI = Math.PI;
console.log("PI es: ", PI);
// Diametro
function obtenerDiametroCirculo(radioCirculo) {
  return radioCirculo * 2;
}
// Circunferencia
function obtenerPerimetroCirculo(radioCirculo) {
  const diametroCirculo = obtenerDiametroCirculo(radioCirculo);
  return diametroCirculo * PI;
}
// Area
function obtenerAreaCirculo(radioCirculo) {
  return radioCirculo * radioCirculo * PI;
}
console.groupEnd();

// interaccion con html

function calcularPerimetroCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;
  const perimetro = obtenerPerimetroCuadrado(value);
  alert(perimetro);
}

function calcularAreaCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;
  const perimetro = obtenerAreaCuadrado(value);
  alert(perimetro);
}
