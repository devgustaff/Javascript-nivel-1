// rest
const numbers = (...number) => number;
console.log(numbers(5, 6, 8, 1));

// operador rest como parâmetro
const add = (names, ...newNames) => [...names, ...newNames]; // spread

let names = ["Gustavo", "Lucas"];
let others = add(names, "Guilherme", "Geralda");
console.log(others);