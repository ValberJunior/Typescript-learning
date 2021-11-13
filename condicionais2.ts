interface Usuário {
    id: String;
    email: String;
    cargo?: 'gerente' | 'coordenador' | 'supervisor' | 'funcionario';
}

// Colocando uma ? no método cargo, eu informo que ele é opcional

function redirecionamento(usuario: Usuário){
    if(usuario.cargo){
        //redirecionar(usuário.cargo)
    }
    //Se não, redirecionar para a área de visitantes

}