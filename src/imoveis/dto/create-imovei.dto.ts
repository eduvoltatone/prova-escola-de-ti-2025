export class CreateComodoDto {
  readonly nome: string;
}

export class CreateImoveiDto {
  readonly descricao: string;
  readonly dataCompra: Date;
  readonly endereco: string;
  readonly comodos: CreateComodoDto[];
}