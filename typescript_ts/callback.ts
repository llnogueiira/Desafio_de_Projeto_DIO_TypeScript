function somarValoresNumTratar(num1: number, num2: number, callback: (num_1: number) => number): number{
    let resultado = num1 + num2;
    return callback(resultado);
}

function aoQuadrado(num: number): number{
    return num * num;
}

function divPorEleMesmo(num: number): number{
    return num / num;
}

console.log(somarValoresNumTratar(1, 3, aoQuadrado));
console.log(somarValoresNumTratar(1, 3, divPorEleMesmo));