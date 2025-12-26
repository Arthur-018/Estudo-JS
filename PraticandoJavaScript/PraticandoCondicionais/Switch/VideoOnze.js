const nome = "Arthur";
const nota = 9;
const faltas = 3;

const recebeBonus = (nota >= 8) && (faltas <= 2) ? `${nome} receber bônus` : `${nome} não recebe bônus`;

console.log(recebeBonus);


const user= 'premium';

switch(user){
    case 'free':
        console.log('acesso limitado');
        break;
    case 'premium':
        console.log('Acesso total ao app');
        break;
    case 'super premium':
        console.log('Acesso total ao app e bônus');
        break;
    default:
        console.log('Tipo de user desconhecido');
        break;
        
    }