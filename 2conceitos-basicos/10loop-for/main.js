let carros = ["BMW", "Mercedes Benz", "Audi", "Kia"];
let listaElement = document.getElementById("lista");
let html = "";

for (let i = 0; i < carros.length; i++) {
    html += "<li>" + carros[i] + "</li>";
}
listaElement.innerHTML = html