//Nessa variavel vai pegar o id do Section e pegar o elemento contido nele
let res = window.document.getElementById('saida')

//De uma forma geral essas funções embaixo vão gerar o texto que assim estão contidos dentro delas.
//O desafio mesmo dessa atividade e iindentificar qual função DOM irei utilizar, getElementById ou querySelector sabendo identificar as funções de acordo com o que e solicitado.

//ATIVA A
function ativaA(){

     res.innerHTML += `<p>Clicou no PRIMEIRO BOTÂO.</p>`

}

//ATIVA B
function ativaB() {
    res.innerHTML += `<p>Clicou no SEGUNDO BOTÂO.</p>`
}

//ATIVA C
function ativaC() {
    res.innerHTML += `<p>Clicou no TERCEIRO BOTÂO.</p>`
}

//ATIVA D
function ativaD() {
    res.innerHTML += `<p>Clicou no QUARTO BOTÂO.</p>`
}



