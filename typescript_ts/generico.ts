function adicionaFimLista<NaoSei>(array: any[], valor: NaoSei){
    return array.map(item => item + valor);
};

console.log(adicionaFimLista([1, 2, 3], 4));