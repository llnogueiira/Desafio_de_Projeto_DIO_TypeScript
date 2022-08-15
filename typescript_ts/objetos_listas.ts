const pessoa = {
    nome: 'Mariana',
    idade: 28,
    profissao: 'Desenvolvedora',
}

const andre: {nome: string, idade: number, profissao: string} = {
    nome: 'Andre',
    idade: 25,
    profissao: 'Pintor',
}

const paula: {nome: string, idade: number, profissao: string} = {
    nome: 'Paula',
    idade: 22,
    profissao: 'Professora',
}

enum Profissao{
    Professora,
    Atriz,
    Desenvolvedora,
    Jogadora,
    Artista,
    Engenheira
}

interface IPessoa {
    nome: string,
    idade: number,
    profissao?: Profissao,
}

interface IEstudante extends IPessoa {
    materias: string[],
}

const vanessa: IPessoa = {
    nome: 'Vanessa',
    idade: 18,
    profissao: Profissao.Jogadora,
}

const jessica: IEstudante = {
    nome: 'Jessica',
    idade: 20,
    profissao: Profissao.Atriz,
    materias: ['Matematica', 'Portugues', 'Programação', 'Geografia'],
}

const monica: IEstudante = {
    nome: 'Monica',
    idade: 20,
    materias: ['Portugues', 'Programação'],
}

function listar(lista: string[]){
    for(const item of lista){
        console.log('- ', item);
    }
}

listar(jessica.materias)