//Criando uma variavel inicial com um valor 0 zero, para que futuramente quando formos resetar seu valor volte para zero, no caso valor inicial.

let contador = 0

//Mais uma vez usando essa função para que quando o botão for clicado subistitua o texto no caso mude para quantidade de vezes que foi clicado. 

let res = document.querySelector('section#result')

//Função de adcionar mais um, no caso mais um clique = a 1, assim armazenando quantas vezes foi clicado

function contar() {
    contador ++
    res.innerHTML = `<p>O contador está com <mark>${contador}</mark> números`
}

//Quando foi clicado zera a (variavel) tecnicamente não zera mais sim retorna seu valor para o inicial, no caso como programado o valor 0 que e o valor inicial que eu coloquei

function zerar() {
    contador = 0
    res.innerHTML = null
}