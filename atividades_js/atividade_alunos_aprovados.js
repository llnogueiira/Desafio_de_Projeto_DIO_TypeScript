const alunos = [
    {
        nome: 'João',
        nota: 5,
        turma: '1B'
    },
    {
        nome: 'Sofia',
        nota: 9,
        turma: '1A' 
    },
    {
        nome: 'José',
        nota: 6,
        turma: '1C'
    },
    {
        nome: 'Miguel',
        nota: 3,
        turma: '2C'
    }
];

function alunosAprovados(array_alunos, media_alunos){
    let filtroAprovados = [];
    for(let i = 0; i < array_alunos.length; i++){
        const {nota, nome} = array_alunos[i];
        if (nota >= media_alunos){
            filtroAprovados.push(nome);
        }
    }
    return filtroAprovados;
}
console.log(alunosAprovados(alunos,5));