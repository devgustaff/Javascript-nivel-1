let nome = "Gustavo Silva";

// propriedade length - retorna a quantidade de caracteres de uma string
let qtd = nome.length;
console.log(qtd);

// método indexOf() - retorna a posição que uma string começa
// se não encontrar o resultado é -1
let procurar = nome.indexOf("Silva");
console.log(procurar);

if (nome.indexOf("Gu") > -1) {
    console.log("Achou");
} else {
    console.log("Não achou");
}
