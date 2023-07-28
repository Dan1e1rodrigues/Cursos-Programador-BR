// + Adição
// - Subtração
// / Divisão
// % Modulo
// ++ Incremento
// -- Decremento

/*
var a = 20;

var b = 10;

var soma = (a % b);

console.log(soma);
*/

// ATRIBUIÇÔES

// =    x = y   x = y
// +=   x += y  x = x + y
// -=   x -= y  x = x - y
// *=   x *= y  x = x * y
// /=   x /= y  x = x / y
// %=   x %= y  x = x % y

/*
var a = 30;

a += 10;

console.log(a);
*/

// var num1 = parseInt(prompt("Digite um numero: "));
// var num2 = parseInt(prompt("Digite outro numero: "));

// var calculo = (num1 + num2);

// document.write("O resultado é " + soma + "")

// var a = "";
// a = 50;
//  console.log(a)

// Operadores Comparativos

/*

== igual a 
=== igual e igual
!= não é igual
!== não igual ou não igual
> maior que
< menor que
>= maior que ou igual a
<= menor ou igual a

*/

//Vai ser TRUE
// var a = 3 ;
// var b = 3 ;

// console.log(a === b);

//Vai ser FALSE
// var a = 3 ;
// var b = "3" ;

// console.log(a === b);

// var a = 3 ;
// var b = 3 ;

// console.log(a === b);

//Operadores Logicos

//Estou perguntando o seguinte A e B são iguais ? Não pois um e TRUE e o outro e FALSE
//Logo o resultado e false pois as duas nn possuem o mesmo valor.

// var a = true;
// var b = false;

// var c = a && b;

// console.log(c);

// var idade = 35;

// var maiorN = idade > 20;
// var menorN = idade < 40;

// var entreM = maiorN && menorN;

// console.log("A sua idade é: " + idade + "");
// console.log("sua idade é maior que: " + maiorN + "");
// console.log("Sua idade é menor que: " + menorN + "");
// console.log("Sua idade está entre 20 e 40: " + idade + "");
 
//Faça um codigo que saiba identificar se o usuario pode ter acesso a gratuidade
// se ele for menor de 10 anos ele tem acesso e se for maior de 65 tmb tem acesso gratuito

var idade = 64;

var menor10 = idade <= 10;
var maior65 = idade >= 65;

var gratuidadeS = menor10 || maior65;

console.log("A sua idade é: " + idade + "");

console.log("sua idade é maior que 65: " + maior65 + "");

console.log("Sua idade é menor que 10: " + menor10 + "");

console.log("O usuario pode ter acesso a Gratuidade? " + gratuidadeS + "");

// Concatenação e String

var a = "8";
var b = "Texto" + "" + "Juntando tudo";

console.log(b);