const idade = 18;

/*if(idade >=18){
    console.log("É maior de idade");
}else {
console.log("É menor de idade");
}*/
idade >= 18 ? console.log("maior de idade") : console.log("Menor de idade")


const notaDoAluno = 9;

if(notaDoAluno >= 9){
    console.log("Excelente")
} else if (notaDoAluno >= 7 ){
console.log("Nota boa")
} else if (notaDoAluno >= 4){
    console.log("Nota média")
} else{
    console.log("Nota ruim")
}


notaDoAluno >= 9 ? console.log("Excelente"):
    notaDoAluno >= 7 ? console.log("boa"):
        notaDoAluno >= 4 ? console.log('mediana'):
            console.log("ruim")
