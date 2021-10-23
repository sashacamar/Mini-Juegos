let jugador1 = prompt("PRIEDRA / PAPEL / TIJERA" + "\n \nIngresa tu nombre.");
let opcion_jugador1;

let max_jugadas = prompt("Cuentas partidas deseas jugar?");

let opcion_pc;



document.write(`<div class='cuadro_nombre'> 
<h1> Jugador: <strong>${jugador1}</strong> </h1> 
</div>`);


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

for (let i = 1; i <= max_jugadas; i+=1) {
    let opcion1 = prompt("Escoge!" + "\n \n1. Piedra \n2. Papel \n3. Tijera");
    
    let mayus = opcion1.toUpperCase();

    switch (mayus) {
        case '1':
        case 'PIEDRA':
            opcion_jugador1 = "Piedra";
            pcAleatorio(3);
            document.write(`<div class='cuadro'> 
            <h1> <strong> Jugada ${i} </strong> </h1>
            <h1> Has escogido <strong>${opcion_jugador1}</strong> </h1> 
            <h1> PC: Te ataca con <strong>${opcion_pc}</strong> </h1> 
            </div>`);
            break;

        case '2':
        case 'PAPEL':
            opcion_jugador1 = "Papel";
            pcAleatorio(3);
            document.write(`<div class='cuadro'>
            <h1> <strong> Jugada ${i} </strong> </h1>
            <h1> Has escogido <strong>${opcion_jugador1}</strong> </h1> 
            <h1> PC: Te ataca con <strong>${opcion_pc}</strong> </h1> 
            </div>`);
            break;

        case '3':
        case 'TIJERA':
            opcion_jugador1 = "Tijera";
            pcAleatorio(3);
            document.write(`<div class='cuadro'> 
            <h1> <strong> Jugada ${i} </strong> </h1>
            <h1> Has escogido <strong>${opcion_jugador1}</strong> </h1> 
            <h1> PC: Te ataca con <strong>${opcion_pc}</strong> </h1> 
            </div>`);
            break;

        default:
            pcAleatorio(3);
            document.write(`<div class='cuadro'> 
            <h1> <strong> Jugada ${i} </strong> </h1>
            <h1> No has elegido ninguna opcion</strong> </h1> 
            <h1> PC: Te ataca con <strong>${opcion_pc}</strong> </h1> 
            </div>`);

    }

}


