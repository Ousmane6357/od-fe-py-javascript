let numeroUsuario = +prompt("Ingresa un numero por favor : ")

for (let numero = 1; numero <= numeroUsuario; numero++) {
    console.log(numero)
    if (numeroUsuario % numero || numeroUsuario % numeroUsuario ) {
        console.log("Es un numero primo")
    }else{
        console.log("No es un numero primo")
    }
}



// let numeroUsuario = +prompt("Ingresa un número por favor: ");
// let esPrimo = true;

// if (numeroUsuario < 2) {
//   esPrimo = false;
// } else {
//   for (let numero = 2; numero < numeroUsuario; numero++) {
//     if (numeroUsuario % numero === 0) {
//       esPrimo = false;
//       break;
//     }
//   }
// }

// if (esPrimo) {
//   console.log(numeroUsuario + " es un número primo.");
// } else {
//   console.log(numeroUsuario + " no es un número primo.");
// }
