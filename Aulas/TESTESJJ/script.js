const precoDocombustivel = 5.79;

const kmPorLitros = 1;

const distanciaEmKm = 100;

const litrosConsumidos = distanciaEmKm / kmPorLitros
const valorGasto = litrosConsumidos * precoDocombustivel;

console.log(valorGasto.toFixed(2));

