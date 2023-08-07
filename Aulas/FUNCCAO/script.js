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

    // Condicional da media.
    if(media >= 6){
        window.alert("APROVADO")
    }else{
        window.alert("REPROVADO")
    }

    res.innerHTML = `<p>Calculando a média final de <mark>${nome}</mark>.</p>`
    res.innerHTML += `<p>As notas obtidas foram <mark>${primeiraNota} e ${segundaNota}</mark>.</p>` 
    res.innerHTML += `<p>A média final será <mark>${media}</mark>.</p>` 
}

/*
    Outra forma de resolver esse codigo e assim:
    Lembrando que vou usar os fundamentos adquiridos nas aulas


    var nomes = ["Daniel", "Rian", "Marlene"];
    var notasA = [8 , 7, 9];
    var notasB = [8, 8, 6];


    function media(n1,n2) {
        return (n1 + n2) / 2;
    }


    function passou(media) {
        if(media > 7) {
            return "APROVADO";
        }else{
            return "REPROVADO";
        }
    }


    for (var index in nomes) {

        var nota1 = notaA[index];
        var nota2 = notaB[index];

        var m = media(nota1, nota2);

        console.log(nomes[index]) +
            " - " +
            nota1 + 
            " - " +
            nota2 +
            " - " +
            m +
            " - " +
            passou(m));
            
    }
*/ 