//---------------------------animaciones

$("#cuadro-ppt").on("mouseenter", () => {$("#cuadro-ppt").animate({
    "border-radius": "550px",
}, {duration: 200}); $("#icon-ppt").fadeOut(0).attr("src", "assets/img/ppt-logo.png").addClass("logo-ppt").fadeIn(300)});
$("#cuadro-ppt").on("mouseleave", () => {$("#cuadro-ppt").animate({
    "border-radius": "0px",
}, {duration: 200}); $("#icon-ppt").fadeOut(0).attr("src", "assets/img/ppt-icon.png").removeClass("logo-ppt").fadeIn(300)});


$("#cuadro-ahorcado").on("mouseenter", () => {$("#cuadro-ahorcado").animate({
    "border-radius": "550px",
}, {duration: 200}); $("#icon-ahorcado").fadeOut(0).attr("src", "assets/img/ahorcado-logo.png").addClass("logo-ahorcado").fadeIn(300)});
$("#cuadro-ahorcado").on("mouseleave", () => {$("#cuadro-ahorcado").animate({
    "border-radius": "0px",
}, {duration: 200}); $("#icon-ahorcado").fadeOut(0).attr("src", "assets/img/ahorcado-icon.png").removeClass("logo-ahorcado").fadeIn(300)});