//Variable ---------------------------------------------------------------------------------
let numPartida = 0;
const intentosMax = 7;
let intentosDisp = intentosMax;

let num_aleatorio;

//Arrays ---------------------------------------------------------------------------------

// const partidas = [];
let palabras=[];
let palabraActual=[];
let arrayLetras=[];
let palabraString;
let pista;

//Constructor ----------------------------------------------
class Letras {
    constructor (letra) {
        this.letra = letra;
        this.estado = false;
    }
};


//mostrar palabra oculta en HTML---------------------------------------------------------------------
function mostarPalabraActual (arrayLetras) {
    for (let i = 0; i < arrayLetras.length; i++) {
        palabraActual.push (new Letras (arrayLetras[i]));
    }        
};

function mostrarPalabraHTML () {
    for (let i = 0; i < palabraActual.length; i++) {
        $('#palabra').append(`<div class='guion'><h4 id=letra-${i}>${palabraActual[i].letra.toUpperCase()}</h4></div>`)
    }
}

//Constructor de objetos -------------------------------------------------------------------

// class Partida {
//     constructor (num, palabra) {
//         this.partida = num;
//         this.palabra = palabra;
//         this.intentosUsados;
//         this.resultado;
//     }
// }

//Taclado Abecedario ---------------------------------------------------------------------
let abc = [
    {letra:'a', estado:false}, {letra:'b', estado:false}, {letra:'c', estado:false}, {letra:'d', estado:false}, {letra:'e', estado:false}, {letra:'f', estado:false}, {letra:'g', estado:false}, {letra:'h', estado:false}, {letra:'i', estado:false},  
    {letra:'j', estado:false}, {letra:'k', estado:false}, {letra:'l', estado:false}, {letra:'m', estado:false}, {letra:'n', estado:false}, {letra:'ñ', estado:false}, {letra:'o', estado:false}, {letra:'p', estado:false}, {letra:'q', estado:false}, 
    {letra:'r', estado:false}, {letra:'s', estado:false}, {letra:'t', estado:false}, {letra:'u', estado:false}, {letra:'v', estado:false}, {letra:'w', estado:false}, {letra:'x', estado:false}, {letra:'y', estado:false}, {letra:'z', estado:false},
];

                
//Llamada JSON ---------------------------------------------------------------------------------
const urlGet = "../../json/ahorcado/words.json"

function iniciarJuego () {
    $.get(urlGet, function (respuesta, estado) {
        if(estado === "success"){
            
            //Iniciar Juego ----------------------------------------------
            palabras = respuesta;
    
                //Elegir palabra aleatoria ----------------------------------------------
            num_aleatorio = Math.floor(Math.random() * palabras.length);
    
            palabraString = palabras[num_aleatorio].word;
    
                //Variables ----------------------------------------------
            pista = palabras[num_aleatorio].hint;
            let nLetras = palabras[num_aleatorio].word.length;
            let primeraLetra = palabras[num_aleatorio].word.charAt(0);
            let ultimaLetra = palabras[num_aleatorio].word.charAt(nLetras - 1);
    
                //Mostrar palabra seleccionada aleatoriamente ----------------------------------------------
                    //Array ----------------------------------------------
            arrayLetras = palabras[num_aleatorio].word.split('');
    
            mostarPalabraActual (arrayLetras);
    
            mostrarPalabraHTML();
    
            //mostrar pista en HTML---------------------------------------------------------------------
            $('#pista').text(`Pista: ${pista}`);
    
            //mostrar cantidad de intentos en HTML ---------------------------------------------------------------------
            $("#intentos").text(`${intentosMax}`);
            
        }
    });
};
iniciarJuego ();
    
    
    //Mostrar palabra ---------------------------------------------------------------------
    function mostrarLetra (arrPalabra, abc) {
        
        for (let i = 0; i <= arrPalabra.length; i+=1){
            if (arrPalabra[i]?.letra.toUpperCase() === abc?.letra.toUpperCase()) {
                arrPalabra[i].estado = true;
                $(`#letra-${i}`).addClass("mostrar");
            }
        }
    };

    //Restar Intento ---------------------------------------------------------------------
    function restarIntento () {
        intentosDisp-=1;
        $("#intentos").text(`${intentosDisp}`)
        $("#horca").attr("src", `../assets/ahorcado/img/horca-${intentosDisp}.png`);
    };

//Resivar letra selecionada ---------------------------------------------------------------------
function revisarLetra (arrPalabra, abc) {
    let encontrar = arrPalabra.find((letras) => letras.letra.toUpperCase() === abc.letra.toUpperCase());
    if (encontrar === undefined) {
        restarIntento();
    }   else {
        mostrarLetra(arrPalabra, abc);
    };
};



//------------------------------------------------------------------------------------------------------------------

    //Ganar Partida ---------------------------------------------------------------------
    function ganar () {

        ventanaEmergenteGanaste = 1;
        $(".palabraCorrecta").text(`${palabraString.toUpperCase()}`);
        $("#ventana-emergente-ganaste").fadeIn(1000);
    };

    //Perder Partida ---------------------------------------------------------------------
    function perder () {

        ventanaEmergentePerdiste = 1;
        $(".palabraCorrecta").text(`${palabraString.toUpperCase()}`);
        $("#ventana-emergente-perdiste").fadeIn(1000);
    };

    //Reiniciar botones del teclado---------------------------------------------------------------------
    function reiniciarBotonesTeclado () {
        for (let i = 1; i <= 27; i++) {
                abc[i-1].estado=false; 
                $(`#c-${i}`).removeClass("cambioColor");  
        }
    };

    //Reiniciar Juego ---------------------------------------------------------------------
    function reiniciarJuego () {
        //Mostrar nueva palabra selecionada ---------------------------------------------------------------------
        num_aleatorio = Math.floor(Math.random() * palabras.length);

        palabraString = palabras[num_aleatorio].word;
        palabraActual=[];
        arrayLetras = palabras[num_aleatorio].word.split('');

        mostarPalabraActual (arrayLetras);

        $('#palabra').html("");

        mostrarPalabraHTML();

        //mostrar pista en HTML---------------------------------------------------------------------
        pista = palabras[num_aleatorio].hint;
        $('#pista').text('Pista:');
        $('#pista').text(`Pista: ${pista}`);

        //Reiniciar contador de intentos---------------------------------------------------------------------
        intentosDisp = intentosMax;
        $("#intentos").text(`${intentosMax}`);
        $("#horca").attr("src", `../assets/ahorcado/img/horca-${intentosMax}.png`);

        //Reiniciar botones del teclado---------------------------------------------------------------------
        reiniciarBotonesTeclado();
    }

    //Resivar si la palabra fue completada ---------------------------------------------------------------------
    function revisarPalabra (arrPalabra) {
        let letrasAcertadas = 0;
        for (let i = 0; i < arrPalabra.length; i+=1) {
            if (arrPalabra[i].estado === true) {
                letrasAcertadas+=1;
            } 
        }
        if (arrPalabra.length === letrasAcertadas) {
            ganar();
            reiniciarJuego();
        }
    };


//Resivar Estado de la Partida ---------------------------------------------------------------------
function revisarEstado (arrPalabra) {
    if (intentosDisp > 0) {
        revisarPalabra(arrPalabra);
    } else {
        perder();
        reiniciarJuego();
    }
};

//Eventos del teclado al seleccionar letra ----------------------------------------------
function botonesTeclado () {
    for (let i = 1; i <= 27; i++) {
        $(`#c-${i}`).click( () => {if(abc[i-1].estado === false) {
        
            abc[i-1].estado=true; 
            $(`#c-${i}`).addClass("cambioColor"); 
            
            revisarLetra(palabraActual, abc[i-1]);
            revisarEstado(palabraActual); 
        }}) 
    }
};

botonesTeclado();


//Evento del boton Restart -----------------------------------------------------------------
$("#boton-restart").click(() => {reiniciarJuego()});


