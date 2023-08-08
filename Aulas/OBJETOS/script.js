// var objetos = ["Daniel", "Rian", "Helena"];

//Vai mostrar o valor da posição
// document.write([2]);
//Mostra a posição do elemento nesse caso vai mostrar o nome
// document.write(objetos[2]);

//Em um objeto e e diferença e de {}

//OBJETO...
// var aluno = {nome: "Daniel", idade: 19};

// aluno.matricula = 12345;
// aluno.desconto = "Yes";
// aluno.situacao = "Ativa";

// console.log(aluno)

//--------------------------------------------------------

// var alunoA = {nomeA: "Felipe", 
//                 idadeA: 15};

// aluno.matricula = 123434;

// console.log(alunoA);

//--------------------------------------------------------
// var alunoB = {
//     nomeB: "Renazin",
//     notasB: [8,9]
// };

// console.log(alunoB);


//Uma função dentro de um objeto

/*
function calcMedia(n1, n2) {
    return (this.notas[0] + this.notas[1]) / 2;
}

var aluno = {
    nome: "Daniel",
    notas: [7, 8],

    media: calcMedia
}

var aluno1 = {
    nome: "Vitinho",
    notas: [5, 8],

    media: calcMedia
}

var aluno2 = {
    nome: "Filipinho",
    notas: [10, 9],

    media: calcMedia
}

// IMPRIMI ALUNO
console.log(aluno.nome);
console.log(aluno.media());

console.log(aluno1.nome);
console.log(aluno1.media());

console.log(aluno2.nome);
console.log(aluno2.media());
*/

//OBJETOS CONSTRUTORES

/*
var calcMedia = function () {

    return (this.nota1 + this.nota2) / 2;   
}

var turma = [

    {
        nome:"Daniel do Corre",
        nota1: 8,
        nota2: 6,
        media: calcMedia
    },
    // Vale resaltar que essa pequena virgula e muito importante. 

    {
        nome:"Arthur do Cimento",
        nota1: 3,
        nota2: 10,
        media: calcMedia
    }
]

var aluno = turma[1];
console.log(aluno);
console.log(aluno.media);
*/

//Como resumir isso !

function criarAluno(nome, n1, n2) {
     return {
        nome: nome,
        nota1: n1,
        nota2: n2,
        media: function () {
            return (this.nota1 + this.nota2) / 2;
        }
     }
}