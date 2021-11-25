//Ventana Emergente ---------------------------------------------------------------------------------

    //Variable ---------------------------------------------------------------------------------

let ventanaEmergente = 1;
let click = 0;
let opcion_jugador;

    //Eventos ---------------------------------------------------------------------------------

$("#boton-salir").click( () => {if(ventanaEmergente == 1){ventanaEmergente=0; localStorage.setItem("Estado_Ventana", ventanaEmergente); $("#ventana-emergente").addClass("cierre-ventana")}});

$("#boton-piedra").on("mouseenter", () => {$("#boton-piedra").attr("src", "assets/ventana-emergente/piedra-hover.png");});
$("#boton-piedra").on("mouseleave", () => {$("#boton-piedra").attr("src", "assets/ventana-emergente/piedra.png");});
$("#boton-piedra").click( () => {if(ventanaEmergente == 1){ventanaEmergente=0; localStorage.setItem("Estado_Ventana", ventanaEmergente); $("#ventana-emergente").addClass("cierre-ventana")}; opcion_jugador = "Piedra"; click=1; juego();});

$("#boton-papel").on("mouseenter", () => {$("#boton-papel").attr("src", "assets/ventana-emergente/papel-hover.png");});
$("#boton-papel").on("mouseleave", () => {$("#boton-papel").attr("src", "assets/ventana-emergente/papel.png");});
$("#boton-papel").click( () => {if(ventanaEmergente == 1){ventanaEmergente=0; localStorage.setItem("Estado_Ventana", ventanaEmergente); $("#ventana-emergente").addClass("cierre-ventana")}; opcion_jugador = "Papel"; click=1; juego();});

$("#boton-tijera").on("mouseenter", () => {$("#boton-tijera").attr("src", "assets/ventana-emergente/tijera-hover.png");});
$("#boton-tijera").on("mouseleave", () => {$("#boton-tijera").attr("src", "assets/ventana-emergente/tijera.png");});
$("#boton-tijera").click( () => {if(ventanaEmergente == 1){ventanaEmergente=0; localStorage.setItem("Estado_Ventana", ventanaEmergente); $("#ventana-emergente").addClass("cierre-ventana")}; opcion_jugador = "Tijera"; click=1; juego();});
