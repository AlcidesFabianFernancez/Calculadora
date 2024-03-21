const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const botonesnumeros = document.querySelectorAll('.numero');
const botonesoperadores = document.querySelectorAll('.operador');


const display = new Display(displayValorAnterior, displayValorActual);

botonesnumeros.forEach(boton => { //por cada evento de click de los botones cargamos su numero
    boton.addEventListener('click', () =>  display.agregarNumero(boton.innerHTML)); //boton.innerHTML es el numero que muestar el boton
    
});

botonesoperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value))
});
