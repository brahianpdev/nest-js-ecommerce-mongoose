import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MulterModule } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';

import { config } from './config';

import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { CategoryModule } from './category/category.module';
import { CommentModule } from './comment/comment.module';
import { BrandModule } from './brand/brand.module';
import { SubcategoryModule } from './subcategory/subcategory.module';
import { OrderModule } from './order/order.module';
import { MailModule } from './mail/mail.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { UploadController } from './upload/upload.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(config.mongoURL, {
      useNewUrlParser: true,
    }),
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    MulterModule.register({
      dest: './files',
      storage: memoryStorage(),
    }),
    AuthModule,
    UserModule,
    ProductModule,
    CategoryModule,
    CommentModule,
    BrandModule,
    SubcategoryModule,
    OrderModule,
    MailModule,
    CloudinaryModule,
  ],
  controllers: [AppController, UploadController],
  providers: [AppService],
})
export class AppModule {}
