import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from 'src/product/interfaces/product.interface';
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

  async createOrder(createOrderDTO: CreateOrderDTO): Promise<Order> {
    try {
      const newOrder = await this.orderModel.create(createOrderDTO);
      const populatedOrder: CreateOrderDTO<Product> = await newOrder.populate({
        path: 'products',
        populate: {
          path: 'product',
        },
      });

      const totalPrice = populatedOrder.products.reduce((acc, product) => {
        const price = product.product.price * product.quantity;
        return acc + price;
      }, 0);
      newOrder.totalPrice = totalPrice;
      return await newOrder.save();
    } catch (error) {
      throw new Error(error);
    }
  }
}
