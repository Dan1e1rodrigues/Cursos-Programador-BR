function ativa() {
    let numA = Number(window.prompt("Digite um número: "));

    let numB = Number(window.prompt("Digite outro número: "));

    let result = document.querySelector('section#res')

    let compara 

    if(numA > numB){
        compara = 'O maior valor é ' + numA + ''
    }else{
        compara = 'O maior valor é ' + numB + ''
    }

    result.innerHTML += `Analisando os valores  <mark>${numA}</mark> e <mark>${numB}</mark>, o maior e ${compara}`
}
