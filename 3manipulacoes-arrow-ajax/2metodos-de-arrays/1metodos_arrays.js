let carros = ["bmw", "audi", "mercedes benz"];
console.log(carros);

// toString - converte um array para string separado por vírgula
console.log(carros.toString());

// join -  transforma em um string separado por qualquer caracter
console.log(carros.join("/"));
console.log(carros.join("-"));

// indexOf() - procura um elemento expecífico e retorna a posição
console.log(carros.indexOf("audi"));
console.log(carros.indexOf("bmw"));

// pop() - remove o ultimo elemento do array
carros.pop();
console.log(carros);

// shift() - remove o primeiro elemento do array
carros.shift();
console.log(carros);

// push() - adiciona um elemento novo no final do array
carros.push("ford");
console.log(carros);

// unshift() - adiciona um novo lemento no início do array
carros.unshift("kia");
console.log(carros);
