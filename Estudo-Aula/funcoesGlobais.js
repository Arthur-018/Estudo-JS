function saudacao(){
    console.log(`olá, tudo bem?`);
}

setTimeout(saudacao, 5000) // ms

let contador = 0;

const id = setInterval(() => {
    contador++
    console.log(`Tempo decorrido ${contador}`)

    if(contador == 10){
        clearInterval(id)
    }
}, 1000)