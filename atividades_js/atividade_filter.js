// 1. Filtre e retorne todos os números pares de um array

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function valoresPares(array){
    return array.filter((item) => item % 2 === 0);
}

console.log(valoresPares(array));