import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { UserProject } from './entities/user-project.entity';
import { ProjectsService } from './services/projects.service';
import { UserProjectsService } from './services/user-projects.service';
import { ProjectsController } from './controllers/projects.controller';
import { MyProjectsController } from './controllers/my-projects.controller';


@Module({
  imports: [TypeOrmModule.forFeature([Project, UserProject])],
  providers: [ProjectsService, UserProjectsService],
  exports: [ProjectsService, UserProjectsService],
  controllers: [ProjectsController, MyProjectsController]
})
export class ProjectsModule {}
