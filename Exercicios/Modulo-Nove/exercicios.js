//Exercício 1
const nomes = ['Arthur', 'Gabriel', 'Danilo', 'Marcos', 'Moisés']

for(let i = 0; i < nomes.length; i++ ){
    console.log(nomes[i], i)
    
}





//Exercício 2

const frutas = ['Banana', 'Morango', 'Mamão', 'Melancia', 'Maça']

console.log('Listas de frutas:', frutas)

frutas.push('Kiwi');

console.log('Lista de frutas depois de adicionar Kiwi', frutas)

frutas.shift()

console.log('Frutas depois de remover uma fruta:', frutas)

frutas.splice(3, 1)
console.log('Lista de frutas depois de remove uma específica', frutas)





//Exercício 3

const cidades = ['Porto Alegre', 'Londrina', 'Rio grande', 'Canoas', 'Gravatai', 'Novo Hamburgo']

console.log('Tamanho da lista de cidades: ', cidades.length)




//Exercício 4

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 

let soma = 0; 

for (let i = 0; i < numeros.length; i++) { 

soma += numeros[i]; 

} 

console.log("Soma total: " + soma); 

//Exercício 5

let notas = [7, 10, 5, 3];

let somaNotas = 0;

for(let nota of notas){
    somaNotas += nota
}
let media = somaNotas / notas.length;

if(media >= 7){
    console.log('Aprovado')
} else {
    console.log('Reprovado!')
}
