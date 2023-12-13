const precoEtanol = 5.79;
const precoGasolina = 5.62;
const kmPorLitros = 10;
const distanciaEmKm = 100;
const tipoCombustivel = 'Etanol';
const litrosConsumidos = distanciaEmKm / kmPorLitros

if(tipoCombustivel === 'Etanol'){
    const valorGasto = litrosConsumidos * precoDocombustivel;
        console.log(valorGasto.toFixed(2));
}
else{
    const valorGasto = litrosConsumidos * precoGasolina;
        console.log(valorGasto.toFixed(2));
}



