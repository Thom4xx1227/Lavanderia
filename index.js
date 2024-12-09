let nBasico = 1;
let nPremium = 2;

let precioPorPieza 

let basico = "Lavado básico = $2000 por pieza de ropa";
let premium = "Lavado premium (incluye secado y planchado) = $4000 por pieza de ropa ";

let basicoPrecio = 2000;
let premiumPrecio = 4000;

alert ("Bienvenido a la la lavanderia Donde Fabio")

let opcionLavadoSeleccionada = parseInt(prompt(`Contamos con dos tipos de lavado, ¿Cual deseas?
    
${nBasico} = ${basico}
${nPremium} = ${premium}
    
Selecciona 1 o 2 para continuar `));

if (opcionLavadoSeleccionada === nBasico){
    precioPorPieza= basicoPrecio
    alert ("has seleccionado un Lavado basico con un precio de $2000 por pieza");
} else if (opcionLavadoSeleccionada === nPremium){
    precioPorPieza = premiumPrecio
    alert ("has seleccionda un lavado premiun con un preico de $4000 por pieza");
} else {
    alert (" selecciona una opcion correcta");
};

let cantidadPiezas = parseInt(prompt(`ingresa la cantidad de piezas que tienes por lavar( Minimo 1, Maximo 20)`));

if (cantidadPiezas < 1 || cantidadPiezas > 20){
    alert(`Minimo 1 pieza Maximo 20`)
} else {
    alert ("Tenemos tu pedido")
}


let total = cantidadPiezas * precioPorPieza



alert (`El total por las piezas de ropa lavadas es $${total}`)