window.alert("Seja bem-vindo(a) ao meu site!")

function ativa(){
    var botao = parseFloat(prompt("Digite um número"));

    let dobro = (botao * 2);

    let metade = (botao / 2);

    let res = document.querySelector('section#res');

    res.innerHTML = ("O dobro de " + botao + " é " + dobro + " e a metade é " + metade + "");
} 