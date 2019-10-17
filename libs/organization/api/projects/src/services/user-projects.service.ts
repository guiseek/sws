import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { UserProject } from '../entities/user-project.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserProjectsService extends TypeOrmCrudService<UserProject> {
  constructor(@InjectRepository(UserProject) repo) {
    super(repo);
  }
}