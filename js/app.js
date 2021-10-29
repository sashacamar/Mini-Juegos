let jugador1 = prompt("PRIEDRA / PAPEL / TIJERA" + "\n \nIngresa tu nombre.");
let opcion_jugador1;

let max_partidas = prompt("Cuentas partidas deseas jugar?");
let numPartida;

let opcion_pc;





document.write(`<div class='cuadro_nombre'> 
<h1> Jugador: <strong>${jugador1}</strong> </h1> 
</div>`);

class Partidas {
    constructor (usuario, numPartida, eligio, pcAtaca) {
        this.usuario = usuario;
        this.numPartida = numPartida;
        this.eligio = eligio;
        this.pcAtaca = pcAtaca;
        //this.resultado = resultado;
    }
    mostrarResultado  = function() {
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
    imprimirPartida = function() {
        this.mostrarResultado();
    
        document.write(`<div class='cuadro'> 
                <h1> <strong> Partida ${this.numPartida} </strong> </h1>
                <h1> Has escogido <strong>${this.eligio}</strong> </h1> 
                <h1> PC: Te ataca con <strong>${this.pcAtaca}</strong> </h1> 
                <img class="imgResultado" src=assets/img/${this.resultado}.png>
                </div>`);
    }
    
}


function pcAleatorio(max) {
    let num_aleatorio = Math.floor(Math.random() * max);

    switch (num_aleatorio) {
        case 0:
            opcion_pc = "Piedra";
            break;
        case 1:
            opcion_pc = "Papel";
            break;
        case 2:
            opcion_pc = "Tijera";
            break;
        default:
            opcion_pc = "Hubo un error";
    }
  }







for (let i = 0; i < max_partidas; i+=1) {
    let opcion1 = prompt(`Partida ${i} \nEscoge! \n \n1. Piedra \n2. Papel \n3. Tijera`);
    
    let mayus = opcion1.toUpperCase();

    numPartida = i + 1;

    let partida = {};

    switch (mayus) {
        case '1':
        case 'PIEDRA':
            opcion_jugador1 = "Piedra";
            break;

        case '2':
        case 'PAPEL':
            opcion_jugador1 = "Papel";
            break;

        case '3':
        case 'TIJERA':
            opcion_jugador1 = "Tijera";
            break;

        default:
            opcion_jugador1 = "No has elegido ninguna opcion";
    }

    pcAleatorio(3);
    partida[i] = new Partidas (jugador1, numPartida, opcion_jugador1, opcion_pc);
    partida[i].imprimirPartida();

    console.table(partida[i]);

}









