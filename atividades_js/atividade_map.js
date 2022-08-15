// 1. Pratique a sintaxe de multiplicação de números utilizando o parâmetro >> this << de um objeto criado por você.

const maca ={
    value: 2
}
const laranja ={
    value: 3
}

function mapComThis(array, thisArg){
    return array.map(function(item){
        return item * this.value;
    }, thisArg);
}

const nums = [1, 2, 3];

console.log('this -> maçã', mapComThis(nums, maca));
console.log('this -> laranja', mapComThis(nums, laranja));

// 2. Pratique a sintaxe de multiplicação de números de um objeto criado por você.
function mapSemThis(array){
    return array.map((item) => item * 20);
}

console.log('semThis ->',mapSemThis(nums));
console.log('nums ->',(nums));