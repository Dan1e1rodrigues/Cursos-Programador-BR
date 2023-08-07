/*
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
*/

// Desafio calculando media, colocar nome do aluno, media1 e media2, media final e se foi aprovado ou não. 

function ativa(){
    var nome = window.prompt("Qual é o seu nome ?");

    let primeiraNota = Number(window.prompt("" + nome +" qual foi a sua primeira nota ?"));

    let segundaNota = Number(window.prompt("Agora a sua segunda nota ?"));

    let media = (primeiraNota + segundaNota) / 2;

    let res = document.querySelector('section#res')

    if(media >= 6){
        window.alert("APROVADO")
    }else{
        window.alert("REPROVADO")
    }

    res.innerHTML = `<p>Calculando a média final de <mark>${nome}</mark>.</p>`
    res.innerHTML += `<p>As notas obtidas foram <mark>${primeiraNota} e ${segundaNota}</mark>.</p>` 
    res.innerHTML += `<p>A média final será <mark>${media}</mark>.</p>` 
}