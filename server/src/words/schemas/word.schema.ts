import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type WordDocument = HydratedDocument<Word>;

@Schema()
export class Word {
  @Prop({ required: true })
  word: string;

  @Prop({ required: true })
  translate: number;
}

export const WordSchema = SchemaFactory.createForClass(Word);
