//Exercício 1
function saudacao(saudacao){
    console.log("Olá! Seja bem-vindo(a)")
}

saudacao();



//Exercício 2

function apresentarPessoa(nome,idade){
console.log(`Olá, meu nome é ${nome} e tenho ${idade} anos.`)
}

apresentarPessoa('Arthur', 18)



//Exercício 3

function imc(peso,altura){
    return resultado = peso / (altura * altura);
}

const imcDois = imc(41, 1.30)
console.log(`Seu imc é ${resultado}`)


//Exercício 4

function verificarAprovacao(nota){
    if(nota >= 7){
        console.log(`Aprovado!`)
    } else {
        console.log(`Reprovado!`)
    }
}

verificarAprovacao(7);


//Exercício 5

function ehPar(numero){
    if(numero % 2 === 0){
        console.log(numero = true)
    } else {
        console.log(numero = false)
    }
}

ehPar(7)

//Exercício 6

function soma(num1, num2,){
    return num1 + num2
    
}

const calculoSoma = soma(7 , 5)
console.log(`O resultados dos números é: ${calculoSoma}`)



//Exercício 7

function calcularTroco(compra, pagamento){
    if(compra < pagamento){
        console.log(`Você deu dinheiro a mais e irá receber seu troco!`)
    } else if (compra > pagamento){
        console.log(`Está faltando dinheiro, por isso a compra não será aprovada!`)
    } else {
        console.log(`Está tudo certo!`)
    }

}

calcularTroco(0, 0,)



//Exercício 8

const calcularSoma = (num1, num2) => num1 + num2

const calcularSomaDois = calcularSoma(5,5)
console.log(`Resultado ${calcularSomaDois}`)



//Exercício 9

function executarAcao(acao){
}

function executandoAcao(acao){
    console.log(`Executando ação...`)
}

const executar = executarAcao(executandoAcao)


