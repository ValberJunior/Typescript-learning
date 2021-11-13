//types  < Estrutura de dados para validação

//posso juntar interfaces

interface Animal {
    nome: string;
    tipo: 'terrestre' | 'aquatico';
    domestico: boolean;
}

interface Felino extends Animal{
    visaoNoturna: boolean;
}

interface Canino extends Animal{
    porte: 'pequeno' | 'medio' | 'grande' ;
}

type Domestico = Felino & Canino;

const ANIMAL: Domestico = {
    nome: 'cachorro',
    tipo: 'terrestre',
    domestico: true,
    porte: 'medio',
    visaoNoturna: false,
}