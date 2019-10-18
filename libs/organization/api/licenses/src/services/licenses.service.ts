import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { License } from '../entities';

@Injectable()
export class LicensesService extends TypeOrmCrudService<License> {
  constructor(@InjectRepository(License) repo) {
    super(repo);
  }
}
