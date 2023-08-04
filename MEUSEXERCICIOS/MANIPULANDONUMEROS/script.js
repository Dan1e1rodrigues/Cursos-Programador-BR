// Alerta que e ativado ao entrar na pagina.
window.alert("Seja bem-vindo(a) ao meu site!")

// Função que e ativada quando o botão e clicado.
function ativa(){
    // Pergunta para o usuario
    var botao = parseFloat(prompt("Digite um número"));

    // Dobra o valor com uma conta simples de multiplicção, valor pedido inicialmente na variavel
    //BOTAO
    let dobro = (botao * 2);

    // Divide o numero por 2
    let metade = (botao / 2);

    //Leva a resposta para a pagina HTML
    let res = document.querySelector('section#res');

    //DOM, faz com que os RESULTADOS apareçam na tela.
    res.innerHTML = ("O dobro de " + botao + " é " + dobro + " e a metade é " + metade + "");
} 