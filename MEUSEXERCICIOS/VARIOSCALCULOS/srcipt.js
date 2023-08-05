//Dentre minha tentativas eu tive dificuldade pois estava errando na hora de passar o ID do section 
//E por fim estava colocando variaveis e ids como os mesmos nomes  

// function ativa(){
//     var numero = parseInt(prompt("Digite um número: "));

//     let res = document.querySelector('section#result')

//     //Valor absoluto
//     res.innerHTML = `Seu valor Absoluto é ${numero}`;

//     // N analisado
//     res.innerHTML = `O número a ser analisado e o ${numero}`;
// }

function calcular() {
    let num = Number(window.prompt('Digite um número: '))
    
    let res = document.querySelector('section#result')
    res.innerHTML = `<p>O número a ser analisado aqui será o <strong>${num}</strong></p><hr>`
    res.innerHTML += `<p>O seu valor absoluto é ${Math.abs(num)}</p>`
    res.innerHTML += `<p>A sua parte inteira é ${Math.trunc(num)}</p>`
    res.innerHTML += `<p>O valor inteiro mais próximo é ${Math.round(num)}</p>`
    res.innerHTML += `<p>A sua raiz quadrada é ${Math.sqrt(num)}</p>` 
    res.innerHTML += `<p>A sua raiz cúbica é ${Math.cbrt(num)}</p>`        
    res.innerHTML += `<p>O valor de ${num}<sup>2</sup> é ${Math.pow(num, 2)}</p>`
    res.innerHTML += `<p>O valor de ${num}<sup>3</sup> é ${Math.pow(num, 3)}</p>`
}