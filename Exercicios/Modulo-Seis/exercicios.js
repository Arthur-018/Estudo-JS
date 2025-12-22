//Exercício 1
let idade = 15;
if(idade >= 18){
    console.log("Pode comprar bebida alcolica")
} else {
    console.log("Venda proibida para menores de 18 anos")
}


//Exerício 2
let horaAtual = 5;
if(horaAtual >=6 && horaAtual <12){
    console.log("Bom dia!")
} else if(horaAtual >=12 && horaAtual <18){
    console.log("Boa tarde")
} else if(horaAtual >18 && horaAtual < 24){
    console.log("Boa noite!")
}  else if(horaAtual >= 0 && horaAtual < 6){
    console.log("Boa madrugada!")
}

//Exercício 3
let numero = 0

if(numero >0){
console.log("O número é positivo")
} else if(numero <0){
    console.log("O número é negativo")
} else{
    console.log("O número é zero")
}

//Exercício 4

let nota = 8;
if (nota >= 9){
    console.log("Nota A")
} else if(nota >= 8){
    console.log("Nota B")
} else if (nota >=6){
    console.log("Nota C")
} else if(nota >= 4){
    console.log("Nota D")
} else if (nota >=0){
    console.log("Nota E")
}

//Exercício 5
let numeroParOuImpar = 3;
numeroParOuImpar %2 == 0 ? console.log("O número é par") : console.log("O número é impar")


//Exercício 6

let opcao = 1;


switch(opcao){
    case 1:
        console.log("Cadastrar")
        break;
    case 2:
        console.log("Listar")
        break;
    case 3:
        console.log("Sair")
        break;        
}


//Exercício 7

let email = "";

if(email){
console.log("E-mail válido!")
} else {
    console.log("Preencha o campo de e-mail")
}

//Exercício 8
let senha = "ajak";

if(senha.length < 6 ){
    console.log("Senha muito curta")
} else {
    console.log("Senha válida")
}

//Exercício 9
let saldoDisponivel = 100;
let valorCompra = 200;

if(saldoDisponivel >= valorCompra){
    console.log("Compra aprovada")
} else{
    console.log("Saldo insuficiente")
}

//Exercício 10
let nome = "Arthur";
let emailDez = "arty@gmail.com";
let idadeDez = 23;

if(nome && emailDez && idadeDez != null){
    console.log("Formulário enviado com sucesso!")
}
