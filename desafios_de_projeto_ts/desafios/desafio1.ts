/* 
Como podemos rodar isso em um arquivo .ts sem causar erros? 

let employee = {};
employee.code = 10;
employee.name = 'Luciano'; 
*/

// Primeira opção ( >>sem<< restringir os tipos de entradas para 'code' e 'name'):
let employee1 = {
    code: 25,
    name: 'Luciano',
};

// Segunda opção (restringindo os tipos de entradas para 'code' e 'name'):
let employee2: {code:number, name: string} = {
    code: 18,
    name: 'John',
};

// Declarando a Interface para ser utilizada posteriormente. (Realizando a 'tipagem' dos dados de entrada):
interface IEmployee {
    code: number,
    name: string,
};

interface INacionalidade extends IEmployee {
    nacionalidade: string,
}

// Terceira opção:
let employee3: IEmployee = {
    code: 1,
    name: 'Cooper',
}

// Quarta opção:
let employee4: INacionalidade = {
    code: 16,
    name: 'Bruna',
    nacionalidade: 'Brasileira',
}

// Quinta opçaõ:
const funcionarioObj = {} as IEmployee;
funcionarioObj.code = 10;
funcionarioObj.name = 'João';

// Sexta opçaõ:
const funcionarioObj2: IEmployee = {
    code: 23,
    name: 'José',
}

// Sétima opção:
const funcionarioObj3 = {} as INacionalidade;
funcionarioObj3.code = 18;
funcionarioObj3.name = 'Johnny';
funcionarioObj3.nacionalidade = 'Americano';

// Imprimir todos os resultados na tela:
console.log(employee1);
console.log(employee2);
console.log(employee3);
console.log(employee4);
console.log(funcionarioObj);
console.log(funcionarioObj2);
console.log(funcionarioObj3);