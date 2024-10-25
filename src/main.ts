import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api')
  const configService = app.get(ConfigService)
  const port :number = configService.get<number>('port')


  app.useGlobalPipes(
    new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,      
    transformOptions: {
      enableImplicitConversion:true
    }
    })
   );


   await app.listen(port);
}
bootstrap();
