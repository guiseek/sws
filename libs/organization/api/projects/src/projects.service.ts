import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Project } from './entities';

@Injectable()
export class ProjectsService extends TypeOrmCrudService<Project> {
  constructor(@InjectRepository(Project) repo) {
    super(repo);
  }
}

