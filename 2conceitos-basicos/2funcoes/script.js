function alterar() {
    document.getElementById("titulo").innerHTML = "Titulo alterado";
    document.getElementById("campo1").value = "valor do campo";
}

alterar();

// funções com parâmetros
function somar(a, b) {
    let soma = a + b;
    document.getElementById("campo2").value = soma;
}

somar(10, 5);

// funções com retorno
function mostrarNome(nome) {
    return nome;
}
console.log(mostrarNome("Gustavo"));