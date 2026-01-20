const calculadora = {
    soma: function( a, b){
        return a + b
    },
    subtracao: function (a, b){
        return a - b
    },
    multiplicacao: function (a, b){
        return a * b
    },
    divisao: function (a, b){
        return a / b
    },
    calcularMedia: function(numeros){
        const soma = numeros.reduce((total, numero) => total + numero, 0);
        return soma / numeros.length 
    }
}
const resultado = calculadora.soma(6, 2);

console.log(resultado);

const numerosParaMedia = [10, 8, 6, 9, 7];
console.log("Média: " + calculadora.calcularMedia(numerosParaMedia));


