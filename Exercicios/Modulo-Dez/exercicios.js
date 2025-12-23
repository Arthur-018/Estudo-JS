//Exercício 1
const objeto = {
    nome: 'Arthur',
    idade: 18,
    profissao: 'Desenvolvedor Full Stack'
}


//Exercício 2
console.log('Nome: ', objeto.nome)

//Exercício 3
objeto.idade = 19;



//Exercício 4
objeto.cidade = 'Porto Alegre';




//Exercício 5
const pessoa = {
    nome: 'André',
    idade: 20,
    nacionalidade: "Brasileiro"
}
function objetos(pessoa) {
    console.log(pessoa)
}
objetos(pessoa)



//Exercício 6
const objetoUm = {
    nome: 'Arthur',
    idade: 18,

}
const objetoDois = {
    nome: 'Danilo',
    idade: 14
}
const objetoTres = {
    nome: 'Gabriel',
    idade: 20
}

const lista = [objetoUm, objetoDois, objetoTres]

console.log('Lista: ', lista)


//Exercício 7

for (let l of lista) { 

if (l.idade >= 18) { 

console.log(`${l.nome} é maior de idade.`); 

} 

} 



//Exercício 8
 
const usuario = {
    nome: 'Arthur',
    saudacao: function(){
        console.log(`Olá, eu sou ${this.nome}`)
    }
}

usuario.saudacao()



//Exercício 9
for(const chave in objeto){
    console.log('Chave: ', chave)
    console.log('Valor: ', objeto[chave]);
    
}


//Exercício 10
let produto = {
    preco: 10,
    quantidade: 2
}   

const resultado = produto.preco * produto.quantidade;
console.log('Valor total da compra: ', resultado)


  
