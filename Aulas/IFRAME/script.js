// let jogador = document.getElementById("jogador");

// let xInicial = 0;
// let yInicial = 0;

// function moverJogadorPara(x,y){

//     let posX = x + "px";
//     let posY = y + "px";

//     jogador.style.top = posX;
//     jogador.style.left = posY;
// }

// setInterval(function(){

//     moverJogadorPara(xInicial++, yInicial++);

// }, 20);

//Fazendo o circulo inicio
let tela = document.getElementById("tela");

let ctx = tela.getContext("2d");

let x = 250;
let y = 250;
let raio = 100;

let inicio = 0;
let fim = 2 * Math.PI;

// Fazendo um circulo fim
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.fillStyle = "green";
ctx.arc(x,y,raio,inicio,fim);

ctx.stroke();
ctx.fill()


// ctx.rect(10, 10, 100, 200);

// ctx.fillStyle = "blue";

// ctx.lineWidth = 5;
// ctx.strokeStyle = "red";
// // ctx.moveTo(0,0);
// // ctx.lineTo(250,250);
// // ctx.lineWidth = 5; aumentar o tamanho da(s) linha(s)
// // ctx.lineTo(500,0);
// // ctx.stroke();

// ctx.fill();
// ctx.stroke();

// ctx.clearRect(20, 20, 30, 30);