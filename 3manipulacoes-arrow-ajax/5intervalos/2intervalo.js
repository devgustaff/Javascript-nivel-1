let btns = document.querySelectorAll("button");

function rodar() {
    setTimeout(function () {
        document.querySelector(".txt").innerHTML = "Rodou";
    }, 2000);
}

btns[2].addEventListener("click", rodar);