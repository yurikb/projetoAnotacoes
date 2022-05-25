export class Categoria {
  idCategoria?: number;
  descricaoCategoria?: string;
  flAtivo?: boolean;

  constructor(obj: Partial<Categoria>) {
    Object.assign(this, obj);
  }
}
