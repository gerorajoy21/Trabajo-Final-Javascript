//VARIABLES
const selector = $('#cabeza');
const cabeza = document.querySelector("#cabeza");
const botonViajar = $('#viajar');
const btnSwitch = document.querySelector('#switch');
const btnSwitch2 = document.querySelector('#switch2');
const continentes = document.querySelector('#categorias');
const precioMin = document.querySelector('#precioMin');
const precioMax = document.querySelector('#precioMax');
const btnCarrito = document.querySelector(".carrito_boton");
const templateCarrito = document.querySelector("#template_carrito").content;
const carritoProductos = document.querySelector("#carrito-productos");
const templateFoot = document.querySelector("#template__foot").content;
const fragment = document.createDocumentFragment();

//JSON Y ARRAYS

const URLJSON = './archivo.json';
let viajes = [];
let carrito = {};
const busqueda = [{ id: '', nombre: '', minimo: '', maximo: '', continente: '' }];

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

//DARK-MODE MENU LATERAL

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

//DATOS STORAGE

function obtenerDatos(){
    let tipoDeViajeData = document.getElementById("tipoDeViaje");
    localStorage.setItem(tipoDeViajeData.id, tipoDeViajeData.value);

    let salidaData = document.getElementById("salida");
    localStorage.setItem(salidaData.id, salidaData.value);
    
    let destinoData = document.getElementById("destino");
    localStorage.setItem(destinoData.id, destinoData.value);

    let personasData = document.getElementById("personas");
    localStorage.setItem(personasData.id, personasData.value);

    let claseData = document.getElementById("clase");
    localStorage.setItem(claseData.id, claseData.value);

    let fechaData = document.getElementById("fecha");
    localStorage.setItem(fechaData.id, fechaData.value);

    let fecha2Data = document.getElementById("fecha2");
    localStorage.setItem(fecha2Data.id, fecha2Data.value);
}

function destinoDatos(){
    const arrayDestinos = viajes.map(function(array) {
        return array.destino;
    });

    let destinoData = document.getElementById("destino");
    let salidaData = document.getElementById("salida");
    obtenerDatos()

    if($('#tipoDeViaje').val(), $('#salida').val(), $('#destino').val(), $('#personas').val(), $('#clase').val(), $('#fecha').val(), $('#fecha2').val() === null || $('#tipoDeViaje').val(), $('#salida').val(), $('#destino').val(), $('#personas').val(), $('#clase').val(), $('#fecha').val(), $('#fecha2').val() === '' || arrayDestinos.includes(localStorage.getItem(destinoData.id, destinoData.value)) == false || arrayDestinos.includes(localStorage.getItem(salidaData.id, salidaData.value)) == false ){
        alert("Por favor, completar correctamente el formulario (Poner en mayuscula la primera letra del pais de salida y/o de llegada y no dejar un espacio al final de cada texto)")
    } else{
        window.location.href = "comprar.html";
    }
}

botonViajar.click(destinoDatos);


//BUSQUEDA PERSONALIZADA DE VIAJES (AJAX Y JSON)

$.get(URLJSON, function(data, status){
    console.log(data);
    console.log(status);
    if(status === 'success'){
        viajes = data;
    }
})

function crearTarjetasHTML(filtradas){
    selector.html(``)
    let viajesFiltradas = filtradas;
    for(const viajes of viajesFiltradas){

        //CARTAS DE LOS DESTINOS
        let div1 = document.createElement('div');
        div1.classList.add("card", "cartaViaje", "mb-5");
        div1.id = `${viajes.id}`;
        cabeza.appendChild(div1);

        let img = document.createElement('img');
        img.classList.add("img-fluid", "paisaje__img");
        img.src = `${viajes.img}`;
        
        let h5 = document.createElement('h5');
        h5.classList.add("viajes__h5");
        h5.textContent = `${viajes.destino}`;

        let p = document.createElement('p');
        p.classList.add("viajes__p");
        p.textContent = `${viajes.continente}`;

        let div2 = document.createElement('div');
        div2.classList.add("d-flex", "justify-content-around", "div__2", "container");
        let p2 = document.createElement('p');
        p2.classList.add("cartas-p");
        p2.textContent = 'Tipo de Vuelo:';
        let select = document.createElement('select');
        select.id = 'tipoDeViaje';
        select.name = 'tipoDeViaje';
        select.classList.add("select-carta");
        let option = document.createElement('option');
        option.value = 'Vuelo de ida';
        option.textContent = 'de Ida';
        let option2 = document.createElement('option');
        option2.value = 'Vuelo de ida y vuelta';
        option2.textContent = 'de Ida y Vuelta';
        select.appendChild(option);
        select.appendChild(option2);
        div2.appendChild(p2);
        div2.appendChild(select);

        let hr = document.createElement('hr');
        hr.classList.add("viajes__hr");

        let span = document.createElement('span');
        span.classList.add("viajes__span", "d-flex");
        span.textContent = "A partir de";

        let p3 = document.createElement('p');
        p3.classList.add("viajes__p2");
        p3.textContent = `${viajes.precio}`;

        let button = document.createElement('button');
        button.classList.add("btn", "btn-primary", "boton__viajes", "btn-comprar", "botonComprar", "botonComprar-left");
        button.textContent = "Comprar";
        let dataId = document.createAttribute("data-id");
        dataId.value = `${viajes.id}`;
        button.setAttributeNode(dataId);

        div1.appendChild(img);
        div1.appendChild(h5);
        div1.appendChild(p);
        div1.appendChild(div2);
        div1.appendChild(hr);
        div1.appendChild(span);
        div1.appendChild(p3);
        div1.appendChild(button);
    }   
}


/* FILTROS */
continentes.addEventListener('change', e => {
    busqueda.continente = e.target.value;

    filtrarBusqueda();
});

precioMin.addEventListener('change', e => {
    busqueda.minimo = parseInt(e.target.value);

    filtrarBusqueda();
});

precioMax.addEventListener('change', e => {
    busqueda.maximo = parseInt(e.target.value);

    filtrarBusqueda();
});

function filtrarBusqueda() {
    const resultado = viajes.filter(filtrarContinente).filter(filtrarMinimo).filter(filtrarMaximo);

    crearTarjetasHTML(resultado);
};

function filtrarContinente(viaje) {
    const { continente } = busqueda;
    if (continente) {
        const titulo = document.querySelector('#titulo');
        titulo.textContent = `Filtrado por: ${continente}`;
        return viaje.continente === continente;
    } else {
        titulo.textContent = 'Todos los destinos disponibles';
        return viaje;
    }
};

function filtrarMinimo(viaje) {
    const { minimo } = busqueda;
    if (minimo) {
        return viaje.precio >= minimo;
    } else {
        return viaje;
    }
}

function filtrarMaximo(viaje) {
    const { maximo } = busqueda;
    if (maximo) {
        return viaje.precio <= maximo;
    } else {
        return viaje;
    }
}

//PEQUENIA ANIMACION

$('#vuelos').click( function(e) { 
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $('.busqueda__section').offset().top  
    }, 20);
} );


//CARRITO

//Obtenemos el carrito
document.addEventListener("DOMContentLoaded", () => {

    if (localStorage.getItem("carrito")) {
        carrito = JSON.parse(localStorage.getItem("carrito"))
        mostrarCarrito();
    }

});

/* SLIDE CARRO */
btnCarrito.addEventListener("click", function () {
    document.getElementById("carrito").classList.toggle("active");
});

cabeza.addEventListener("click", e => {
    agregarCarrito(e);
});

carritoProductos.addEventListener("click", e => {
    eventoBtn(e);
});


/* AGREGAR CARRITO */
const agregarCarrito = e => {
    if (e.target.classList.contains("btn-comprar")) {
        setCarrito(e.target.parentElement);
        animacion(btnCarrito);
        Swal.fire({
            icon: "success",
            title: "Producto agregado al carrito",
            toast: true,
            position: "bottom-end",
            timer: 5000,
            timerProgressBar: true,
            showCloseButton: true,
            showConfirmButton: false
        });
    }
    e.stopPropagation();
};

const setCarrito = objeto => {

    const viajar = {
        id: objeto.querySelector(".btn-comprar").dataset.id,
        imagen: objeto.querySelector("img").src,
        destino: objeto.querySelector("h5").textContent,
        vuelo: objeto.querySelector("select").value,
        precio: objeto.querySelectorAll("p")[2].textContent,
        cantidad: 1
    }

    if (carrito.hasOwnProperty(viajar.id)) {
        viajar.cantidad = carrito[viajar.id].cantidad + 1;
    }
    carrito[viajar.id] = { ...viajar };
    mostrarCarrito();

}

const mostrarCarrito = () => {

    carritoProductos.innerHTML = ``;
    Object.values(carrito).forEach(viaje => {
        templateCarrito.querySelector("img").src = viaje.imagen;
        templateCarrito.querySelectorAll("p")[0].textContent = viaje.destino;
        templateCarrito.querySelectorAll("p")[1].textContent = viaje.vuelo;
        templateCarrito.querySelectorAll("span")[0].textContent = viaje.precio;
        templateCarrito.querySelectorAll("span")[1].textContent = viaje.cantidad;

        const clone = templateCarrito.cloneNode(true);
        fragment.appendChild(clone);
    })
    carritoProductos.appendChild(fragment);
    mostrarFoot();

    localStorage.setItem("carrito", JSON.stringify(carrito));
    
}

const mostrarFoot = () => {

    if (Object.keys(carrito).length === 0) {
        carritoProductos.innerHTML = `<p> No tienes productos agregados </p>`;

        return;
    }
    const nPrecio = Object.values(carrito).reduce((acumulador, { cantidad, precio }) => acumulador + cantidad * precio, 0);
    localStorage.setItem('totalCarrito', nPrecio)
    templateFoot.querySelector("span").textContent = nPrecio;

    const clone = templateFoot.cloneNode(true);
    fragment.appendChild(clone);
    carritoProductos.appendChild(fragment);

    /* VACIAR CARRO */
    const btnVaciar = document.getElementById("vaciar-carrito");
    btnVaciar.addEventListener("click", () => {
        carrito = {};
        mostrarCarrito();
    })
}

/* ------------------------------------ */

const eventoBtn = e => {
    e.stopPropagation();
}

/* ANIMACIÓN CARRO DE COMPRAS */
const animacion = carro => {
    $(carro).animate({
        fontSize: "45px"
    }, 500, function () {
        $(carro).animate({
            fontSize: "35px"
        }, 500);
    });
}


//PRIMERA LETRA DEL INPUT EN MAYUSCULA

$('#destino').keyup(function(){
        $(this).val($(this).val().charAt(0).toUpperCase()+$(this).val().substr(1));
});
$('#salida').keyup(function(){
    $(this).val($(this).val().charAt(0).toUpperCase()+$(this).val().substr(1));
});