const pessoa = {
    nome: 'Arthur',
    idade: 18,
    solteiro: false,
    hobbies: ["Jogar Resident Evil", " Estudar"],
};

function mostrarInfoPessoa (pessoa){
    console.log('Informações pessoa:');
    console.log(`Nome: ${pessoa.nome}  (Tipo: ${typeof pessoa.nome})`);
    console.log(`Idade: ${pessoa.idade} (Tipo: ${typeof pessoa.idade})`);
    console.log(`Solteiro: ${pessoa.solteiro} (Tipo: ${typeof pessoa.solteiro})`);
    console.log(`Hobbies: ${pessoa.hobbies} (Tipo: ${typeof pessoa.hobbies})`);
    
    
}
    
console.log(mostrarInfoPessoa(pessoa));
