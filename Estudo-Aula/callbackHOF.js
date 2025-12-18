//HOF -> Higher-Order- Function === função que recebe outra função como parametro


function calcular(numero1, numero2, operacao) {

    return operacao(numero1, numero2)
}

function soma(numero1, numero2){
    return numero1 + numero2
}

function divisao(numero1, numero2){
    return numero1 / numero2
}

function multiplicacao(numero1, numero2){
    return numero1 * numero2
}

const resultadoSoma = calcular(3, 8, soma)
console.log(`Resultado da soma: ${resultadoSoma}`);

const resultadoDivisao = calcular(12,6, divisao)
console.log(`O resultado da divisão é: ${resultadoDivisao}`);

