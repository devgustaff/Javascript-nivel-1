// var - HOISTING ou seja escopo global
// let - escopo local ou seja onde foi declarado
// const - variável de valor constante

var nome = "Gustavo";
const sobrenome = "Silva";

if (nome == "Gustavo") {
    let idade = 23;
    console.log(idade);
}
console.log(idade); // undefined