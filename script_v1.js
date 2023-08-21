// h1 {color: blue;}
// .parrafito {color: red;}
// #parrafote {color: green;}

const title = document.querySelector("h1");
const parrafo = document.querySelector("p");
const parrafito = document.querySelector(".parrafito");
const parrafote = document.querySelector("#parrafote");
const inputdero = document.querySelector("#inputdero");

console.log(inputdero.value);

console.log({
    title,
    parrafo,
    parrafito,
    parrafote,
    inputdero
});


title.innerText = "Pato 🦆 Feo";
title.setAttribute("screen", "LG");
screen = title.getAttribute("screen");
console.log(screen);

parrafito.classList.add("primer");
parrafito.classList.remove("parrafito");
// parrafito.classList.toggle("primer");
// parrafito.classList.contains("parrafito");

inputdero.value = "🦆🦆🦆🦆";

const img = document.createElement("img");
img.src = "https://picsum.photos/200";

parrafote.innerHTML = "";
parrafote.appendChild(img);








