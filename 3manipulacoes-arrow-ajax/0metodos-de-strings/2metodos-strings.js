let nome = "Gustavo Silva";

// método slice - retorna uma parte de uma string com base na posição inicial e final
console.log(nome.slice(8, 11));
console.log(nome.slice(-8));
console.log(nome.slice(0));

// métode substring - similar ao slice com uma única difença, não pode extrair comecando do final
// com números negativos
console.log(nome.substring(8, 11));
console.log(nome.substring(0));

// método substr - retorna uma parte da string com base na posição inicial e a quantidade de caracter
console.log(nome.substr(0, 3));
console.log(nome.substr(8, 3));
console.log(nome.substr(-11, 2));