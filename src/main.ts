import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

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

   const config = new DocumentBuilder()
    .setTitle('Api RestFull Manage Books')
    .setDescription('Manage Books EndPoints')
    .setVersion('1.0')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

   await app.listen(port);
}
bootstrap();
