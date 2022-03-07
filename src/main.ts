import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { configEnvs } from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.setGlobalPrefix('api');
  await app.listen(configEnvs.port);
}
bootstrap();
