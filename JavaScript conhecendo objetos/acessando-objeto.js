<<<<<<< HEAD
const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '121212121212',
    turma: 'JavaScript'
}
estudante.nome //josé

function exibeInfoEstudante(objEstudante, infoEstudante){
    return objEstudante[infoEstudante];
}

console.log(estudante.pet);
console.log(estudante['pet']);



console.log(estudante['nome']);
console.log(estudante['cpf']);



console.log(exibeInfoEstudante(estudante, 'nome'))
=======
const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '121212121212',
    turma: 'JavaScript'
}
estudante.nome //josé

function exibeInfoEstudante(objEstudante, infoEstudante){
    return objEstudante[infoEstudante];
}

console.log(estudante.pet);
console.log(estudante['pet']);



console.log(estudante['nome']);
console.log(estudante['cpf']);



console.log(exibeInfoEstudante(estudante, 'nome'))
>>>>>>> 87897b812eda25194bac0b11796e64a7249cac9c
console.log(exibeInfoEstudante(estudante, 'cpf'))