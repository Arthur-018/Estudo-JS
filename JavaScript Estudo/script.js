//Exercício 1
let nome = "André Arthur Toledo";
console.log(`Olá, ${nome}! Seja bem-vindo(a ao curso de JavaScript.`);

//Exercício 2
let anoAtual = 2025;
let anoNascimento = 2007;
let idade = anoAtual - anoNascimento;
console.log(`Você tem ${idade} anos`)

//Exercício 3
let cidade = "Porto Alegre";
let estado = "RS";
let pais = "Brasil";
console.log(`Você está em ${cidade}, ${estado}, ${pais}`);

//Execício 4
let temCarteira = false;
console.log(typeof temCarteira);

//Exercício 5
//Jeito que EU fiz
let saldo = 0;
let deposito = 200;
let saque = 50;
let saldoFinal = saldo + deposito - saque;
console.log(`O saldo inicial era ${saldo}, depois do deposito ficou ${deposito}, após o saque de ${saque} o saldo final ficou: ${saldoFinal}` )
/*Jeito correto 
let saldo = 0; // saldo inicial 
saldo += 200; // depósito 
saldo -= 50; // saque 
console.log("Saldo final: R$" + saldo); */


//Exercício 6
let matematica = 7;
let portugues = 10;
let ciencias = 5;
let calculo = (matematica + portugues + ciencias) / 3;
console.log(`Média final ${calculo}`)

//Exercício 7
//Jeito que eu fiz
let salario = 3000;
let calculoDois = (3000 * 10) / 100;
let aumento = calculoDois + 3000;
/* Jeito correto
let salario = 3000; 
let novoSalario = salario * 1.10; // aumento de 10% 
console.log("Após um aumento de 10%, o novo salário é R$" + novoSalario); */


console.log(`O aumento foi de ${calculoDois}, por isso seu salário ficou ${aumento}`);

//Exercício 8
//Jeito que eu fiz
let cliques = 0;
let simulaçãoCliques = cliques + 1;
let simulaçãoDois = simulaçãoCliques + 1;
let simulaçãoTes = simulaçãoDois + 1;
console.log(`O total de cliques foram ${simulaçãoTes}`);
/* Jeito correto
let cliques = 0; 
cliques++; 
cliques++; 
cliques++; 
console.log("O botão foi clicado " + cliques + " vezes."); */

//Exercício 9
const pi = 3.14;
console.log(pi);

//O erro acontece pois a variavel é uma constante, e uma constante NUNCA será mudada, ela permanecera com o mesmo valor até o final. Por isso se tentar muda-lá irá ocorrer um erro.

//Exercício 10
let nomeDez = "Arthur";
let idadeDez = 18;
let juncaoVariaveis = nomeDez + idadeDez;
console.log(juncaoVariaveis)
console.log(typeof juncaoVariaveis)