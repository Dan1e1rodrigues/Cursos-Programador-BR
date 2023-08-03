/*

var idade = parseInt(prompt("Qual e a sua idade ?"));

if(idade >= 35){
    window.alert("Ele e maior de 18 !!!");
    window.alert("Qual e o seu pedido Meu Consagrado ?");
}else if(idade >= 18 ){
    window.alert("Claro");
    window.alert("Mostre a sua idadentidade meu casa");
}
else{
    window.alert("Ele e menor de idade ")
    window.alert("Volte futuramente AMIGO !!!");
}

// ------------------------------------------------------
var idade = parseInt(prompt("Qual e a sua idade ?"));

if(idade >= 35 && idade >= 18){
    window.alert("Ele e maior de 18 !!!");
    window.alert("Qual e o seu pedido Meu Consagrado ?");
}
else{
    window.alert("Ele e menor de idade ")
    window.alert("Volte futuramente AMIGO !!!");
}

*/

/*
var idade = 2;

                            //true      false
var pode = idade >= 18 ? "Pode berber maior de idade !!" : "Não pode beber, menor de idade !!";

console.log(pode);

*/

// Continuação.
// var idade = parseInt(prompt("Qual e a sua idade ?"));

// if(idade >= 35 && idade >= 18){
//     window.alert("Ele e maior de 18 !!!");
//     window.alert("Qual e o seu pedido Meu Consagrado ?");
// }
// else{
//     window.alert("Ele e menor de idade ")
//     window.alert("Volte futuramente AMIGO !!!");
// }

// Para o exemplo da aula de hoje.
/*

var nota01 = parseInt(prompt("Qual foi a sua primeira nota ?"));

var nota02 = parseInt(prompt("Qual foi a sua segunda nota ?"));

var media = (nota01 + nota02)/2

if(media <= 5){
    window.alert("Você esta de recuperação!!! Você tirou" + media + "");
}else{
    window.alert("Você foi aprovado!!! Você tirou " + media + "");
}

*/

//DESAFIO X

// var nota01 = parseFloat(prompt("Qual foi a sua primeira nota ?"));

// var nota02 = parseFloat(prompt("Qual foi a sua segunda nota ?"));

// var media = (nota01 + nota02)/2

// if(media >= 8){
//     window.alert("Você foi APROVADO, sua nota foi " + media + "UM ALUNO OTIMO")
// }
// else if(media >= 6.5){
//     window.alert("Você foi APROVADO, sua nota foi " + media + " UM BOM ALUNO ")
// }else{
//     window.alert("Você foi REPROVADO, sua nota foi " + media + " UM ALUNO REGULAR")
// }


var nota01 = parseFloat(prompt("Qual foi a sua primeira nota ?"));

var nota02 = parseFloat(prompt("Qual foi a sua segunda nota ?"));

var media = (nota01 + nota02)/2

var conceito = "";

if(media >= 8){
    conceito = "OTIMO";
}
else if(media >= 6.5){
    conceito = "BOM";
}else{
    conceito = "REGULAR";
}
// USANDO SWITCH

window.alert(media);
window.alert(conceito);

switch(conceito){
    case "OTIMO":
        window.alert("Parabéns, vc e um otimo aluno");
        break;

    case "BOM":
        window.alert("Vc esta quase perfeito");
        break;

    case "REGULAR":
        window.alert("Poxa suas notas estão muito baixas, estude mais");
        break;

    default:
        window.alert("Houve um ERROR")
        break;
}

