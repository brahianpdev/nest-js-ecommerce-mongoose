import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SharedModule } from 'src/shared/shared.module';
import { SubCategorySchema } from './schemas/subcategory.schema';
import { SubcategoryController } from './subcategory.controller';
import { SubcategoryService } from './subcategory.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'SubCategory', schema: SubCategorySchema },
    ]),
    SharedModule,
  ],
  controllers: [SubcategoryController],
  providers: [SubcategoryService],
})
export class SubcategoryModule {}
