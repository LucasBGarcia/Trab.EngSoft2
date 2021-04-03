import prompt from "prompt-sync";
let teclado = prompt();

export class Livro {
    protected _ISBN: number;
    protected _capitulo: string;
    protected _autor: string;
    constructor(ISBN: number, capitulo: string, autor: string) {
        this._ISBN = ISBN;
        this._capitulo = capitulo;
        this._autor = autor;
    }

    
    public adicionarCapitulo(quantCap: Number): any {
        for (let i = 0; i <= quantCap; i++) {
            console.log(`Cadastro de capitulos (${i}/${quantCap})`)
            this._capitulo = teclado(`Digite o texto do capítulo: `)
        }
    }
}