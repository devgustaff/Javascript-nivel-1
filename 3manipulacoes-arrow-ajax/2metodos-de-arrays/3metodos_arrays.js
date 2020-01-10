let numbers = [45, 4, 3, 16, 25];
let lista = [];

// map();
lista = numbers.map(function (element) {
    return element * 2;
});
console.log(lista);

// filter() - filtra os elemetos e retona true 
lista = numbers.filter(function (item) {
    return (item < 20) ? true : false;
});
console.log(lista);

// every() - verifica se todos os elemento são true
lista = numbers.every(function (item) {
    return (item > 20) ? true : false;
});
console.log(lista);

// some() - verifica se alguns elemento são true
lista = numbers.some(function (item) {
    return (item > 3) ? true : false;
});
console.log(lista);
