//Exercício 1
let idade = 18;
if(idade >= 18){
    console.log(`Você tem ${idade} anos, e é maior de idade`);
} else if (idade < 18){
    console.log(`Você tem ${idade} anos e é menor idade`);
}

//Exercício 2
let notaUm = 7;
let notaDois = 7.5;
let media = (notaUm + notaDois) /2;

if(media >= 7){
    console.log("Aprovado")
} else{
    console.log("Reprovado");
}


//Exercício 3 
let valorCompra = 35.90;
let valorPago = 50;
let troco = valorPago - valorCompra;
console.log(`Valor a ser devolvido: ${troco}`)

//Exercício 4
/* let senha = prompt("Digite uma senha")
let senhaDois = prompt("Digite outra senha")

if(senha == senhaDois){
    alert(`A primeira senha é igual a segunda ${senha}`)
} else {
    alert(`As senhas são diferentes`)
} */

//Exercício 5
let totalAulas = 80;
let faltas = 40;
let calculo = (totalAulas * faltas) / 100;

if(calculo >= 25){
    console.log(`Você teve ${calculo}% de faltas, então está reprovado!`)
} else {
    console.log(`Você tem ${calculo}% de faltas, então está aprovado!`)
}

//Exercício 6
let temLogin = false;
let temSenha = false;

if(temLogin == true && temSenha == true){
    console.log("Você pode acessar o sistema!")
} else if(temLogin == false && temSenha == true){
    console.log("Você não tem login!")
} else if(temLogin == true && temSenha == false){
    console.log("Você não tem senha!")
} else if (temLogin == false && temSenha ==false){
    console.log("Você não pode acessar o sistema!")
}

//Exercício 7
let disponivel = false;

if(!disponivel){
    console.log("Está disponivel!");
}

//Exercício 8
let numeroUm = 8;
let numeroDois = 8;
if(numeroUm %2 == 0 && numeroDois %2 == 0  && numeroUm == numeroDois){
    console.log("Os números são pares e iguais!")
} else {
    console.log("Os números não atendem todos os resquisitos!")
}




//Exercício 9
let porcentagem = 15;
let total = 120;
let calculoDois = total * porcentagem / 100;

console.log(`15% de 120 é igual a ${calculoDois}`);

//Exercício 10
let multiplicacao = 2 + 3 * 5;

console.log(`O resultado do calculo é ${multiplicacao}`);
console.log("A multiplicação aconteceu primeiro que a soma por que a soma não está em parentêses, isso é uma regra matemática que se aplica a calculo na programação");