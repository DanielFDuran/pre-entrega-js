let nombre;
let origen;
let destino;
const precio = 100;

function inicio(){
    alert("Bienvenido a Forfly Viaggi! Donde deseas viajar?")
}
inicio()

function mostrarViaje(){
    let nombre = prompt("Ingresa tu nombre?");
    let origen = prompt ("Ingresar origen");
    let destino = prompt ("Ingresa destino");
   
    alert(`Hola ${nombre.toUpperCase()} tu reserva es: origen ${origen.toUpperCase()} destino ${destino.toUpperCase()}`);
}

mostrarViaje()

function pago (){
    let formaDePago = parseInt(prompt("Forma de pago 1: Efectivo 2: Tarjeta"));
    switch (formaDePago) {
        case 1: 
        alert (`El precio de tu vuelo es de ${precio} USDT`);
        let eleccionPagar = prompt ("Continuar con el pago si o no");
        if (eleccionPagar == "si"){
            alert ("Pago realizado");
        }
        else {
            alert ("Reserva cancelada");
        }
        break;
        case 2:
            alert (`El precio de tu vuelo es de ${precio} USDT`);
            let eleccionPagarDos = prompt ("Continuar con el pago si o no");
            if (eleccionPagarDos == "si"){
                alert ("Pago realizado");
            }
            else {
                alert ("Reserva cancelada");
            }
            break;
        default:
        alert ("Reserva Cancelada")
    }
}
pago()


