export class Negociacao {
    constructor(__data, __quantidade, __valor) {
        this.__data = __data;
        this.__quantidade = __quantidade;
        this.__valor = __valor;
    }
    get data() {
        return this._data;
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
    get volume() {
        return this._quantidade * this._valor;
    }
}
