let diaSemana = +prompt("Introduce un numero")

switch (diaSemana) {
    case 1:
        console.log("Corresponde al lunes")
        break;
    case 2:
        console.log("Corresponde al martes")
        break;
    case 3:
        console.log("Corresponde al miercoles")
        break;
    case 4:
        console.log("Corresponde al jueves")
        break;
    case 5:
        console.log("Corresponde al viernes")
        break;
    case 6:
        console.log("Corresponde al Sàbado")
        break;
    case 7:
        console.log("Corresponde al Domingo")
        break;

    default:
        console.log("No corresponde a un día de la semana")
        break;
}