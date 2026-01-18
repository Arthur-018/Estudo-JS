<<<<<<< HEAD
let pessoa1 ={
    nome: 'Arthur',
    idade: 18,
    profissao: 'Desenvolvedor'
}

const pessoa2 = {...pessoa1}

pessoa2.idade = 25

console.log(pessoa2)

pessoa1 = {
    ...pessoa2,
        profissao: 'Desenvolvedor sênior',
        possuiCNH: true

}

console.log(pessoa1)

const { nome, ...resto} = pessoa1

console.log(nome)
console.log(resto)

=======
let pessoa1 ={
    nome: 'Arthur',
    idade: 18,
    profissao: 'Desenvolvedor'
}

const pessoa2 = {...pessoa1}

pessoa2.idade = 25

console.log(pessoa2)

pessoa1 = {
    ...pessoa2,
        profissao: 'Desenvolvedor sênior',
        possuiCNH: true

}

console.log(pessoa1)

const { nome, ...resto} = pessoa1

console.log(nome)
console.log(resto)

>>>>>>> 87897b812eda25194bac0b11796e64a7249cac9c
