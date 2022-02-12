import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateOrderDTO } from './dto/create-order.dto';
import { Order } from './interfaces/order.interface';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel('Order') private readonly orderModel: Model<Order>,
  ) {}

  async getOrders(): Promise<Order[]> {
    return await this.orderModel.find();
  }

  async createOrder(
    createOrderDTO: CreateOrderDTO,
    // userId: string,
  ): Promise<any> {
    try {
      const { products } = createOrderDTO;
      console.log(products);

      const newOrder = await this.orderModel.create(createOrderDTO);

      // const totalPrice = newOrder.products.reduce((acc, product) => {
      //   const price = product.product.price * product.quantity;
      //   return acc + price;
      // }, 0);

      // await newOrder.update({ totalPrice });

      return await newOrder.save();
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }
}
