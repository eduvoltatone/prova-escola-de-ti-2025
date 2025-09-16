import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ComodoDocument = HydratedDocument<Comodo>;

@Schema()
export class Comodo {
  @Prop()
  nome: string;
}

export const ComodoSchema = SchemaFactory.createForClass(Comodo);