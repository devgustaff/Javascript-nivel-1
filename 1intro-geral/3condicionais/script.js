var hora = 18;

if (hora < 12) {
    console.log("Bom dia");
} else if (hora >= 12 && hora <= 18) {
    console.log("Boa tarde");
} else if (hora <= 23) {
    console.log("Boa noite");
}

// OR = ||
if (hora == 18 || hora == 8) {
    console.log("Você está na hora do rush");
}