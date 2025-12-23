const frutas = ['Maça', 'Banana', 'Goiaba']

const maisFrutas = ['Uva', 'Morango', 'Melancia']

const clone = [...frutas]

const todasAsFrutas = [...frutas, ...maisFrutas]

frutas.push('Pitanga')

console.log(frutas);
console.log(maisFrutas);
console.log(clone);
console.log(todasAsFrutas);

const [pri0meira, segunda, ...restante] = todasAsFrutas

console.log(primeira);
console.log(segunda);
console.log(restante);

