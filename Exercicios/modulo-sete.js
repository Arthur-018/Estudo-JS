//Exercício 1
for (let contador = 0; contador <= 10; contador++) {
    console.log(contador)
}

//Exercício 2

let soma = 0;
for (let s = 1; s <= 100; s++) {
    soma += s;
    console.log(`soma dos números: ${soma}`)
}

//Exercício 3
let numeroDois = 5;

for (let i = 0; i <= 10; i++) {
    console.log(numeroDois * i)
}


//Exercício 4
let cont = 10;

while (cont >= 0) {
    console.log(`Contagem finalizada: ${cont}`)
    cont--
}

//Exercício 5
/*let numeroTres = prompt("Digite um número")
do {
    if (numeroTres != 0) {
        numeroTres = prompt("Digite outro número")
    } else {
        console.log(`O programa foi finalizado!`)
        break;
    }
} while (numeroTres) */



//Exercício 6
/*
let numeroSecreto = 7
let tentativa = prompt("Tente adivinhar o número secreto");
do {
    if (numeroSecreto == tentativa) {
        console.log("Você acertou!")
        break;
    } else if (tentativa < numeroSecreto) {
        tentativa = prompt(`O número secreto é maior que ${tentativa}`)
    } else if (tentativa > numeroSecreto) {
        tentativa = prompt(`O número secreto é menor que ${tentativa}`)
    }
}
while (tentativa)*/




//Exercício 7
let anoNascimento = 2007
let anoAtual = 2025;

for (let ano = anoNascimento; ano <= anoAtual; ano++) {
    console.log(ano + " " + (ano - anoNascimento) + " anos.");
}


//Exercício 8
for (let numerosPares = 0; numerosPares <= 50; numerosPares++) {
    if (numerosPares % 2 == 0) {
        console.log(`Numeros pares: ${numerosPares}`)
    }
}


//Exercício 9
for (let divisao = 0; divisao <= 100; divisao++) {
    if (divisao % 3 == 0) {
        console.log(`Os números divisiveis por 3 são: ${divisao}`)
    }
}


//Exercício 10
//Esse eu NÃO consegui fazer, usei a ajuda do instrutor!
let opcoes = [1, 2, 3];
let indice = 0;
let opcao;
do {
    opcao = opcoes[indice];

    if (opcao === 1) {

        console.log("Ver saldo");

    } else if (opcao === 2) {

        console.log("Fazer depósito");

    } else if (opcao === 3) {

        console.log("Sair");

    }

    indice++;

} while (opcao !== 3);














