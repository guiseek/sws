import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { CrudConfigService } from '@nestjsx/crud';
import { USER_REQUEST_KEY } from 'api/auth/config/constants';

// Important: load config before (!!!) you import AppModule
// https://github.com/nestjsx/crud/wiki/Controllers#global-options
CrudConfigService.load({
  auth: {
    property: USER_REQUEST_KEY
  },
  routes: {
    exclude: ['createManyBase']
  }
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
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup(swaggerPrefix, app, document);

  // Schemes.paths = document.paths
  setTimeout(() => {
    console.table(document.paths['/companies'])
  }, 1500)
  //   console.log(
  //     // JSON.stringify(document.paths['/companies'])
  //   )
  // }, 1000)

  const port = process.env.port || 3333;
  await app.listen(port, () => {
    console.log(
      'Aguardando requisições em http://localhost:' + port + '/' + globalPrefix
    );
    console.log(
      'Swagger disponível em http://localhost:' + port + '/' + swaggerPrefix
    );
  });
}

bootstrap();
