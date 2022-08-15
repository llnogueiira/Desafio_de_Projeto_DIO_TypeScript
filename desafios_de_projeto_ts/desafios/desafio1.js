/*
Como podemos rodar isso em um arquivo .ts sem causar erros?

let employee = {};
employee.code = 10;
employee.name = 'Luciano';
*/
// Primeira opção ( >>sem<< restringir os tipos de entradas para 'code' e 'name'):
var employee1 = {
    code: 25,
    name: 'Luciano'
};
// Segunda opção (restringindo os tipos de entradas para 'code' e 'name'):
var employee2 = {
    code: 18,
    name: 'John'
};
;
// Terceira opção:
var employee3 = {
    code: 1,
    name: 'Cooper'
};
// Quarta opção:
var employee4 = {
    code: 16,
    name: 'Bruna',
    nacionalidade: 'Brasileira'
};
// Quinta opçaõ:
var funcionarioObj = {};
funcionarioObj.code = 10;
funcionarioObj.name = 'João';
// Sexta opçaõ:
var funcionarioObj2 = {
    code: 23,
    name: 'José'
};
// Sétima opção:
var funcionarioObj3 = {};
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
