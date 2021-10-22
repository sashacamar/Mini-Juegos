let jugador1 = prompt("PRIEDRA / PAPEL / TIJERA" + "\n \nIngresa tu nombre.");
let opcion1 = prompt("Escoge!" + "\n \n1. Piedra \n2. Papel \n3. Tijera");
let opcion_jugador1;


if (opcion1 != 'ESC') {
    let mayus = opcion1.toUpperCase();

    switch (mayus) {
        case '1':
        case 'PIEDRA':
            opcion_jugador1 = 'Piedra';
            document.write(`<div class='cuadro'> <h1> Jugador: <strong>${jugador1}</strong> </h1> <h1> Ha escogido <strong>${opcion_jugador1}</strong> </div>`);
            break;

        case '2':
        case 'PAPEL':
            opcion_jugador1 = 'Papel';
            document.write(`<div class='cuadro'> <h1> Jugador: <strong>${jugador1}</strong> </h1> <h1> Ha escogido <strong>${opcion_jugador1}</strong> </div>`);
            break;

        case '3':
        case 'TIJERA':
            opcion_jugador1 = 'Tijera';
            document.write(`<div class='cuadro'> <h1> Jugador: <strong>${jugador1}</strong> </h1> <h1> Ha escogido <strong>${opcion_jugador1}</strong> </div>`);
            break;

        default:
            document.write(`<div class='cuadro'> <h1> Jugador: <strong>${jugador1}</strong> </h1> <h1> No ha elegido ninguna opcion</strong> </div>`);

    }
}



