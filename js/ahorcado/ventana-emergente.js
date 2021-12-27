//Ventana Emergente ---------------------------------------------------------------------------------

    //Variable ---------------------------------------------------------------------------------

    let ventanaEmergentePerdiste = 0;
    let ventanaEmergenteGanaste = 0;
    
        //Eventos ---------------------------------------------------------------------------------
    
    $(".boton-salir").click( () => {if(ventanaEmergenteGanaste == 1){ventanaEmergenteGanaste=0; $("#ventana-emergente-ganaste").fadeOut("fast")}});
    $(".boton-salir").click( () => {if(ventanaEmergentePerdiste == 1){ventanaEmergentePerdiste=0; $("#ventana-emergente-perdiste").fadeOut("fast")}});
