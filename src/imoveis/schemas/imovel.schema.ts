import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ImovelDocument = HydratedDocument<Imovel>;

@Schema()
export class Imovel {
  @Prop()
  descricao: string;

  @Prop()
  dataCompra: Date;

  @Prop()
  endereco: string;
}

export const ImovelSchema = SchemaFactory.createForClass(Imovel);
