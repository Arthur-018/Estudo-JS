 
 //Estrutura do laço de repetição FOR
for(let contador = 0; contador <= 10; contador++){
console.log(`${contador}`)
}


for(let numero = 0; numero <= 15; numero++){
if(numero %2 == 0){
    console.log(`Número par encontrado ${numero}`)
}
}


for(let numero = 0; numero <= 15; numero++){
if(numero %2 > 0){
    console.log(`Número impar encontrado ${numero}`)
}
}

const palavra = "calopsita";



for(let cont = 0; cont < palavra.length; cont++) {
    console.log(palavra[cont])

}