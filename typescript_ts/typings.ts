interface IPessoa{
    nome: string;
    idade: number;
    nacionalidade: string;
}

interface IBrasileiro extends Omit<IPessoa, 'nacionalidade'>{}

const brasileiro: IBrasileiro = {
    nome: 'Luciano',
    idade: 25,
}