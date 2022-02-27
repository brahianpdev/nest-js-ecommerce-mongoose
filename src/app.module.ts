import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
import { config } from './config';

import { ProductModule } from './product/product.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { CategoryModule } from './category/category.module';
import { CommentModule } from './comment/comment.module';
import { BrandModule } from './brand/brand.module';
import { SubcategoryModule } from './subcategory/subcategory.module';
import { OrderModule } from './order/order.module';
import { MailModule } from './mail/mail.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(config.mongoURL, {
      useNewUrlParser: true,
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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
