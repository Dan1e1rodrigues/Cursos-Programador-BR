// Para criar uma interação basta criar uma função e colocar a variavel dentreo dela e chamar na função.

function inicio() {

    let nome = window.prompt('Qual é o seu nome?')


    let res = window.document.getElementById('resultado')

    // Também funciona com o comando abaixo

    // let res = window.document.querySelector('section#resultado')

    // Por fim o texto resultante a interação para com o usuario e como bonus eté mesmo um EMOJI
    res.innerHTML = `<p>Olá, <strong>${nome}</strong>! É um grande prazer te conhecer! &#x1F596;`
}
// Minha primeira tentativa estava correta porém algo deu errado o alert não estava sendo ativado edequadamente. 



