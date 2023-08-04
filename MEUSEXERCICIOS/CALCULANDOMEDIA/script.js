// Para criar uma interação basta criar uma função e colocar a variavel dentreo dela e chamar na função.

// function inicio() {

//     let nome = window.prompt('Qual é o seu nome?')


//     let res = window.document.getElementById('resultado')

    // Também funciona com o comando abaixo

    // let res = window.document.querySelector('section#resultado')

    // Por fim o texto resultante a interação para com o usuario e como bonus eté mesmo um EMOJI
    // res.innerHTML = `<p>Olá, <strong>${nome}</strong>! É um grande prazer te conhecer! &#x1F596;`
//}
// Minha primeira tentativa estava correta porém algo deu errado o alert não estava sendo ativado edequadamente. 

function ativa(){

    //Importante resaltar que e necessario identificar o tipo no caso NUMBER 

    var nome = Number(prompt("Qual é o seu nome ? "));

    let nota1 = Number(prompt("Qual foi a sua primeira nota " + nome + " ?"));

    let nota2 = prompt("Além de " + nota1 + " qual foi a sua outra nota " + nome + " ?")

    let soma = (nota1 + nota2) / 2;
    
    let res = document.querySelector('section#res');

    //// O += é necessário, pois indica um pedido de "mantenha a frase anterior, adicionando essa outra frase". Se não fosse ele, a linha anterior seria apagada.

    //Mesmo conceito do ultimo exercicio, DOM para fazer com que o resultado apareça na tela, no caso
    //As variaveis nome, nota1, nota2 e soma.

    res.innerHTML = `<p>Calculando a média final de <mark>${nome}</mark>.</p>`
    res.innerHTML += `<p>As notas obtidas foram <mark>${nota1} e ${nota2}</mark>.</p>` 
    res.innerHTML += `<p>A média final será <mark>${soma}</mark>.</p>` 
}


