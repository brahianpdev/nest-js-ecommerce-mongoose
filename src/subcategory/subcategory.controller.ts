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
} from '@nestjs/common';
import {
  CreateSubCategoryDTO,
  UpdateSubCategoryDTO,
} from './dto/create-subcategory.dto';
import { SubCategory } from './interfaces/subcategory.interface';
import { SubcategoryService } from './subcategory.service';

@Controller('subcategory')
export class SubcategoryController {
  constructor(private subCategoryService: SubcategoryService) {}

  @Post()
  async create(
    @Res() res,
    @Body() createSubCategoryDTO: CreateSubCategoryDTO,
  ): Promise<SubCategory> {
    try {
      const subCategory = await this.subCategoryService.createSubCategory(
        createSubCategoryDTO,
      );
      return res.status(HttpStatus.OK).json({
        message: 'Sub Category created successfully',
        subCategory,
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  @Get()
  async findAll(@Res() res): Promise<SubCategory[]> {
    try {
      const subCategory = await this.subCategoryService.findAll();
      return res.status(HttpStatus.OK).json({
        message: 'Sub Categories obtained successfully',
        subCategory,
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  @Get(':subCategoryID')
  async findById(
    @Res() res,
    @Param('subCategoryID') subCategoryID: string,
  ): Promise<SubCategory> {
    try {
      const subCategory = await this.subCategoryService.findById(subCategoryID);
      return res.status(HttpStatus.OK).json({
        message: 'SubCategory obtained successfully',
        subCategory,
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  @Put(':subCategoryID')
  async update(
    @Res() res,
    @Param('subCategoryID') subCategoryID: string,
    @Body() updateSubCategoryDTO: UpdateSubCategoryDTO,
  ): Promise<SubCategory> {
    try {
      const subCategory = await this.subCategoryService.updateSubCategory(
        subCategoryID,
        updateSubCategoryDTO,
      );
      return res.status(HttpStatus.OK).json({
        message: 'SubCategory update successfully',
        subCategory,
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  @Delete(':subCategoryID')
  async delete(
    @Res() res,
    @Param('subCategoryID') subCategoryID: string,
    @Body() updateSubCategoryDTO: UpdateSubCategoryDTO,
  ): Promise<SubCategory> {
    try {
      const subCategory = await this.subCategoryService.deleteSubCategory(
        subCategoryID,
        updateSubCategoryDTO,
      );
      return res.status(HttpStatus.OK).json({
        message: 'SubCategory removed successfully',
        subCategory,
      });
    } catch (error) {
      throw new Error(error);
    }
  }
}
