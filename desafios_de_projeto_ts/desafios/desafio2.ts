// Como podemos melhorar o esse código usando TypeScript? 

enum Profissao {
    Atriz,
    Padeiro,
    Ator, 
    Garçom,
    Garçonete,
    Engenheiro,
    Médico,
    Programador,
    FreeLancer,
    Engenheira
}

interface dadosUsuario{
    nome: string,
    idade: number,
    profissao?: Profissao,
}

type dadosAdministrador = {
    nome: string,
    idade: number,
    profissao?: Profissao,
    admin: number,
}

type dadosPessoa = dadosUsuario | dadosAdministrador;

let Pessoa1: dadosUsuario = {
    nome: "Maria",
    idade: 29,
    profissao: Profissao.Atriz,
}

let Pessoa2: dadosUsuario = {
    nome: "José",
    idade: 21,
    profissao: Profissao.Garçonete,
}

let Pessoa3: dadosUsuario = {
    nome: 'Luciano',
    idade: 25,
    profissao: Profissao.Engenheiro,
}

let Pessoa4: dadosAdministrador = {
    nome: 'Lucas',
    idade: 28,
    profissao: Profissao.FreeLancer,
    admin: 2,
}

let Pessoa5: dadosPessoa = {
    nome: 'Rafaela',
    idade: 30,
    profissao: Profissao.Engenheira
}

console.log(Pessoa1);
console.log(Pessoa2);
console.log(Pessoa3);
console.log(Pessoa4);
console.log(Pessoa5);
