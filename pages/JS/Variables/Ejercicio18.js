
let numeroUsuario = +prompt("Ingresa un numero")

suma = 0
contador = 1

do {
    suma += contador
    contador++;
} while (contador <= numeroUsuario);

console.log("La suma de todos los numeros natural de "+ numeroUsuario + " es "+ suma)