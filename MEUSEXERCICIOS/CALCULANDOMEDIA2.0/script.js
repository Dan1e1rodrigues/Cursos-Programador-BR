function ativa() {

    let nome = window.prompt("Qual é o seu nome ?");

    let notaA = Number(window.prompt("Qual foi a sua primeira nota " + nome + " ?"));

    let notaB = Number(window.prompt("Além de " + notaA + " , qual foi sua outra nota " + nome + " ?"));

    let media = (notaA + notaB) / 2;

    let result = document.querySelector('section#res');

    //O que temos de novo, usando uma condição, caso o aluno tenha uma media < que 6 reprovado, caso seja maior ou igual a 6 passou.

    let msg // cria uma variável e deixa ela vazia

    if (media >= 6) { // Se por acaso a média foi 6.0 ou mais...
        msg = 'Meus parabéns, Você PASSOU!'
    } else { // senão...
        msg = 'Estude um pouco mais! Você esta REPROVADO!!'
    }
    // O if é uma estrutura que cria uma CONDIÇÃO, que executa um bloco de comandos ou outro, dependendo do resultado de um teste lógico.


    //Variavel de PASSOU ou NÃO PASSOU

    let res = document.getElementById('situacao')

    result.innerHTML = `Calculando a media final de <mark>${nome}</mark>`;

    result.innerHTML += `As notas obitidas foram <mark>${notaA} e ${notaB}</mark>`;

    result.innerHTML += `A media final será ${media}`;

    result.innerHTML += `<p>A mensagem que temos é: <strong style='color:red;'>${msg}</strong></p>`} 
    // Note que eu usei até um pouco de CSS pra fazer a mensagem ficar vermelha ;)
