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

function saudacao (pessoa){
    console.log('Olá, ', pessoa.nome)
}

saudacao(pessoa)
