interface IUsuário {
    id: String;
    email: String;
}

interface IAdmin extends IUsuário{
    cargo: 'gerente' | 'coordenador' | 'supervisor';
}

function redirecione(usuario: IUsuário | IAdmin){

    if('cargo' in usuario){
        //redirecionar para a area de admin
    }
    
    //Senão, redirecionar para a área de usuário
}