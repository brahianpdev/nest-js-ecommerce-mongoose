import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateOrderDTO } from './dto/create-order.dto';
import { Order } from './interfaces/order.interface';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  // @UseGuards(AuthGuard('jwt'))
  getOrders(): Promise<Order[]> {
    return this.orderService.getOrders();
  }

  @Post()
  // @UseGuards(AuthGuard('jwt'))
  createOrder(
    @Body() order: CreateOrderDTO,
    // @UserDecorator() { id }: User,
  ): Promise<Order> {
    const newOrder = this.orderService.createOrder(order);
    console.log(newOrder);
    return newOrder;
  }
}
