let numeros = [3, 5, 1];
let outros = [...numeros, 2, 1];
console.log(outros);

const ex = (a, b, c) => `${a}, ${b}, ${c}`;
console.log(ex(...numeros));

// spread em objetos
let extras = {
    bancos: "couro",
    teto: "solar"
};

const carros = {
    nome: "bmw",
    cor: "prata",
    ...extras
}
console.log(carros);