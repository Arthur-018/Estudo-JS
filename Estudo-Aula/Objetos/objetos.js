const pessoa = {
    nome: 'Arthur',
    idade: 18,
    temCNH: false
}

pessoa.sobrenome = 'Toledo'

console.log('Nome: ', pessoa.nome)
console.log('Sobrenome: ', pessoa.sobrenome)

const livro = {
    titulo: 'It a coisa',
    paginas: 1700
}

livro.publicado = true
livro.idioma = [
    'Ingles', 'Português' , 'Espanhol'
]
    
livro.idioma.push('Mandarim')
livro.idioma.push('Francês')

console.log('Livro antes: ', livro)

delete livro.paginas

console.log('Livro depois: ', livro)

console.log('Autor do livro: ', livro['autor'])

const autor = {
    nome: 'Stephen King',
    nacionalidade: 'Canadense',
    idade: 57,
    livros: [livro]
}

console.log('Autor: ', autor)

livro.autor = autor

console.log(livro)

livro.autor.nome
livro.autor.nacionalidade