import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
  UseGuards,
} from '@nestjs/common';

import { Product } from './interfaces/product.interface';
import { CreateProductDTO, UpdateProductDTO } from './dto/create-product.dto';
import { ProductService } from './product.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(
    @Res() res,
    @Body() createProductDTO: CreateProductDTO,
  ): Promise<Product> {
    try {
      const product = await this.productService.createProduct(createProductDTO);
      return res.status(HttpStatus.OK).json({
        message: 'Product created successfully',
        product,
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  @Get()
  async findAll(@Res() res): Promise<Product[]> {
    try {
      const products = await this.productService.findAll();
      return res.status(HttpStatus.OK).json({
        message: 'Products obtained successfully',
        products,
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  @Get(':productID')
  async findById(
    @Res() res,
    @Param('productID') productID: string,
  ): Promise<Product> {
    try {
      const product = await this.productService.findById(productID);
      return res.status(HttpStatus.OK).json({
        message: 'Product obtained successfully',
        product,
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  @UseGuards(JwtAuthGuard)
  @Put(':productID')
  async update(
    @Res() res,
    @Param('productID') productID: string,
    @Body() updateProductDTO: UpdateProductDTO,
  ): Promise<Product> {
    try {
      const product = await this.productService.updateProduct(
        productID,
        updateProductDTO,
      );
      return res.status(HttpStatus.OK).json({
        message: 'Product update successfully',
        product,
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':productID')
  async delete(
    @Res() res,
    @Param('productID') productID: string,
  ): Promise<Product> {
    try {
      const product = await this.productService.deleteProduct(productID);
      return res.status(HttpStatus.OK).json({
        message: 'Product removed successfully',
        product,
      });
    } catch (error) {
      throw new Error(error);
    }
  }
}
