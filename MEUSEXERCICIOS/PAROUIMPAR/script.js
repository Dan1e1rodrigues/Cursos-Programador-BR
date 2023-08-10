function ativa() {

    var pergunta = Number(window.prompt("Digite um número: "));

    //Lembrando que tem que pegar o resto da divisão então nãpo e possivel usar apenas / DIVISÂO e sim % RESTO 
    let calc = pergunta % 2;

    //Após isso rodar o queryselector que ira substituir o texto no meu HTML
    let result = document.querySelector('section#res')

    //Agora criando uma variavel varia para assim criar a minha estrutura de escolha(Minha CONDICIONAL)
    let msg

    //A condição e a seguinde quando o valor de calc que e o número que o usuario digitou, que ira ser dividido por 2 e caso seu resto seja 0 será PAR caso não IMPAR
    if(calc === 0){
        msg = 'PAR'
    }else{
        msg = 'IMPAR'
    }

    //O numero digitado e o valor PAR ou IMPAR será exibido.
    result.innerHTML = `O número ${pergunta} e ${msg}`
}

//DICA!

/*

if (num % 2 == 0) {
        tipo = '<strong>PAR</strong>'
    } else {
        tipo = '<strong>ÍMPAR</strong>'
    }

*/ 