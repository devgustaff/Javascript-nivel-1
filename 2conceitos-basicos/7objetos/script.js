let carro = {
    nome: "BMW",
    modelo: "320i",
    cor: "preta",
    motor: 2.0,
    ligar: false,
    ligarCarro: function () {
        if (!this.ligar) {
            this.ligar = true;
            console.log("VRUM, VRUM");
        }
    },
    desligarCarro: function () {
        if (this.ligar) {
            this.ligar = false;
            console.log("...");
        }
    },
    acelerar: function () {
        if (this.ligar) {
            console.log("VRUMMMMMMMMMMM...");
        } else {
            console.log("Ligue o carro, para acelerar");
        }
    }
};

console.log("Nome:", carro.nome);
console.log("Modelo:", carro.modelo);
console.log("Cor:", carro.cor);
console.log("Motor:", carro.motor);

carro.ligarCarro();
carro.acelerar();
carro.desligarCarro();
carro.acelerar();