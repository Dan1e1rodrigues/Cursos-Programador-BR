function ativa(){
    window.alert("Você apertou o botão");

    alert("Aperte F5 para recomeçar !!!");
}

function ativaN(){
    window.alert("Você apertou o botão, MAS EU DISSE PARA NÂO APERTAR");

    alert("Aperte F5 para RECOMEÇAR E TENTE SER MAIS OBEDIENTE!!!");
}

function ativarA(){

    let v1 = Number(prompt("Qual foi a sua PRIMEIRA nota ?"));

    let v2 = Number(prompt("Qual foi a sua SEGUNDA nota ?"))

    var media = (v1 + v2) / 2;

    window.alert("Sua nota foi " + media + "");
}

// Variavel Privada

var media = (n1, n2) => {

    return (n1 + n2) / 2;

}

var m = media(5, 6);

console.log(m)