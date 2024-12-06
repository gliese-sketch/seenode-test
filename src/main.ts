import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(8080, '0.0.0.0');
  console.log('Application is running on http://0.0.0.0:8080');
}
bootstrap();
