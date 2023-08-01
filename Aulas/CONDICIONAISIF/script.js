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