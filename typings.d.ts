//Definir os types gerais da aplicação

interface Estudante {
    nome: String;
    idade: number;
}

interface Estudante {
    serie: String;
}

// Se tiverem o mesmo nome, será somado as duas interfaces


//exemplo de importação

import $ from 'jquery';

$.fn.extend({
    novaFuncao() {
        console.log('Chamou');
    }
});