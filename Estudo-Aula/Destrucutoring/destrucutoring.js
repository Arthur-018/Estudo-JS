<<<<<<< HEAD
const pessoa = {
    nome: 'Arthur',
    idade: 18,
    profissao: 'Estudante'
}

// console.log(pessoa.nome);
// console.log(pessoa.idade);

const {nome, idade} = pessoa

console.log(nome);
console.log(idade);

function saudacao ({nome, idade}){
    console.log('Olá, ', nome)
    if( idade > 18){
        console.log('Maior de idade')
    }
}

saudacao(pessoa)


const frutas = ['uva', 'banana']

const [primeira, segunda] = frutas

//const primeira = frutas[0]
=======
const pessoa = {
    nome: 'Arthur',
    idade: 18,
    profissao: 'Estudante'
}

// console.log(pessoa.nome);
// console.log(pessoa.idade);

const {nome, idade} = pessoa

console.log(nome);
console.log(idade);

function saudacao ({nome, idade}){
    console.log('Olá, ', nome)
    if( idade > 18){
        console.log('Maior de idade')
    }
}

saudacao(pessoa)


const frutas = ['uva', 'banana']

const [primeira, segunda] = frutas

//const primeira = frutas[0]
>>>>>>> 87897b812eda25194bac0b11796e64a7249cac9c
// const segunda = frutas[1]