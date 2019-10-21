import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { InjectRepository } from '@nestjs/typeorm';
import { UserLicense } from '../entities';

@Injectable()
export class UserLicensesService extends TypeOrmCrudService<UserLicense> {
  constructor(@InjectRepository(UserLicense) repo) {
    super(repo);
  }
}