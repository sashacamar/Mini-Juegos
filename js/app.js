//Array ---------------------------------------------------------------------------------

const partidas = [];

//Variable ---------------------------------------------------------------------------------

let numPartida = 0;
let puntaje_vos = document.querySelector("#puntaje-vos");  
let puntaje_pc = document.querySelector("#puntaje-pc");  



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
    
        let vos = document.getElementById("vos");
        let pc = document.getElementById("pc");
        let resultadoPartida = document.getElementById("resultadoPartida");

        vos.src = `assets/img/${this.eligio}_vos.png`;
        pc.src = `assets/img/${this.pcAtaca}_pc.png`;
        resultadoPartida.src = `assets/img/${this.resultado}.png`;

    }

    //LocalStorage del Array de partidas ---------------------------------------------------------------------------------

    guardarLocal(clave, valor) {
        localStorage.setItem(clave, valor) 
    };

    //Contador de puntos ---------------------------------------------------------------------------------

    
    imprimirPuntos() {
    
        if (this.resultado == "has_ganado") {
            puntaje_vos.innerText = parseInt(puntaje_vos.innerText) + 1;
        } else if (this.resultado == "perdiste") {
            puntaje_pc.innerText = parseInt(puntaje_pc.innerText) + 1;
        }
    
    }
    
}


    
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
        
        localStorage.setItem("Puntaje_Vos", puntaje_vos.innerText);
        localStorage.setItem("Puntaje_Pc", puntaje_pc.innerText);


        
        
            //Consola -------------------------------------------------------------------------------------
        const tabla_partidas = JSON.parse(localStorage.getItem("partidas"));
        console.table(tabla_partidas[partidas.length-1]);
    }

}



//Replay --------------------------------------------------------------------------------
let boton_replay = document.querySelector("#boton-replay");  
boton_replay.addEventListener("click", () => {if(ventanaEmergente == 0){ventanaEmergente=1; localStorage.setItem("Estado_Ventana", ventanaEmergente); ventana.classList.remove("cierre-ventana")}});




//Restart --------------------------------------------------------------------------------
let boton_restart = document.querySelector("#boton-restart");    
boton_restart.addEventListener("click", () => {if(ventanaEmergente == 0){ventanaEmergente=1; localStorage.setItem("Estado_Ventana", ventanaEmergente); ventana.classList.remove("cierre-ventana")}; numPartida=0;  puntaje_vos.innerText = 0; puntaje_pc.innerText = 0; partidas.length=0;});




//localStorage --------------------------------------------------------------------------------

let puntos_guardado_vos = localStorage.getItem("Puntaje_Vos");
let puntos_guardado_pc = localStorage.getItem("Puntaje_Pc");


function EstadoPuntos() {
    if (parseInt(puntos_guardado_vos)>0 || parseInt(puntos_guardado_pc)>0) {
        puntaje_vos.innerText = puntos_guardado_vos;
        puntaje_pc.innerText = puntos_guardado_pc;
        
    }
}

EstadoPuntos();




let estado_guardado_ventana = localStorage.getItem("Estado_Ventana");

function EstadoVentana() {
    if (estado_guardado_ventana == 0) {
        ventanaEmergente = 0;
        ventana.classList.add("cierre-ventana");
    }
}

EstadoVentana();

