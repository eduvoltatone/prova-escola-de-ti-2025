
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type comodoDocument = HydratedDocument<Comodo>;

@Schema()
export class Comodo {
  @Prop()
  name: string;
}

export const ComodoSchema = SchemaFactory.createForClass(Comodo);
