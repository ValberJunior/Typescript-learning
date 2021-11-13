// Generics Types:

function preencherLista<T>(array: any[], valor: T){
 return array.map(item =>item + valor) 
} 

preencherLista([1, 2, 3], 1);


//Geralmente quando não sabemos os valor que o argumento terá , colocamos <t>
// O tupo do array pode ser declarado como : array[] quando nao se tem o tipo certo do array, mas sabe-se que se trata de um