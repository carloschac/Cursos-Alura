export class Negociacao {
  private _data: Date;
  private _quantidade: number;
  private _valor: number;

  constructor(
    private __data: Date,
    private __quantidade: number,
    private __valor: number
  ) {}

  get data(): Date {
    return this._data;
  }
  get quantidade(): number {
    return this._quantidade;
  }
  get valor(): number {
    return this._valor;
  }

  get volume(): number {
    return this._quantidade * this._valor;
  }
}
