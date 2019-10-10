import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsController } from './controllers/projects.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { UserProject } from './entities/user-project.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Project, UserProject])],
  providers: [ProjectsService],
  exports: [ProjectsService],
  controllers: [ProjectsController],
})
export class ProjectsModule {}
