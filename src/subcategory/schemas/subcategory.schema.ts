import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SubCategorySchema = SubCategory & Document;

@Schema()
export class SubCategory {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: Boolean, default: true })
  state: boolean;

  @Prop({ type: Date, required: Date.now })
  created: Date;
}

export const SubCategorySchema = SchemaFactory.createForClass(SubCategory);
