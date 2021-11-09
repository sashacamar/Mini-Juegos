//Array ---------------------------------------------------------------------------------

const partidas = [];

//Constructor de objetos -------------------------------------------------------------------

class Partida {
    constructor (usuario, eligio) {
        this.usuario = usuario;
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
    
}


//Juego ---------------------------------------------------------------------------------
    
    //Variables ---------------------------------------------------------------------------------

let jugador1 = prompt("PRIEDRA / PAPEL / TIJERA" + "\n \nIngresa tu nombre.");
let opcion_jugador;

let opcion = prompt(`${jugador1} Escoge! \n \n1. Piedra \n2. Papel \n3. Tijera`);

let mayus = opcion.toUpperCase();
    
    //Condicional ---------------------------------------------------------------------------------

switch (mayus) {
    case '1':
    case 'PIEDRA':
        opcion_jugador = "Piedra";
        break;

    case '2':
    case 'PAPEL':
        opcion_jugador = "Papel";
        break;

    case '3':
    case 'TIJERA':
        opcion_jugador = "Tijera";
        break;

    default:
        opcion_jugador = "No has elegido ninguna opcion";
}


    //Crear Objeto ---------------------------------------------------------------------------------

partidas.push(new Partida (jugador1, opcion_jugador));

    //llamando Metodos del objeto ------------------------------------------------------------------

partidas[0].pcAleatorio(3);
partidas[0].imprimirPartida();


    //Consola -------------------------------------------------------------------------------------

console.table(partidas[0]);











