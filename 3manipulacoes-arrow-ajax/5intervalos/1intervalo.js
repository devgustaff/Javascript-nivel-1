let timer = "";
let btn = document.querySelectorAll("button");

function showTimer() {
    const now = new Date();

    let h = now.getHours();
    let m = (now.getMinutes() < 10) ? "0" + now.getMinutes() : now.getMinutes();
    let s = (now.getSeconds() < 10) ? "0" + now.getSeconds() : now.getSeconds();
    let hours = h + ":" + m + ":" + s;

    document.querySelector(".timer").innerHTML = hours;
}

function start() {
    timer = setInterval(showTimer, 1000);
}

function pause() {
    clearInterval(timer);
}

btn[0].addEventListener("click", start);
btn[1].addEventListener("click", pause);