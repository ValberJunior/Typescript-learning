//ReadOnly e Private

interface CACHORRO {
    nome: String;
    idade: number;
    parqueFavorito?: String;
}

//para adicionar o readOnly, preciso usar o type

type CachorroSomenteLeitura = {
    readonly[K in keyof CACHORRO]-?: CACHORRO[K];
}

class MeuCachorro implements CachorroSomenteLeitura {
    idade;
    nome;
    parqueFavorito;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

const cao = new MeuCachorro('Rex', 14);