const estudante = {
  nome: 'José Silva',
  idade: 32,
  cpf: '12312312312',
  turma: 'JavaScript',
  bolsista: true,
  telefones: ['55111998988998', '5511999283298'],
  enderecos: [{
    rua: 'Rua Joseph Climber',
    numero: '45',
    complemento: 'apto 43',
},
{
    rua: 'Rua Dona Clotilde',
    numero: '71',
    complemento: null
}]
}

for(let chave in estudante) {
    const tipo = typeof estudante[chave];
    if(tipo !== 'object' && tipo !== 'function'){
        const texto = `a chave ${chave} tem o valor ${estudante[chave]}`
        console.log(texto);
    }
}
