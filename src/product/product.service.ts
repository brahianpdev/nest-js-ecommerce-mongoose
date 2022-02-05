import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Product } from './interfaces/product.interface';
import { CreateProductDTO, UpdateProductDTO } from './dto/create-product.dto';

@Injectable()
export class ProductService {
  constructor(@InjectModel('Product') private productModel: Model<Product>) {}

  async findAll(): Promise<Product[]> {
    try {
      return await this.productModel.find();
    } catch (error) {
      throw new Error(error);
    }
  }

  async findById(id: string): Promise<Product> {
    try {
      const product = await this.productModel.findById(id);
      if (!product) {
        throw new HttpException('Product not found', HttpStatus.NO_CONTENT);
      }
      return product;
    } catch (error) {
      throw new Error(error);
    }
  }

  async createProduct(productDTO: CreateProductDTO): Promise<Product> {
    try {
      const product = await this.productModel.create(productDTO);
      return await product.save();
    } catch (error) {
      throw new Error();
    }
  }

  async updateProduct(
    productID: string,
    updateProductDTO: UpdateProductDTO,
  ): Promise<Product> {
    try {
      const product = await this.productModel.findByIdAndUpdate(
        productID,
        { new: true },
        updateProductDTO,
      );

      await product.update(updateProductDTO);
      return await this.productModel.findById(productID);
    } catch (error) {
      throw new Error(error);
    }
  }

  async deleteProduct(
    productID: string,
    updateProductDTO: UpdateProductDTO,
  ): Promise<Product> {
    try {
      const user = await this.productModel.findByIdAndUpdate(
        productID,
        { state: false },
        updateProductDTO,
      );

      return user;
    } catch (error) {
      throw new Error(error);
    }
  }
}
