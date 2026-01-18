let celcius = prompt("Digite a temperatura em celcius para ser convertida para fahrenheit");
let multiplicador = 1.8;
let calculo = (celcius *multiplicador) + 32;
alert(`Convertido celcius para fahrenheit: ${calculo}`);

let fahrenheit = prompt("Digite a temperatura em fahrenheit para ser convertida");

let conversorFah = (fahrenheit - 32) * 5 / 9;

alert(`Convertido fahrenheit para celcius ${conversorFah}`);
