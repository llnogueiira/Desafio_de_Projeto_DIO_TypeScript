//console.log('Estou vinculado ao index.html')

let button = document.getElementById('button');
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');

function somarEntradas(num1, num2){
    if (typeof num1 === "number" && typeof num2 === "number"){
        return (num1) + (num2);
    }
    return Number(num1) + Number(num2);
}

button.addEventListener("click", () => {
    console.log(somarEntradas(input1.value, input2.value));
});