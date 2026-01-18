<<<<<<< HEAD
const pessoa = {
    nome: 'Arthur',
    idade: 18,
    pets: ['Killua', 'Tom'],
    nacionalidade: 'Brasileiro'
}

for(const chave in pessoa){
    console.log('Chave: ', chave)
     console.log('Valor: ', pessoa[chave])

}

console.log('=====================================')

const chaves = Object.keys(pessoa)
const valores = Object.values(pessoa)


const entradas = Object.entries(pessoa)

console.log('Chaves: ', chaves)
console.log('Valores: ', valores)
=======
const pessoa = {
    nome: 'Arthur',
    idade: 18,
    pets: ['Killua', 'Tom'],
    nacionalidade: 'Brasileiro'
}

for(const chave in pessoa){
    console.log('Chave: ', chave)
     console.log('Valor: ', pessoa[chave])

}

console.log('=====================================')

const chaves = Object.keys(pessoa)
const valores = Object.values(pessoa)


const entradas = Object.entries(pessoa)

console.log('Chaves: ', chaves)
console.log('Valores: ', valores)
>>>>>>> 87897b812eda25194bac0b11796e64a7249cac9c
console.log('Entradas (chave/valor)): ', entradas) 