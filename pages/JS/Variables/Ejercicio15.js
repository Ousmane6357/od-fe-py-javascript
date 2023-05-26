let anoBisiestro = +prompt("Ingrese un año por favor: ")

if (anoBisiestro % 4 ==0  || anoBisiestro %400 ==0){
    console.log("Es un año bisiestro")
}else{
    console.log("No es un año bisiestro")
}