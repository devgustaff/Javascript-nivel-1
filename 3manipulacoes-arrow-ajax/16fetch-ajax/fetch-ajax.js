/*const params = {
    method: "POST",
    body: JSON.stringify({
        nome: "Gustavo",
        idade: 23
    })
};*/

fetch("https://alunos.b7web.com.br/api/ping")
    .then(r => r.json())
    .then(json => console.log(json));