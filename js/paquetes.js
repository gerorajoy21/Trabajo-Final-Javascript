//VARIABLES
const listado = document.querySelector("#verCarro");
const precioTotal = document.getElementById("total");
const impuestoPaqueteP = document.getElementById("impuestoPaqueteP");
const tasasPaqueteP = document.getElementById("tasasPaqueteP");
const precioPaqueteP = document.getElementById("precioPaqueteP");
const final = localStorage.getItem('totalCarrito');
const botonPaquetes = $("#botonPaquetes");
const contactForm =  $("#contact-form");
const btnSwitch = document.querySelector('#switch');
const btnSwitch2 = document.querySelector('#switch2');
const formComprar = document.querySelector("#formComprar");
let total = 0;

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

//DARK MODE RESPONSIVE
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

//Calcular Impuestos del viaje

function calcularImpuestoPaisPaquete(destino) {
    let impuestoPais = (destino * 1.3) - destino;
    return impuestoPais;
}

function calcularTasaPaquete(destino) {
    let tasa = (destino * 1.2) - destino;
    return tasa;
}

document.addEventListener("DOMContentLoaded", () => {

    //Obtenemos los viajes a comprar
    if (localStorage.getItem("carrito")) {
        carrito = JSON.parse(localStorage.getItem("carrito"))
        mostrarFinalizado();
    }
});


function mostrarFinalizado() {

    Object.values(carrito).forEach(viaje => {
        let contenedor = document.createElement("div");

        let img = document.createElement("img");
        img.classList.add("img-paquetes", "img-fluid");
        img.src = `${viaje.imagen}`;

        let p = document.createElement("p");
        p.classList.add("text-center", "mt-3");
        p.textContent = `${viaje.destino}`;

        let p2 = document.createElement("p");
        p2.classList.add("text-center");
        p2.textContent = `${viaje.vuelo}`;

        let p3 = document.createElement("p");
        p3.classList.add("text-center");
        p3.textContent = `${viaje.cantidad}` + " Personas";

        let hr = document.createElement("hr");

        let p4 = document.createElement("p");
        p4.classList.add("text-center", "mb-3");
        p4.textContent = "$ " + `${viaje.precio}`;

        contenedor.appendChild(img);
        contenedor.appendChild(p);
        contenedor.appendChild(p2);
        contenedor.appendChild(p3);
        contenedor.appendChild(p4);
        
        total += viaje.precio * viaje.cantidad;

        contenedor.classList.add("d-flex", "flex-column", "justify-content-around", "mb-3", "listado", "cartaViaje", "card")
        const separacion = document.querySelector("#separacion");
        listado.insertBefore(contenedor, separacion);

        precioTotal.textContent = '$ ' + `${total}`;
    });
};

//Impuesto Pais

let impuestoPaquete = calcularImpuestoPaisPaquete(final);
impuestoPaqueteP.innerText = '$ ' + impuestoPaquete;

//Tasas y Cargos

let tasasPaquete = calcularTasaPaquete(final);
tasasPaqueteP.innerText = '$ ' + tasasPaquete;

//Precio Final

let precioPaquete = parseInt(final) + parseInt(calcularImpuestoPaisPaquete(final)) + parseInt(calcularTasaPaquete(final));
precioPaqueteP.innerText = '$ ' + precioPaquete;

//Aparecer Formulario

$(document).ready(function(){
    contactForm.hide();
})

botonPaquetes.click(function(){
    contactForm.fadeIn(2000);
    $('html, body').animate({
        scrollTop: contactForm.offset().top
    }, 50);
})

//ALERTA GRACIAS POR SU COMPRA

function comprar(e) {
    e.preventDefault()

    const spinner = document.querySelector(".spinner");
    const layout = document.querySelector("#layout");
    const header = document.querySelector("#header-paquetes")
    const header2 = document.querySelector("#header2")
    const main = document.querySelector("main");
    const footer = document.querySelector('footer')
    layout.remove();
    header.remove();
    header2.remove();
    footer.remove();
    localStorage.removeItem("carrito");

    spinner.style.display = "flex";

    setTimeout(() => {
        spinner.style.display = "none";

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
        h1.textContent = "¡Muchas gracias por su compra!"

        container.appendChild(p);
        container.appendChild(img);
        container.appendChild(h1);

        main.appendChild(container);

    }, 3000);
}

formComprar.addEventListener("submit", comprar);