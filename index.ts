import $ from 'jquery';

$.fn.extend({
    novaFuncao() {
        console.log('TESTE');
    }
});

$('body').novaFuncao();