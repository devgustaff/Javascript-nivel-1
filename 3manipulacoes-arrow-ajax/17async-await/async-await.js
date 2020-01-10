const req = async () => {
    let res = await fetch("https://alunos.b7web.com.br/api/ping");
    let json = await res.json();

    console.log(json);
}
req();
console.log("Esperando");