import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService extends TypeOrmCrudService<User> {
  constructor(@InjectRepository(User) repo: Repository<User>) {
    super(repo);
  }
  async changePassword(id: string, { old, password }) {
    const user = await this.repo.findOne(id, {
      select: ['password']
    })
    
    if (
      user.hashPassword(old) === user.password
    ) {
      user.password = user.hashPassword(password)
      return await this.repo.update(id, user)
    } else {
      throw new BadRequestException()
    }
  }
}

