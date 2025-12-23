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