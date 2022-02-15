import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  CreateSubCategoryDTO,
  UpdateSubCategoryDTO,
} from './dto/create-subcategory.dto';
import { SubCategory } from './interfaces/subcategory.interface';

@Injectable()
export class SubcategoryService {
  constructor(
    @InjectModel('SubCategory') private subCategoryModel: Model<SubCategory>,
  ) {}

  async findAll(): Promise<SubCategory[]> {
    try {
      return await this.subCategoryModel.find();
    } catch (error) {
      throw new Error(error);
    }
  }

  async findById(id: string): Promise<SubCategory> {
    try {
      const subCategory = await this.subCategoryModel.findById(id);

      if (!subCategory) {
        throw new HttpException(
          'Sub category not found',
          HttpStatus.NO_CONTENT,
        );
      }

      return subCategory;
    } catch (error) {
      throw new Error(error);
    }
  }

  async createSubCategory(
    createSubCategoryDTO: CreateSubCategoryDTO,
  ): Promise<SubCategory> {
    try {
      const subCategory = await this.subCategoryModel.create(
        createSubCategoryDTO,
      );
      return await subCategory.save();
    } catch (error) {
      throw new Error(error);
    }
  }

  async updateSubCategory(
    subCategoryID: string,
    updateSubCategoryDTO: UpdateSubCategoryDTO,
  ): Promise<SubCategory> {
    try {
      const subCategory = await this.subCategoryModel.findByIdAndUpdate(
        subCategoryID,
        { new: true },
        updateSubCategoryDTO,
      );

      return subCategory;
    } catch (error) {
      throw new Error(error);
    }
  }

  async deleteSubCategory(
    subCategoryID: string,
    updateSubCategoryDTO: UpdateSubCategoryDTO,
  ): Promise<SubCategory> {
    try {
      const subCategory = await this.subCategoryModel.findByIdAndUpdate(
        subCategoryID,
        { state: false },
        updateSubCategoryDTO,
      );

      return subCategory;
    } catch (error) {
      throw new Error(error);
    }
  }
}
