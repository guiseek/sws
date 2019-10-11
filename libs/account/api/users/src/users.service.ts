import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from 'api/auth/dtos/create-user.dto';

@Injectable()
export class UsersService extends TypeOrmCrudService<User> {
  constructor(@InjectRepository(User) repo: Repository<User>) {
    super(repo);
  }
  async changePassword(id: string, { old, password }) {
    const user = await this.repo.findOne(id, {
      select: ['password']
    });

    if (user.validatePassword(old)) {
      user.password = user.hashPassword(password);
      return await this.repo.update(id, user);
    } else {
      throw new BadRequestException();
    }
  }
  async validateUser({ email, password }) {
    try {
      const user = await this.repo.findOneOrFail(
        { email },
        { select: ['id', 'email', 'password'] }
      );
      if (user.validatePassword(password)) {
        return user;
      } else {
        throw new BadRequestException('Invalid credentials');
      }
    } catch (err) {
      throw new BadRequestException('Invalid credentials');
    }
  }
  async create(user: User): Promise<any> {
    return await this.repo.insert(user);
  }
}
