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
      return await this.productModel
        .find()
        .populate('category')
        .populate('owner');
    } catch (error) {
      throw new Error(error);
    }
  }

  async findById(id: string): Promise<Product> {
    try {
      const product = await this.productModel
        .findById(id)
        // .populate('category')
        .populate('owner');
      if (!product) {
        throw new HttpException('Product not found', HttpStatus.NO_CONTENT);
      }
      return product;
    } catch (error) {
      throw new Error(error);
    }
  }

  async createProduct(createProductDTO: CreateProductDTO): Promise<Product> {
    try {
      const product = await this.productModel.create(createProductDTO);
      return await product.save();
    } catch (error) {
      throw new Error(error);
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
      return await this.productModel.findById(productID).populate('category');
    } catch (error) {
      throw new Error(error);
    }
  }

  async deleteProduct(
    productID: string,
    updateProductDTO: UpdateProductDTO,
  ): Promise<Product> {
    try {
      const product = await this.productModel.findByIdAndUpdate(
        productID,
        { state: false },
        updateProductDTO,
      );

      return product;
    } catch (error) {
      throw new Error(error);
    }
  }
}
