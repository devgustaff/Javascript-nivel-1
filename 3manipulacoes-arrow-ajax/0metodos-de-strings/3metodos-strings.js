let nome = "Gustavo Silva";
let texto = "Eu gosto de carros";

// método replace - substitui uma parte da string por outra string
let resultado = nome.replace("Silva", "Goncalves");
console.log(resultado);

resultado = texto.replace("carros", "mostos");
console.log(resultado);

// método toUpperCase - retorna a string em maiúscula
resultado = texto.toUpperCase();
console.log(resultado);

// método toLowerCase - retorna a string em minúscula
resultado = texto.toLowerCase();
console.log(resultado);

// método charAt() retorna o caracter na posicão passado por parâmetro
resultado = texto.charAt(0);
console.log(resultado);

resultado = nome.charAt(2);
console.log(resultado);
console.log(nome[2]);

// método split() - retorna um array
resultado = texto.split(" ");
console.log(resultado);
