// Como podemos melhorar o esse código usando TypeScript? 
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Atriz"] = 0] = "Atriz";
    Profissao[Profissao["Padeiro"] = 1] = "Padeiro";
    Profissao[Profissao["Ator"] = 2] = "Ator";
    Profissao[Profissao["Gar\u00E7om"] = 3] = "Gar\u00E7om";
    Profissao[Profissao["Gar\u00E7onete"] = 4] = "Gar\u00E7onete";
    Profissao[Profissao["Engenheiro"] = 5] = "Engenheiro";
    Profissao[Profissao["M\u00E9dico"] = 6] = "M\u00E9dico";
    Profissao[Profissao["Programador"] = 7] = "Programador";
    Profissao[Profissao["FreeLancer"] = 8] = "FreeLancer";
    Profissao[Profissao["Engenheira"] = 9] = "Engenheira";
})(Profissao || (Profissao = {}));
var Pessoa1 = {
    nome: "Maria",
    idade: 29,
    profissao: Profissao.Atriz
};
var Pessoa2 = {
    nome: "José",
    idade: 21,
    profissao: Profissao.Garçonete
};
var Pessoa3 = {
    nome: 'Luciano',
    idade: 25,
    profissao: Profissao.Engenheiro
};
var Pessoa4 = {
    nome: 'Lucas',
    idade: 28,
    profissao: Profissao.FreeLancer,
    admin: 2
};
var Pessoa5 = {
    nome: 'Rafaela',
    idade: 30,
    profissao: Profissao.Engenheira
};
console.log(Pessoa1);
console.log(Pessoa2);
console.log(Pessoa3);
console.log(Pessoa4);
console.log(Pessoa5);
