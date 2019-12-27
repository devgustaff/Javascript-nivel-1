function apertouTecla(e) {
    console.log(e.keyCode);
}

function soltouTecla(e) {
    if (e.keyCode == 13 && e.ctrlKey == true) {
        let texto = document.getElementById("campo").value;
        console.log(texto);
    }
}

function pressionouTecla() {
    console.log("Tecla pressionada");
}