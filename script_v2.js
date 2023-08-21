const title = document.querySelector("h1");
const form = document.querySelector("form#calculator");
const input1 = document.querySelector("#valor1");
const input2 = document.querySelector("#valor2");
const button = document.querySelector("#btnCalcular");
const pResult = document.querySelector("p#result");


form.addEventListener("submit", sumarInputValues);


function sumarInputValues(event) {
    event.preventDefault();
    let result = Number(input1.value) + Number(input2.value);
    pResult.innerText = result;
    console.log(result);
}


// 😂
// form.addEventListener("mouseover", enviarFormulario)

// function enviarFormulario(e) {
//     e.preventDefault();
//     alert("virus")
// }
