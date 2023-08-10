function ativa() {
    let numA = Number(window.prompt("Digite um número: "));

    let numB = Number(window.prompt("Digite outro número: "));

    let result = document.querySelector('section#res')

    let compara 

    if(numA > numB){
        compara = 'O maior valor é ' + numA + ''
    }else{
        compara = 'O maior valor é ' + numB + ''
    }if

    result.innerHTML += `Analisando os valores ${numA} e ${numB}, O maior e o ${compara}` 
}