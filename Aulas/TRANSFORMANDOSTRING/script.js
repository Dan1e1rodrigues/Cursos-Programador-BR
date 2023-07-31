// Transformando os tipos

// Desse modo concatena
// var a = "10";

// var b = "30";

// var c = a + b;
// console.log(c);
//-------------------------------------------------------------------

// Desse Soma
// var a = 10;

// var b = 30;

// var c = a + b;
// console.log(c);

// ------------------------------------------------------------------
var a = "10";

var b = "30";

// ParseInt transforma a variavel em um valor inteiro, assim ao inves de concatenar irá somar

var c = parseInt(a) + parseInt(b);

console.log(c);

// -------------------------------------------------------------------
// ParseFloat
var a = "3.5";

var b = "3";

// ParseFloat transforma a variavel em um valor quebrado, assim ao inves de concatenar irá somar

var c = parseFloat(a) + parseFloat(b);

console.log(c);