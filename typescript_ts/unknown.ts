let anyEstaDeVolta: any;
anyEstaDeVolta = 3;
anyEstaDeVolta = 'teste';
anyEstaDeVolta = true;

let stringTest: string = 'Verificar';
stringTest = anyEstaDeVolta;

let unknownValor: unknown;
unknownValor = 3;
unknownValor = 'testão';
unknownValor = true;
unknownValor = 'testinho'

let stringTest2: string = 'Agora vai';

if (typeof unknownValor === 'string'){
    stringTest2 = unknownValor;
}
