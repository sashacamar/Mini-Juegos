//Variable ---------------------------------------------------------------------------------

let numPartida = 0;

//Array ---------------------------------------------------------------------------------

const partidas = [];

//Constructor de objetos -------------------------------------------------------------------

class Partida {
    constructor (num, eligio) {
        this.partida = num;
        this.eligio = eligio;
        this.pcAtaca;
        this.resultado;
    }

    //Metodos del objeto ---------------------------------------------------------------------
    pcAleatorio(max) {
        let num_aleatorio = Math.floor(Math.random() * max);
    
        switch (num_aleatorio) {
            case 0:
                this.pcAtaca = "Piedra";
                break;
            case 1:
                this.pcAtaca = "Papel";
                break;
            case 2:
                this.pcAtaca = "Tijera";
                break;
            default:
                this.pcAtaca = "Hubo un error";
        }
        }
    

    calcularResultado() {
        if (this.eligio == "Piedra") {
            if(this.pcAtaca == "Papel"){
                this.resultado = "perdiste";
            }else if (this.pcAtaca == "Tijera"){
                this.resultado = "has_ganado";
            } else {
                this.resultado = "empate";
            }
        }
    
        if (this.eligio == "Papel") {
            if(this.pcAtaca == "Tijera"){
                this.resultado = "perdiste";
            }else if (this.pcAtaca == "Piedra"){
                this.resultado = "has_ganado";
            } else {
                this.resultado = "empate";
            }
        }
    
        if (this.eligio == "Tijera") {
            if(this.pcAtaca == "Piedra"){
                this.resultado = "perdiste";
            }else if (this.pcAtaca == "Papel"){
                this.resultado = "has_ganado";
            } else {
                this.resultado = "empate";
            }
        }
    
        if (this.eligio == "No has elegido ninguna opcion") {
    
                this.resultado = "perdiste";
    
        }
    }


    imprimirPartida() {
        this.calcularResultado();
    
        $("#vos").attr("src", `assets/img/${this.eligio}_vos.png`);
        $("#pc").attr("src", `assets/img/${this.pcAtaca}_pc.png`);
        $("#resultadoPartida").attr("src", `assets/img/${this.resultado}.png`);

        $("#resultadoPartida").hide().delay(250).fadeIn("fast");

    }

    
    imprimirPuntos() {
        
        if (this.resultado == "has_ganado") {
            $("#puntaje-vos").html(`${parseInt($("#puntaje-vos").html()) + 1}`);
        } else if (this.resultado == "perdiste") {
            $("#puntaje-pc").html(`${parseInt($("#puntaje-pc").html()) + 1}`);
        }

        $("#puntaje-vos").hide().delay(250).fadeIn("fast");
        $("#puntaje-pc").hide().delay(250).fadeIn("fast");
        
    }

    //LocalStorage del Array de partidas ---------------------------------------------------------------------------------

    guardarLocal(clave, valor) {
        localStorage.setItem(clave, valor) 
    };
    
}

//Funcion Juego ---------------------------------------------------------------------------------
    
function juego() {
    if (click == 1) {
        click = 0;
        //Juego --------------------------------------------------------------------------------
        
        numPartida++;
        
        //Crear Objeto ---------------------------------------------------------------------------------
        
        partidas.push(new Partida (numPartida, opcion_jugador));
        
        //llamando Metodos del objeto ------------------------------------------------------------------
        
        partidas[partidas.length-1].pcAleatorio(3);
        partidas[partidas.length-1].imprimirPartida();
        partidas[partidas.length-1].imprimirPuntos();
        partidas[partidas.length-1].guardarLocal ("partidas", JSON.stringify(partidas));

        //localStorage --------------------------------------------------------------------------------
        
        localStorage.setItem("Puntaje_Vos", $("#puntaje-vos").html());
        localStorage.setItem("Puntaje_Pc", $("#puntaje-pc").html());


        //Consola -------------------------------------------------------------------------------------
        const tabla_partidas = JSON.parse(localStorage.getItem("partidas"));
        console.table(tabla_partidas[partidas.length-1]);
    }

}


//Replay --------------------------------------------------------------------------------

$("#boton-replay").click( () => {if(ventanaEmergente == 0){ventanaEmergente=1; localStorage.setItem("Estado_Ventana", ventanaEmergente); $("#ventana-emergente").fadeIn("fast")}});

//Restart --------------------------------------------------------------------------------

let boton_restart = document.querySelector("#boton-restart");    
$("#boton-restart").click( () => {if(ventanaEmergente == 0){ventanaEmergente=1; localStorage.setItem("Estado_Ventana", ventanaEmergente); $("#ventana-emergente").fadeIn("fast")}; numPartida=0;  $("#puntaje-vos").html("0"); $("#puntaje-pc").html("0"); partidas.length=0;});


//localStorage --------------------------------------------------------------------------------

    //Estado de Puntos ---------------------------------------------------------------------------------

let puntos_guardado_vos = localStorage.getItem("Puntaje_Vos");
let puntos_guardado_pc = localStorage.getItem("Puntaje_Pc");

function EstadoPuntos() {
    if (parseInt(puntos_guardado_vos)>0 || parseInt(puntos_guardado_pc)>0) {
        $("#puntaje-vos").html(puntos_guardado_vos);
        $("#puntaje-pc").html(puntos_guardado_pc);
        
    }
}

EstadoPuntos();

    //Estado Ventana Emergente ---------------------------------------------------------------------------------

let estado_guardado_ventana = localStorage.getItem("Estado_Ventana");

function EstadoVentana() {
    if (estado_guardado_ventana == 0) {
        ventanaEmergente = 0;
        $("#ventana-emergente").fadeOut("fast");
    }
}

EstadoVentana();

