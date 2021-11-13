// interfaces < Contrato para implementar classes

//Interfaces são como as classes em javascript

interface IAnimal {
    nome: string;
    tipo: 'terrestre' | 'aquático';
    executarSom(volume: number): void;
}

interface IFelinos extends IAnimal{
    visaoNoturna: boolean;
}

const animal : IAnimal = {
    nome: 'Elefante',
    tipo: 'terrestre',
    executarSom : (volume)=>(`${volume}dB`)
}

animal.executarSom(60)

const felino : IFelinos = {
    nome: 'Leão',
    tipo: 'terrestre',
    visaoNoturna: true,
    executarSom : (volume)=>(`${volume}dB`)
}