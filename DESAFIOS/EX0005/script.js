function clique () {
    let num1 = parseInt(prompt("Digite um número: "));

    let dobro = (num1 * 2);

    let metade = (num1 / num1);

    // Aqui o esquema e para fazer aparecer na tela ai precisamos de um click, function, getElementById e innerjoin.

    let resul = window.document.getElementById('resultado')
    resul.innerHTML = `<p>O dobro de, <strong>${num1}</strong> é ${dobro} e a metade é ${metade};`

    // Lembrando que esse document.write não pode estar ativo pois irá atrapalhar a funcionalidade do sistema 
    // Na hora de responder.
    
    // document.write("O dobro de " + num1 + " é " + dobro + " e a metade é " + metade + "");
}