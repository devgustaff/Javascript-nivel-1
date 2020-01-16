const q = el => document.querySelector(el);
const qa = el => document.querySelectorAll(el);

let modalQt = 1;
let cart = [];
let modalKey = 0;

// Listagem das pizza
pizzaJson.map((item, index) => {
    let pizzaItem = q(".models .pizza-item").cloneNode(true);

    pizzaItem.querySelector(".pizza-item--img img").src = item.img;
    pizzaItem.querySelector(".pizza-item--price").innerHTML = `R$ ${item.price.toFixed(2).replace(".", ",")}`;
    pizzaItem.querySelector(".pizza-item--name").innerHTML = item.name;
    pizzaItem.querySelector(".pizza-item--desc").innerHTML = item.description;
    pizzaItem.setAttribute("data-key", index);

    // clica na pizza desejada e abra o modal
    pizzaItem.querySelector("a").addEventListener("click", e => {
        e.preventDefault();
        let key = e.target.closest(".pizza-item").getAttribute("data-key");
        modalQt = 1;
        modalKey = key;

        q(".pizzaWindowArea").style.opacity = 0;
        q(".pizzaWindowArea").style.display = "flex";

        setTimeout(() => {
            q(".pizzaWindowArea").style.opacity = 1;
        }, 200);

        // preenchendo modal
        q(".pizzaBig img").src = pizzaJson[key].img;
        q(".pizzaInfo h1").innerHTML = pizzaJson[key].name;
        q(".pizzaInfo--desc").innerHTML = pizzaJson[key].description;

        q(".pizzaInfo--size.selected").classList.remove("selected");
        q(".pizzaInfo--qt").innerHTML = modalQt;
        // percorre os tamanha e depois preenche-os
        qa(".pizzaInfo--size").forEach((size, sizeIndex) => {
            if (sizeIndex == 2) {
                size.classList.add("selected");
            }

            size.querySelector("span").innerHTML = pizzaJson[key].sizes[sizeIndex];
        });

        q(".pizzaInfo--actualPrice").innerHTML = `R$ ${pizzaJson[key].price.toFixed(2).replace(".", ",")}`;

    });

    // preenche as informações em pizza area
    q(".pizza-area").append(pizzaItem);
});

// Eventos do modal
const closeModal = () => {
    q(".pizzaWindowArea").style.opacity = 0;
    setTimeout(() => {
        q(".pizzaWindowArea").style.display = "none";
    }, 500);
}

// fecha modal
qa(".pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton").forEach((item) => {
    item.addEventListener("click", closeModal);
});

// diminui quantidade de pizza
q(".pizzaInfo--qtmenos").addEventListener("click", () => {
    if (modalQt > 1) {
        modalQt--;
        q(".pizzaInfo--qt").innerHTML = modalQt;
    }
});

// aumenta a quantidade de pizza
q(".pizzaInfo--qtmais").addEventListener("click", () => {
    modalQt++;
    q(".pizzaInfo--qt").innerHTML = modalQt;
});

// selecionando o tamanho da pizza
qa(".pizzaInfo--size").forEach((size, sizeIndex) => {
    size.addEventListener("click", (e) => {
        q(".pizzaInfo--size.selected").classList.remove("selected");
        size.classList.add("selected");
    });
});

// adiciona pizza no carrinho de compras
q(".pizzaInfo--addButton").addEventListener("click", () => {
    let size = q(".pizzaInfo--size.selected").getAttribute("data-key");
    let identifier = pizzaJson[modalKey].id + "@" + size;
    let key = cart.findIndex(item => item.identifier == identifier);

    if (key > -1) {
        cart[key].qt += modalQt;            
    } else {
        cart.push({
            identifier,
            id: pizzaJson[modalKey].id,
            size: parseInt(size),
            qt: modalQt,
        });
    }
    updateCart();
    closeModal();
});

// abre carrinho no mobile
q(".menu-openner").addEventListener("click", () => {
    if (cart.length > 0) {
        q("aside").style.left = "0";
    }
});

// fecha carrinho no mobile
q(".menu-closer").addEventListener("click", () => {
    q("aside").style.left = "100vw";
});

const updateCart = () => {
    q(".menu-openner span").innerHTML = cart.length;

    if (cart.length > 0) {
        q("aside").classList.add("show");
        q(".cart").innerHTML = "";

        let subtotal = 0;
        let desconto = 0;
        let total = 0;

        for (let i in cart) {
            let pizzaItem = pizzaJson.find(item => item.id == cart[i].id);

            subtotal += pizzaItem.price * cart[i].qt;

            let cartItem = q(".models .cart--item").cloneNode(true);
            
            let pizzaSizeName = size => {
                return {
                    0: "P",
                    1: "M",
                    2: "G"
                }[size ? size : size];
            }

            let pizzaName = `${pizzaItem.name} (${pizzaSizeName(cart[i].size)})`;            

            cartItem.querySelector("img").src = pizzaItem.img;
            cartItem.querySelector(".cart--item-nome").innerHTML = pizzaName;
            cartItem.querySelector(".cart--item--qt").innerHTML = cart[i].qt;
            
            cartItem.querySelector(".cart--item-qtmenos").addEventListener("click", () => {
                if (cart[i].qt > 0) {
                    cart[i].qt--;
                } else {
                    cart.splice(i, 1);
                }
                updateCart();
            });

            cartItem.querySelector(".cart--item-qtmais").addEventListener("click", () => {
                cart[i].qt++;
                updateCart();
            });

            q(".cart").append(cartItem);
        }

        desconto = subtotal * 0.1;
        total = subtotal - desconto;

        q(".subtotal span:last-child").innerHTML = `R$ ${subtotal.toFixed(2).replace(".", ",")}`;
        q(".desconto span:last-child").innerHTML = `R$ ${desconto.toFixed(2).replace(".", ",")}`;
        q(".total span:last-child").innerHTML = `R$ ${total.toFixed(2).replace(".", ",")}`;
    } else {
        q("aside").classList.remove("show");
        q("aside").style.left = "100vw";
    }
}