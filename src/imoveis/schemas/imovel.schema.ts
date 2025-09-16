import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Comodo, ComodoSchema } from './comodo.schema';

export type ImovelDocument = HydratedDocument<Imovel>;

@Schema()
export class Imovel {
  @Prop()
  descricao: string;

  @Prop()
  dataCompra: Date;

  @Prop()
  endereco: string;

  @Prop({ type: [ComodoSchema] })
  comodos: Comodo[];
}

export const ImovelSchema = SchemaFactory.createForClass(Imovel);