const fazer = idade => {
    return new Promise((resolve, reject) => {
        if (idade >= 18) {
            setTimeout(() => {
                resolve("Maior de idade");
            }, 2000);
        } else {
            reject("Menor de idade");
        }
    });
}

fazer(23)
    .then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    });