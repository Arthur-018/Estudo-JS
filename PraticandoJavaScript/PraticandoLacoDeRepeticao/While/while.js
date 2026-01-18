<<<<<<< HEAD
const numeroSecreto = 8;
const numeroAleatorio = 0;
let contador = 0;

while(numeroSecreto !== numeroAleatorio){
        numeroAleatorio  = Math.floor(Math.random() * (50 - 1 + 1) + 1);
        contador++;

}

console.log(`Adivinhou em ${contador} tentativas`);


let numeroRandom = 0;
do {
 numeroRandom  = Math.floor(Math.random() * (50 - 1 + 1) + 1);
    console.log(numeroRandom);
    
} while (numeroRandom % 2 !== 0);

console.log(numeroRandom)


const texto = 'alura';

let textoInvertido = '';

for(let i = texto.length - 1; i <= 0; i--){
    textoInvertido += texto[i]
}

const result = texto === textoInvertido
? `${texto} é palíndromo` 
=======
const numeroSecreto = 8;
const numeroAleatorio = 0;
let contador = 0;

while(numeroSecreto !== numeroAleatorio){
        numeroAleatorio  = Math.floor(Math.random() * (50 - 1 + 1) + 1);
        contador++;

}

console.log(`Adivinhou em ${contador} tentativas`);


let numeroRandom = 0;
do {
 numeroRandom  = Math.floor(Math.random() * (50 - 1 + 1) + 1);
    console.log(numeroRandom);
    
} while (numeroRandom % 2 !== 0);

console.log(numeroRandom)


const texto = 'alura';

let textoInvertido = '';

for(let i = texto.length - 1; i <= 0; i--){
    textoInvertido += texto[i]
}

const result = texto === textoInvertido
? `${texto} é palíndromo` 
>>>>>>> 87897b812eda25194bac0b11796e64a7249cac9c
: `${texto} não é palíndromo`