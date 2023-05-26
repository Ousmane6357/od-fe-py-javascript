let numero1 = +prompt("Ingresa un numero")
let numero2 = +prompt("Ingresa otro numero")
let numero3 = +prompt("Ingresa un otro numero")

if (numero1 > numero2 && numero1> numero3){
    console.log("El numero mayor"+numero1)
}

if (numero2 > numero1 && numero2> numero3){
    console.log("El numero mayor"+numero2)
}

if (numero3 > numero2 && numero3> numero1){
    console.log("El numero mayor"+numero3)
}
