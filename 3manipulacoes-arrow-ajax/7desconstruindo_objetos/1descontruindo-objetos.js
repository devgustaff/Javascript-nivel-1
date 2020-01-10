const pessoa = {
    nome: "Gustavo",
    sobrenome: "Silva",
    idade: 23,
    social: {
        faceBook: "silva",
        instagram: "gustaff"
    },
    nomeCompleto: function () {
        return `${this.nome} ${this.sobrenome}`;
    }
}

let { nome, sobrenome, idade } = pessoa;
console.log(nome);
console.log(sobrenome);
console.log(idade);

