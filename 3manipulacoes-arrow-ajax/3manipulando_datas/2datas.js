const data = new Date();

// obtendo o ano atual
let ano = data.getFullYear();
console.log("Ano atual:", ano);

// obtendo o mês atual
let mes = data.getMonth();
console.log("Mês atual:", mes);

// obtendo o dia da semana 0 a 6
const diaSemana = function (dia) {
    return {
        0: "Domingo",
        1: "Segunda",
        2: "Terça",
        3: "Quarta",
        4: "Quinta",
        5: "Sexta",
        6: "Sábado",
    }[dia ? dia : ""]
}
console.log("Dia semana:", diaSemana(data.getDay()));

// obtendo o dia do mês
let diaMes = data.getDate();
console.log("Dia mês:", diaMes);

// obtendo os minutos
let minutos = data.getMinutes();
console.log("Minutos:", minutos);

// obtendo os segundos
let segundos = data.getSeconds();
console.log("Segundos:", segundos);
