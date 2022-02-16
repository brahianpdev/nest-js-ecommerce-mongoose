import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Res,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import {
  CreateSubCategoryDTO,
  UpdateSubCategoryDTO,
} from './dto/create-subcategory.dto';
import { SubCategory } from './interfaces/subcategory.interface';
import { SubcategoryService } from './subcategory.service';

@Controller('subcategory')
export class SubcategoryController {
  constructor(private subCategoryService: SubcategoryService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(
    @Res() res,
    @Body() createSubCategoryDTO: CreateSubCategoryDTO,
  ): Promise<SubCategory> {
    try {
      const subCategory = await this.subCategoryService.createSubCategory(
        createSubCategoryDTO,
      );
      return res.json({
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
      return res.json({
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
      return res.json({
        message: 'SubCategory obtained successfully',
        subCategory,
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  @UseGuards(JwtAuthGuard)
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
      return res.json({
        message: 'SubCategory update successfully',
        subCategory,
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':subCategoryID')
  async delete(
    @Res() res,
    @Param('subCategoryID') subCategoryID: string,
  ): Promise<SubCategory> {
    try {
      const subCategory = await this.subCategoryService.deleteSubCategory(
        subCategoryID,
      );
      return res.json({
        message: 'SubCategory removed successfully',
        subCategory,
      });
    } catch (error) {
      throw new Error(error);
    }
  }
}
