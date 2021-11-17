//Ventana Emergente ---------------------------------------------------------------------------------

let ventana = document.querySelector("#ventana-emergente");
let salir = document.querySelector("#boton-salir");
let boton_piedra = document.querySelector("#boton-piedra");
let boton_papel = document.querySelector("#boton-papel");
let boton_tijera = document.querySelector("#boton-tijera");

let click = 0;
let opcion_jugador;

salir.addEventListener("click", () => {ventana.classList.add("cierre-ventana")});


boton_piedra.addEventListener("mouseenter", () => {boton_piedra.src = "assets/ventana-emergente/piedra-hover.png"});
boton_piedra.addEventListener("mouseleave", () => {boton_piedra.src = "assets/ventana-emergente/piedra.png"});
boton_piedra.addEventListener("click", () => {ventana.classList.add("cierre-ventana"); opcion_jugador = "Piedra"; click=1; juego();});

boton_papel.addEventListener("mouseenter", () => {boton_papel.src = "assets/ventana-emergente/papel-hover.png"});
boton_papel.addEventListener("mouseleave", () => {boton_papel.src = "assets/ventana-emergente/papel.png"});
boton_papel.addEventListener("click", () => {ventana.classList.add("cierre-ventana"); opcion_jugador = "Papel"; click=1; juego();});

boton_tijera.addEventListener("mouseenter", () => {boton_tijera.src = "assets/ventana-emergente/tijera-hover.png"});
boton_tijera.addEventListener("mouseleave", () => {boton_tijera.src = "assets/ventana-emergente/tijera.png"});
boton_tijera.addEventListener("click", () => {ventana.classList.add("cierre-ventana"); opcion_jugador = "Tijera"; click=1; juego();});