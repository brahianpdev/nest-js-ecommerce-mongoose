import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CategorySchema = Category & Document;

@Schema()
export class Category {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: Boolean, default: true })
  state: boolean;

  @Prop({ type: Date, default: Date.now })
  createdAt: Date;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
