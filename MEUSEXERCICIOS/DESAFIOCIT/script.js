function isValid(termo) {
    const strTermo = termo.toString();
    if (strTermo.length === 1) {
        return false;
    }
    if (strTermo.length > 2 && strTermo[strTermo.length - 2] !== '0') {
        return false;
    }
    return true;
}

function calcularExpressao(termos) {
    let soma = 0;
    for (let i = 0; i < termos.length; i++) {
        const termo = termos[i];
        if (isValid(termo)) {
            const base = parseInt(termo.toString().slice(0, -1));
            const expoente = parseInt(termo.toString().slice(-1));
            soma += Math.pow(base, expoente);
        } else {
            console.log("Expressão inválida");
            return;
        }
    }
    console.log(soma);
}

// Exemplo de uso
const termos = [2, 24, 123];
calcularExpressao(termos);
