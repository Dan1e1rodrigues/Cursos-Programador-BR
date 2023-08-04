function ativa(){
    let primeiro = parseInt(prompt("Digite um número "));

    let segundo = parseInt(prompt("Digite outro número "));

    var soma = (primeiro + segundo);

    //lembrar de colocar a variavel sempre de forma correta.
    let resposta = document.querySelector('section#resposta');

    //DOM, faz com que os RESULTADOS apareçam na tela.

    // resposta.innerHTML = ("A soma entre " + primeiro + " é " + segundo + " e igual a " + soma + "");

    //Uma das formas direfentes de fazer e assim.
    resposta.innerHTML = `<p>A soma entre <mark>${primeiro}</mark> e <mark>${segundo}</mark> é igual a <strong>${soma}</strong>!</p>`
}