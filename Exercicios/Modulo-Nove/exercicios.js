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




//Exercício 6

let nomesUsuario = ['Arthur', 'Gabriel', 'Danilo', 'Moisés'];

nomesUsuario.forEach((nomes)=>{
    console.log('Olá ', nomes)
})




//Exercício 7

let preco = [7.9, 3.86, 2.6, 8,2]

let comDesconto = preco.map(function(preco){
    return preco * 0.9;
})
console.log('Preço com 10% de desconto: ', comDesconto)




//Exercício 8
let idades = [18, 20, 12, 16, 29, 22]

    let maior = idades.filter(function(idade){
        return idade >= 18;
    })
    console.log('Maior de idade: ', maior )




//Exercício 9
let carrinho = [50, 30, 20]; 

let total = carrinho.reduce(function(acumulador, item) { 

return acumulador + item; 

}, 0); 

let comCupom = total * 0.8; 

console.log("Total com desconto de 20%: R$" + comCupom.toFixed(2)); 


//Exercício 10

let tarefas = ["[ ] Estudar", "[x] Lavar a louça", "[ ] Ir ao mercado", "[x] Caminhar", "[ ] Dormir"]; 

let pendentes = tarefas.filter(function(tarefa) { 

return tarefa.startsWith("[ ]"); 

}); 

console.log("Tarefas pendentes:", pendentes); 