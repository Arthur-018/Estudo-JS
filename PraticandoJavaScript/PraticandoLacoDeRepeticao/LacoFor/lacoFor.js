<<<<<<< HEAD
for(let i = 1; i <= 30; i++){
    const numero = Math.floor(Math.random() * (50 - 1 + 1) + 1);
    if(numero === 15){
        console.log(`${numero} em ${i} tentativas`);
        break;
    }
}


let contador = 0;

for(let i = 1; i <= 30; i++){
    const numero = Math.floor(Math.random() * (50 - 1 + 1) + 1);
    if(numero  % 5 === 0){
        continue;
    }
    contador++;
}

=======
for(let i = 1; i <= 30; i++){
    const numero = Math.floor(Math.random() * (50 - 1 + 1) + 1);
    if(numero === 15){
        console.log(`${numero} em ${i} tentativas`);
        break;
    }
}


let contador = 0;

for(let i = 1; i <= 30; i++){
    const numero = Math.floor(Math.random() * (50 - 1 + 1) + 1);
    if(numero  % 5 === 0){
        continue;
    }
    contador++;
}

>>>>>>> 87897b812eda25194bac0b11796e64a7249cac9c
console.log(contador)