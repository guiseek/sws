import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { CrudConfigService } from '@nestjsx/crud';

// Important: load config before (!!!) you import AppModule
// https://github.com/nestjsx/crud/wiki/Controllers#global-options
CrudConfigService.load({
  routes: {
    exclude: ['createManyBase'],
  },
});

import { HttpExceptionFilter } from '@sws/shared/api/exceptions';
import { AppModule } from './app/app.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new HttpExceptionFilter());

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  const swaggerPrefix = 'docs';

  const options = new DocumentBuilder()
    .setTitle('Seek Workspace')
    .setDescription('@sws')
    .setBasePath(globalPrefix)
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup(swaggerPrefix, app, document);


  const port = process.env.port || 3333;
  await app.listen(port, () => {
    console.log('Aguardando requisições em http://localhost:' + port + '/' + globalPrefix);
    console.log('Swagger disponível em http://localhost:' + port + '/' + swaggerPrefix);
  });
}

bootstrap();
