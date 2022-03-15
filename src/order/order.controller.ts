import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateOrderDTO } from './dto/create-order.dto';
import { Order } from './interfaces/order.interface';
import { OrderService } from './order.service';

@UseGuards(JwtAuthGuard)
@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  async getOrders(): Promise<Order[]> {
    return await this.orderService.getOrders();
  }

  @Post()
  async createOrder(@Req() req, @Body() order: CreateOrderDTO) {
    try {
      const id = req.params.id;

      return await this.orderService.createOrder(order, id);
    } catch (error) {
      throw new Error(error);
    }
  }
}
