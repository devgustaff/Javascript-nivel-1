const pessoa = {
    nome: "Gustavo",
    sobrenome: "Silva",
    idade: 23,
    social: {
        faceBook: "silva",
        instagram: {
            url: "@gustaff",
            seguidores: 1000
        }
    }
}

function info({ nome, sobrenome, social: { instagram: { url } } }) {
    return `${nome} ${sobrenome} - siga: ${url}`;
}
console.log(info(pessoa));

//let {instagram} = pessoa.social;
let { nome, idade, social: { faceBook, instagram: { url, seguidores } } } = pessoa
console.log(nome);
console.log(idade);
console.log(faceBook);
console.log(url);
console.log(seguidores);

