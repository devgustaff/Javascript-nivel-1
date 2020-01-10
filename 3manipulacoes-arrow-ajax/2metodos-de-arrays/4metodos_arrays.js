let numeros = [12, 50, 6, 18, 23];
let res = [];

res = numeros.find(function (item) {
    return (item == 23) ? true : false;
});
console.log(res);

res = numeros.findIndex(function (item) {
    return (item == 23) ? true : false;
});
console.log(res);

let carros = [
    { id: 1, nome: "bmw", modelo: "320i" },
    { id: 2, nome: "audi", modelo: "rs7" },
    { id: 3, nome: "mercedes benz", modelo: "amg" }
];

res = carros.find(function (item) {
    return (item.nome == "bmw") ? true : false;
});
console.log(res);
