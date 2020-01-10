const carros = ["BMW", "Audi", "Mercedes Benz"];

const pessoa = {
    nome: "Gustavo",
    idade: 23
};

// cada elemento de um array/objeto se tonar um outro array dentro do array principal
console.log(Object.entries(carros));

console.log(Object.entries(pessoa));