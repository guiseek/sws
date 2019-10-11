import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { environment } from '../environments/environment';
import { UsersModule } from 'api/users';
import { CompaniesModule } from 'org/companies';
import { ProjectsModule } from 'org/projects';
import { AuthModule } from 'api/auth';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    CompaniesModule,
    ProjectsModule,
    TypeOrmModule.forRootAsync({
      useFactory: () => (environment.ormConfig)
    })
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
