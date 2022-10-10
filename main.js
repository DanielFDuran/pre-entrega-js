let nombre;
let origen;
let destino;
const precio = 50;

function inicio(){
    alert("Bienvenido a Forfly Viaggi! Donde deseas viajar?")
}
inicio()

function mostrarViajeIda(){
    let nombre = prompt("Ingresa tu nombre?");
    let origen = prompt ("Ingresar origen");
    let destino = prompt ("Ingresa destino");
   
    alert(`Hola ${nombre.toUpperCase()} tu reserva es: origen ${origen.toUpperCase()} destino ${destino.toUpperCase()}`);
}

function regreso(){
    alert (`Desea comprar el pasaje de regreso`);
    let opcionRegreso = prompt("Desea comprar el pasaje de 1: SI 2: NO");
    if (opcionRegreso == "si"){
        alert ("Continuemos entonces");
    }
    else {
        alert ("Opcion cancelada");
    }

}
mostrarViajeIda();
regreso ();

function mostrarViajeVuelta(){
    let nombre = prompt("Ingresa tu nombre?");
    let origen = prompt ("Ingresar origen");
    let destino = prompt ("Ingresa destino");
   
    alert(`Hola ${nombre.toUpperCase()} tu reserva es: origen ${origen.toUpperCase()} destino ${destino.toUpperCase()}`);
}

mostrarViajeVuelta();

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

inicio();

const listaDestino = [
    { nombre: "buenos aires", precio: 30},
    { nombre: "jujuy", precio: 20},
    { nombre: "salta", precio: 10},
    { nombre: "tucuman", precio: 10},
    { nombre: "santiago del estero", precio: 10},
    { nombre: "la rioja", precio: 10},
    { nombre: "mendoza", precio: 15},
    { nombre: "san juan", precio: 10},
    { nombre: "chubut", precio: 20},
    { nombre: "tierra del fuego", precio: 20},
    { nombre: "catamarca", precio: 10},
    { nombre: "chaco", precio: 10},
    { nombre: "formosa", precio: 10},
    { nombre: "misiones", precio: 10},
    { nombre: "corrientes", precio: 10},
    { nombre: "santa fe", precio: 10},
    { nombre: "entre rios", precio: 10},
    { nombre: "cordoba", precio: 10},
    { nombre: "san luis", precio: 15},
    { nombre: "neuquen", precio: 15},
    { nombre: "rio negro", precio: 15},
    { nombre: "la pampa", precio: 10},
    { nombre: "santa cruz", precio: 20},
  
];

listaDestino.forEach((destino)=> {
    console.log(`Su destino es ${destino.nombre} y su precio es ${destino.precio} USDT`)
})
 
let buscarPorPrecio = listaDestino.filter(destino => destino.precio > 30);

console.log(buscarPorPrecio)

 
class Nuevo {
    constructor(nombre, precio,) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

const crearDestino = ()=> {
    let nombreDestino = prompt("Agregue nuevo destino");
    let precioDestino = prompt("Precio que quiere pagar");


    const destinoNuevo = new Nuevo(nombreDestino,precioDestino);
    console.log(destinoNuevo);
    return destinoNuevo;
}
crearDestino()