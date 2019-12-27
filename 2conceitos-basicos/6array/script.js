let carros = ["BMW", "Mercedes Benz", "Ferrari"];

console.log(carros);

let nomes = new Array();
nomes[0] = "Gustavo";
nomes[1] = "Lucas";
nomes[2] = "Silva";
nomes[3] = function () {
    console.log("testando funcao")
};

nomes[3]();

let ingredientes = [
    ["Leite", "Chocolate em pó", "Fermento"],
    ["Creme de leite", "Leite condesado"],
    ["Chocolate granulado", "Coco ralado"]
];

console.log(ingredientes[0][1]);