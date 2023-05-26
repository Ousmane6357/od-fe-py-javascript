let usuarioNumero = +prompt("Introduce un numero por favor: ");
let multiplicacion = 1;
let numero = 1;

while (numero <= usuarioNumero) {
    multiplicacion *= numero;
    numero++;
}

console.log("La multiplicación de todos los números enteros positivos menores o iguales a " + usuarioNumero + " es: " + multiplicacion);
