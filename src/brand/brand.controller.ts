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
import { BrandService } from './brand.service';
import { CreateBrandDTO, UpdateBrandDTO } from './dto/create-brand.dto';
import { Brand } from './interfaces/brand.interface';

@Controller('brand')
export class BrandController {
  constructor(private brandService: BrandService) {}

  @Post()
  async create(
    @Res() res,
    @Body() createBrandDTO: CreateBrandDTO,
  ): Promise<Brand> {
    try {
      const brand = await this.brandService.createBrand(createBrandDTO);
      return res.status(HttpStatus.OK).json({
        message: 'Brand created successfully',
        brand,
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  @Get()
  async findAll(@Res() res): Promise<Brand[]> {
    try {
      const brand = await this.brandService.findAll();
      return res.status(HttpStatus.OK).json({
        message: 'Brand obtained successfully',
        brand,
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  @Get(':brandID')
  async findById(
    @Res() res,
    @Param('brandID') brandID: string,
  ): Promise<Brand> {
    try {
      const brand = await this.brandService.findById(brandID);
      return res.status(HttpStatus.OK).json({
        message: 'Brand obtained successfully',
        brand,
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  @Put(':brandID')
  async update(
    @Res() res,
    @Param('brandID') brandID: string,
    @Body() updateBrandDTO: UpdateBrandDTO,
  ): Promise<Brand> {
    try {
      const brand = await this.brandService.updateBrand(
        brandID,
        updateBrandDTO,
      );
      return res.status(HttpStatus.OK).json({
        message: 'Brand update successfully',
        brand,
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  @Delete(':brandID')
  async delete(
    @Res() res,
    @Param('brandID') brandID: string,
    @Body() updateBrandDTO: UpdateBrandDTO,
  ): Promise<Brand> {
    try {
      const brand = await this.brandService.deleteBrand(
        brandID,
        updateBrandDTO,
      );
      return res.status(HttpStatus.OK).json({
        message: 'Brand removed successfully',
        brand,
      });
    } catch (error) {
      throw new Error(error);
    }
  }
}
