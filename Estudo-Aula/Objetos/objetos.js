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
    autor: 'Stephen King',
    paginas: 1700
}

livro.publicado = true
livro.idioma = [
    'Ingles', 'Português' , 'Espanhol'
]
    

console.log('Título: ', livro.titulo)
console.log('Autor: ', livro.autor)
console.log('Páginas: ', livro.paginas)

console.log('Livro foi publicado? ', livro.publicado)
console.log('Idiomas do livro: ', livro.idioma)