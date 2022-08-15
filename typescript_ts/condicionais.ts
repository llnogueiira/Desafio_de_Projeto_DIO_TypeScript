interface IUsuario{
    id: string;
    e_mail: string;
}

interface IAdmin extends IUsuario{
    cargo: 'gerente' | 'coordenador' | 'supervisor';
}

function redirecione(usuario: IUsuario | IAdmin){
    if ('cargo' in usuario){
        console.log('Redirecionar para a área de administração')
    }
    console.log('Redirecionar para a área do usuário')
}

const usuario_1: IUsuario = {
    id: '1',
    e_mail: 'luciano@gmail.com',
}

const usuario_2: IAdmin = {
    id: '2',
    e_mail: 'guilherme@gmail.com',
    cargo: 'gerente',
}

console.log(redirecione(usuario_2));