export class Autor {
    protected _nome: string;
    protected _nasc: Date;
    constructor(nome: string, nasc: Date) {
        this._nome = nome;
        this._nasc = nasc;
    }
}