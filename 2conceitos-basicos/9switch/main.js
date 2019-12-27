let inputElement = document.getElementById("dia");
let diaSemana = "";

inputElement.addEventListener("keyup", function () {
    let dia = parseInt(inputElement.value);

    switch (dia) {
        case 1:
            diaSemana = "Domingo, final de semana";
            break;
        case 2:
            diaSemana = "Segunda-Feira";
            break;
        case 3:
            diaSemana = "Terça-Feira";
            break;
        case 4:
            diaSemana = "Quarta-Feira";
            break;
        case 5:
            diaSemana = "Quinta-Feira";
            break;
        case 6:
            diaSemana = "Sexta-Feira";
            break;
        case 7:
            diaSemana = "Sábado, final de semana";
            break;
        default:
            diaSemana = "Não existe.";
            break;
    }

    document.getElementById("resultado").innerHTML = diaSemana;
});