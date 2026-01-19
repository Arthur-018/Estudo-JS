const pessoa = {
    nome: 'Arthur',
    idade: 18,
    solteiro: false,
    hobbies: ["Jogar Resident Evil", " Estudar"],
    endereco: {
        rua: 'Rua Gilberto',
        cidade: 'Porto Alegre',
        estado: 'RS'
    },

};

function mostrarInfoPessoa(pessoa) {
    console.log('Informações pessoa:');
    console.log(`Nome: ${pessoa.nome}  (Tipo: ${typeof pessoa.nome})`);
    console.log(`Idade: ${pessoa.idade} (Tipo: ${typeof pessoa.idade})`);
    console.log(`Solteiro: ${pessoa.solteiro} (Tipo: ${typeof pessoa.solteiro})`);
    console.log(`Hobbies: ${pessoa.hobbies} (Tipo: ${typeof pessoa.hobbies})`);
    console.log(`Rua: ${pessoa.endereco.rua}`);
    console.log(`Rua: ${pessoa.endereco.cidade}`);
    console.log(`Rua: ${pessoa.endereco.estado}`);


}



console.log(mostrarInfoPessoa(pessoa));
