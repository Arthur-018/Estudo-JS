

//Formas que eu fiz

/*for(let numeroImpar = 0; numeroImpar <= 100; numeroImpar++){
    if(numeroImpar %2 > 0){
        console.log(`Númros impares: ${numeroImpar}`)
    }
}*/
/*
for (let numeroPar = 0; numeroPar <=100; numeroPar++){
    if(numeroPar %2 == 0){
        console.log(`Números pares ${numeroPar}`)
    }
}*/
/*
let numero = 0;
while(numero <= 100){
    if(numero %2 == 0){
        console.log(`Números pares ${numero}`)
    } else {
        console.log(`Números impares ${numero}`)
    }
    numero++
}*/

//Como foi mostrado no vídeo
let totalNumeroPares = 0;
let totalNumeroImpares = 0;

for(let contador = 0; contador <= 100; contador++){
    if(contador %2 == 0){
        totalNumeroPares++
    } else{
        totalNumeroImpares++
    }
}

console.log(`Total números pares: ${totalNumeroPares}`);
console.log(`Total números impares: ${totalNumeroImpares}`);