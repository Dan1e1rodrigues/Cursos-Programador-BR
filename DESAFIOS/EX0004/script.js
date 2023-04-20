function clicou(){
    let nome = window.prompt('Qual e o seu nome');

    let resul = window.document.getElementById('resultado')

    // O "" e ´´ são diferentes e por isso não funcionou com "" então preste atenção só foi com `´

    resul.innerHTML = `<p>Oi, <strong>${nome}</strong>! E um prazer te conhecer!;`

    // document.write("Olá " + nome + " E um prazer te conhecer!" );
    
}

