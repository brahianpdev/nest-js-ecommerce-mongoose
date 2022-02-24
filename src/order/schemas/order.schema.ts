import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OrderSchema = Order & Document;

@Schema()
export class Order {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: Boolean, default: true })
  state: boolean;

  @Prop({ type: Date, default: Date.now })
  created: Date;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
