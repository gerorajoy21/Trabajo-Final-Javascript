//VARIABLES
const destinoDatos = localStorage.getItem('destino');
const costoVueloP = document.getElementById("costoVueloP");
const costoVueloP2 = document.getElementById("costoVueloP2");
const impuestoPaisP = document.getElementById("impuestoPaisP");
const impuestoPaisP2 = document.getElementById("impuestoPaisP2");
const tasasCargosP = document.getElementById("tasasCargosP");
const tasasCargosP2 = document.getElementById("tasasCargosP2");
const precioFinalP = document.getElementById("precioFinalP");
const precioFinalP2 = document.getElementById("precioFinalP2");
const contactForm =  $("#contact-form");
const botonComprar = $("#botonComprar");
const botonComprar2 = $("#botonComprar2");
const btnSwitch = document.querySelector('#switch');
const btnSwitch2 = document.querySelector('#switch2');
const formComprar = document.querySelector("#formComprar");

//Titulo Reserva
let tituloReserva = $("#titulo-reserva");
    tituloReserva.append("<span>Tu Reserva</span>");
    tituloReserva.css("margin-top", "25px");

//ARRAYS PAISES
let americaSur = ['Argentina', 'Chile', 'Peru', 'Uruguay', 'Paraguay', 'Brasil', 'Venezuela', 'Ecuador', 'Bolivia', 'Colombia'];
let americaCentral = ['Mexico', 'Guatemala', 'El Salvador', 'Costa Rica', 'Panama', 'Nicaragua', 'Honduras', 'Belize', 'Jamaica', 'Bahamas', 'Republica Dominicana', 'Puerto Rico', 'Aruba', 'Trinidad y Tobago', 'Cuba'];
let americaNorte = ['Estados Unidos', 'Canada'];
let europa = ["Alemania", "Austria", "Belgica", "Bielorrusia", "Bulgaria", "Croacia", "Dinamarca", "Eslovaquia", "Eslovenia", "Espania", "Estonia", "Finlandia", "Francia", "Grecia", "Hungría", "Irlanda", "Islandia", "Italia", "Letonia", "Lituania", "Noruega", "Holanda", "Polonia", "Portugal", "Inglaterra", "República Checa", "Rumania", "Rusia", "Serbia", "Suecia", "Suiza", "Turquía", "Ucrania"];
let asia = ["Afganistan", "Arabia Saudita", "Bangladesh", "Camboya", "Qatar", "China", "Corea del Norte", "Corea del Sur", "Filipinas", "India", "Indonesia", "Irak", "Iran", "Israel", "Japon", "Jordania", "Kasajistan", "Libano", "Malasia", "Mongolia", "Nepal", "Pakistan", "Siria", "Vietnam", "Yemen", "Taiwan"];
let oceania = ['Australia', 'Islas Salomon', 'Palaos', 'Fiyi', 'Samoa', 'Tonga', 'Nueva Zelanda'];
let africa = ['Sudafrica', 'Argelia', 'Tunez', 'Nigeria', 'Marruecos', 'Libia', 'Egipto', 'Costa de Marfil', 'Madagascar', 'Camerun'];

//DARK MODE

btnSwitch.addEventListener('click', () => {
	document.body.classList.toggle('dark');
	btnSwitch.classList.toggle('active');
    btnSwitch2.classList.toggle('active');

	// Guardamos el modo en localstorage.
	if(document.body.classList.contains('dark')){
		localStorage.setItem('dark-mode', 'true');
	} else {
		localStorage.setItem('dark-mode', 'false');
	}
});

// Obtenemos el modo actual.
if(localStorage.getItem('dark-mode') === 'true'){
	document.body.classList.add('dark');
	btnSwitch.classList.add('active');
} else {
	document.body.classList.remove('dark');
	btnSwitch.classList.remove('active');
}

//DARK-MODE RESPONSIVE

btnSwitch2.addEventListener('click', () => {
	document.body.classList.toggle('dark');
	btnSwitch2.classList.toggle('active');
    btnSwitch.classList.toggle('active');

    // Guardamos el modo en localstorage.
	if(document.body.classList.contains('dark')){
		localStorage.setItem('dark-mode', 'true');
	} else {
		localStorage.setItem('dark-mode', 'false');
	}
});

// Obtenemos el modo actual.
if(localStorage.getItem('dark-mode') === 'true'){
	document.body.classList.add('dark');
	btnSwitch2.classList.add('active');
} else {
	document.body.classList.remove('dark');
	btnSwitch2.classList.remove('active');
}

//MENU HAMBURGUESA

btnMenu = document.querySelector("#menu");
btnCerrar = document.querySelector("#cerrar");
overlay = document.querySelector("#overlay");

document.addEventListener("DOMContentLoaded", () => {
    btnMenu.addEventListener("click", mostrarMenu);
    btnCerrar.addEventListener("click", cerrarMenu);
    overlay.addEventListener("click", cerrarMenu);
})

function mostrarMenu(){
    menu = document.querySelector("#menuLateral");
    overlay = document.querySelector("#overlay");
    body = document.querySelector("body");
    menu.classList.add("active");
    overlay.classList.add("activeOverlay");
    body.classList.add("activeFixed");
}

function cerrarMenu(){
    menu = document.querySelector("#menuLateral");
    body = document.querySelector("body");
    menu.classList.remove("active");
    overlay.classList.remove("activeOverlay");
    body.classList.remove("activeFixed");
}

//Viaje

//Tipo de Viaje
let tipoDeViajeP = document.getElementById("tipoDeViajeP");   
    tipoDeViajeP.innerText = localStorage.getItem("tipoDeViaje");

//Salida
let salidaP = document.getElementById("salidaP");   
    salidaP.innerText = localStorage.getItem("salida");

//Destino
let destinoP = document.getElementById("destinoP");   
    destinoP.innerText = localStorage.getItem("destino");

//Pasajeros
let personasP = document.getElementById("personasP");   
    personasP.innerText = localStorage.getItem("personas");

//Clase
let claseP = document.getElementById("claseP");   
    claseP.innerText = localStorage.getItem("clase");

//Fecha de Salida
let fechaP = document.getElementById("fechaP");   
    fechaP.innerText = localStorage.getItem("fecha");

let fechaP2 = document.getElementById("fechaP2");   
    fechaP2.innerText = localStorage.getItem("fecha");
    
let fechaP3 = document.getElementById("fechaP3");   
    fechaP3.innerText = localStorage.getItem("fecha");

//Fecha de Llegada
let fecha2P = document.getElementById("fecha2P");   
    fecha2P.innerText = localStorage.getItem("fecha2");

let fecha2P2 = document.getElementById("fecha2P2");   
    fecha2P2.innerText = localStorage.getItem("fecha2");

let fecha2P3 = document.getElementById("fecha2P3");   
    fecha2P3.innerText = localStorage.getItem("fecha2");

//Calcular Impuestos del viaje

function generateRandomInt(min,max){
    return Math.floor((Math.random() * (max+1 -min)) +min);
}

function calcularImpuestoPais(viaje) {
    let impuestoPais = viaje * 1.3 - viaje;
    let resultado = Math.round(impuestoPais);
    return resultado;
}

function calcularTasa(viaje) {
    let tasa = viaje * 1.2 - viaje;
    let resultado = Math.round(tasa);
    return resultado;
}

//Precio Inicial

function filtrarDestinos() {
    if (americaSur.includes(destinoDatos)) {
        costoVueloP.innerText = +generateRandomInt(20000,60000);
        costoVueloP2.innerText = +generateRandomInt(20000,60000);
    }
    else if (americaCentral.includes(destinoDatos)) {
        costoVueloP.innerText = +generateRandomInt(75000,120000);
        costoVueloP2.innerText = +generateRandomInt(75000,120000);
    }
    else if (americaNorte.includes(destinoDatos)) {
        costoVueloP.innerText = +generateRandomInt(120000,125000);
        costoVueloP2.innerText = +generateRandomInt(120000,125000);
    }
    else if (europa.includes(destinoDatos)) {
        costoVueloP.innerText = +generateRandomInt(100000,150000);
        costoVueloP2.innerText = +generateRandomInt(100000,150000);
    }
    else if (asia.includes(destinoDatos)) {
        costoVueloP.innerText = +generateRandomInt(40000,190000);
        costoVueloP2.innerText = +generateRandomInt(40000,190000);
    }
    else if (oceania.includes(destinoDatos)) {
        costoVueloP.innerText = +generateRandomInt(100000,150000);
        costoVueloP2.innerText = +generateRandomInt(100000,150000);
    }
    else if (africa.includes(destinoDatos)) {
        costoVueloP.innerText = +generateRandomInt(60000,155000);
        costoVueloP2.innerText = +generateRandomInt(60000,155000);
    }
    else {
        console.log('Error');
    }
}

filtrarDestinos();

//Impuesto Pais

let impuestoVuelo = calcularImpuestoPais(costoVueloP.innerText);
let impuestoVuelo2 = calcularImpuestoPais(costoVueloP2.innerText);
impuestoPaisP.innerText = '$ ' + impuestoVuelo;
impuestoPaisP2.innerText = '$ ' + impuestoVuelo2;

//Tasas y Cargos

let tasasVuelo = calcularTasa(costoVueloP.innerText);
let tasasVuelo2 = calcularTasa(costoVueloP2.innerText);
tasasCargosP.innerText = '$ ' + tasasVuelo;
tasasCargosP2.innerText = '$ ' + tasasVuelo2;

//Precio Final

let precioFinal = parseInt(costoVueloP.innerText) + parseInt(calcularImpuestoPais(costoVueloP.innerText)) + parseInt(calcularTasa(costoVueloP.innerText));
let precioFinal2 = parseInt(costoVueloP2.innerText) + parseInt(calcularImpuestoPais(costoVueloP2.innerText)) + parseInt(calcularTasa(costoVueloP2.innerText));   
precioFinalP.innerText = '$ ' + precioFinal;
precioFinalP2.innerText = '$ ' + precioFinal2;

//Aparecer Formulario

$(document).ready(function(){
    contactForm.hide();
})

botonComprar.click(function(){
    contactForm.fadeIn(2000);
    $('html, body').animate({
        scrollTop: contactForm.offset().top
    }, 50);
})

botonComprar2.click(function(){
    contactForm.fadeIn(2000);
    $('html, body').animate({
        scrollTop: contactForm.offset().top
    }, 50);
})

//ALERTA DE GRACIAS POR SU COMPRA

function comprar(e) {
    e.preventDefault()

    const spinner = document.querySelector(".spinner");
    const layout = document.querySelector("#layout");
    const header = document.querySelector("#header-compras");
    const headerB = document.querySelector("#headerB");
    const main = document.querySelector("main");
    const sectionComprar = document.querySelector("#section-comprar");
    const footer = document.querySelector('footer');
    layout.remove();
    header.remove();
    headerB.remove();
    sectionComprar.remove();
    footer.remove();
    localStorage.removeItem("carrito");

    spinner.style.display = "flex";

    setTimeout(() => {
        spinner.style.display = "none";

        //GRACIAS POR SU COMPRA
        const container = document.createElement("div");
        container.classList.add("div-gracias");

        let p = document.createElement('p');
        p.classList.add("text-center", "gracias-color");
        let a = document.createElement('a');
        a.href = "index.html";
        a.textContent = "Volver al Inicio";

        p.appendChild(a);

        let img = document.createElement('img');
        img.classList.add("nice", "d-block", "mx-auto", "mb-3");
        img.src = "imagenes/nice.png";

        let h1 = document.createElement('h1');
        h1.classList.add("text-center");
        h1.textContent = "¡Muchas gracias por su compra!";

        container.appendChild(p);
        container.appendChild(img);
        container.appendChild(h1);

        main.appendChild(container);

    }, 3000);
}

formComprar.addEventListener("submit", comprar);