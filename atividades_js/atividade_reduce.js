// 1. Some todos os números de um array.
function somaNumeros(array){
    return array.reduce(function(prev, current){
        return prev + current;
    }, 0);
}

const array = [1, 2, 3, 4];

console.log('Soma de todos os números de um array ->',somaNumeros(array));


// 2. Crie uma função que recebe uma lista de preços e um número representando o saldo disponível. Calcule qual será o saldo final após subtrair todos os preços da lista enviada. 

let saldoDisponivel = 1000;
let gastos = [20, 40, 25, 15, 400];

function calculaGasto(arr){
    return arr.reduce(function(prev, current){
        return prev + current;
    }, 0);
}

function novoSaldo(saldo, gasto){
    return saldo - gasto;
};

console.log(novoSaldo(saldoDisponivel, calculaGasto(gastos)));

// Também, podemos fazer da seguinte forma:

function calculaNovoSaldo(saldoAtual, arrayGastos){
    return arrayGastos.reduce(function(prev, curr){
        return prev - curr;
    }, saldoAtual);
};

console.log(calculaNovoSaldo(saldoDisponivel, gastos));