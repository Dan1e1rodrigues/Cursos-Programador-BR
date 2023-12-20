// const precoEtanol = 5.79;
// const precoGasolina = 5.62;
// const kmPorLitros = 10;
// const distanciaEmKm = 100;
// const tipoCombustivel = 'Etanol';
// const litrosConsumidos = distanciaEmKm / kmPorLitros

// if(tipoCombustivel === 'Etanol'){
//     const valorGasto = litrosConsumidos * precoDocombustivel;
//         console.log(valorGasto.toFixed(2));
// }
// else{
//     const valorGasto = litrosConsumidos * precoGasolina;
//         console.log(valorGasto.toFixed(2));
// }

// let nota1 = 7;
// let nota2 = 7;
// let nota3 = 7;

// let mediaFinal = (nota1 + nota2 + nota3) / 3;

// if (mediaFinal < 5){
//     console.log('Reprovado');
// }

// else if(mediaFinal >= 5 && mediaFinal <= 7){
//     console.log('Recuperação');
// }

// else{
//     console.log('Aprovado');
// }


// let peso = 105;
// let altura = 1.80;

// let calculoIMC = peso / Math.pow(altura, 2);

// if(calculoIMC <= 18.5){
//     console.log("Abaixo do Peso");
// }

// else if(calculoIMC >= 18.5 && calculoIMC <= 25){
//     console.log("Peso normal");
// }

// else if (calculoIMC >= 25 && calculoIMC <= 30){
//     console.log("Acima do Peso");
// }

// else if (calculoIMC >= 30 && calculoIMC <= 40){
//     console.log("Obeso");
// }
// else{
//     console.log("Obesidade Grave");
// }

// console.log(calculoIMC);


// const precoEtiqueta = 100;
// Caso queira pagar no PIX escolha a opcção 2 e com dinheiro opcçaõ 1
// const formaDePagamento = 1;

// if(formaDePagamento === 1){
//     console.log(precoEtiqueta - (precoEtiqueta * 0.1));
// }
// else if(formaDePagamento === 2){
//     console.log(precoEtiqueta - (precoEtiqueta * 0.15));
// }
// else if(formaDePagamento === 3){
//     console.log(precoEtiqueta);
// }
// else{
//     console.log(precoEtiqueta + (precoEtiqueta * 0.1));
// }


// Calculando o IMC com functions

// let peso = 105;
// let altura = 1.80;

// let calculoIMC = peso / Math.pow(altura, 2);

// if(calculoIMC <= 18.5){
//     console.log("Abaixo do Peso");
// }

// else if(calculoIMC >= 18.5 && calculoIMC <= 25){
//     console.log("Peso normal");
// }

// else if (calculoIMC >= 25 && calculoIMC <= 30){
//     console.log("Acima do Peso");
// }

// else if (calculoIMC >= 30 && calculoIMC <= 40){
//     console.log("Obeso");
// }
// else{
//     console.log("Obesidade Grave");
// }

// console.log(calculoIMC);


// function escrevamMeuNome(nome) {
//     console.log('Meu nome é ' + nome + "");
// }

// escrevamMeuNome('Daniel Rodrigues');
// escrevamMeuNome('Rian Martins');

// function verificarIdade(idade) {
//     if(idade >= 18){
//         console.log('Maior de idade');
//     }
//     else{
//         console.log('Menor de idade')
//     }
// }

// verificarIdade(11);

class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularGastoDePercurso(distanciaEmKm, precoCombustivel){
        return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
    }
}

const r34 = new Carro ('SkylineR34', 'Prata', 1/16);
console.log(r34.calcularGastoDePercurso(70, 5));


