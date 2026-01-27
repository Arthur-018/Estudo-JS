async function buscaEndereco(cep) {
    var mensagemErrom = document.getElementById('erro')
    mensagemErrom.innerHTML = "";
    try {
        var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var consultaCepConvertida = await consultaCep.json();
        if (consultaCepConvertida.erro) {
            throw Error ('Cep não existente!');
        }
        var cidade = document.getElementById('cidade');
        var logradoura = document.getElementById('endereco');
        var estado = document.getElementById('estado');
        var bairro = document.getElementById('bairro')

        cidade.value = consultaCepConvertida.localidade;
        logradoura.value = consultaCepConvertida.logradouro;
        estado.value = consultaCepConvertida.uf;
        bairro.value = consultaCepConvertida.bairro;

        console.log(consultaCepConvertida);
        return consultaCepConvertida;
    } catch (erro) {
        mensagemErrom.innerHTML = `<p>CEP inválido. Tente novamente!</p>`
        console.log(erro);

    }
}


var cep = document.getElementById('cep')
cep.addEventListener("focusout", () => buscaEndereco(cep.value));
