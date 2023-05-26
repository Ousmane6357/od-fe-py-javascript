let usuarioNumero = parseInt(prompt("Introduce un número: "));
let suma = 0;

while (usuarioNumero !== 0) {
    let digito = usuarioNumero % 10;  
    suma += digito;  // 
    usuarioNumero = Math.floor(usuarioNumero / 10);  // 
}

console.log("La suma de los dígitos del número ingresado es: " + suma);
