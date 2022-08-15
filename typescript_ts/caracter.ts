interface cachorro{
    nome: string;
    idade: number;
    parqueFavorito?: string;
}

type cachorroSomenteLeitura = {
    readonly [K in keyof cachorro]: cachorro[K];
}

const meuCachorro: cachorro = {
    nome: 'Lolly',
    idade: 2,
    parqueFavorito: 'Central Park',
}

class cachorrinho implements cachorro{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
    nome;
    idade;
}