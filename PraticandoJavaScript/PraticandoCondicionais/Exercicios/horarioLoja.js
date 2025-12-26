const diaSemana = 2;

if(diaSemana == 1 || diaSemana == 2 || diaSemana == 3 || diaSemana == 4 || diaSemana == 5){
 console.log('A loja está aberta no horário normal: 9h às 18')
} else if(diaSemana == 0 || diaSemana == 6) {
    console.log('A loja está aberta em horário especial: 10h às 14h')
}