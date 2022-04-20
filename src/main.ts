import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { AppLogger } from './infraestructure/config/app-logger.service';
import { EnvVariables } from './infraestructure/config/environment/env-variables.enum';
import { FilterExceptions } from './infraestructure/exceptions/filter-exceptions';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = await app.resolve(AppLogger);
  const configService = app.get(ConfigService);

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new FilterExceptions(logger));
  app.enableCors();
  app.setGlobalPrefix(configService.get(EnvVariables.APPLICATION_CONTEXT_PATH));

  /* const swaggerOptions = new DocumentBuilder()
    .setTitle('Crud api de carreras')
    .setVersion('1.0')
    .build(); */

  /* const swaggerDocument = SwaggerModule.createDocument(app, swaggerOptions);
  SwaggerModule.setup('/api/doc', app, swaggerDocument); */

  await app.listen(configService.get(EnvVariables.APPLICATION_PORT));
}
bootstrap();
