const somar = (num1, num2) => {
    return num1 + num2
}
let soma = somar(10, 2);
console.log("Soma:", soma);

const subtrair = (num1, num2) => num1 - num2;
let subt = subtrair(10, 2);
console.log("Subtração:", subt);

const quantidadeLetras = nome => nome.length;
let qtd = quantidadeLetras("Gustavo");
console.log(qtd);