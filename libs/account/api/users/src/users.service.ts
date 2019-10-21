import * as crypto from 'crypto';
import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';


@Injectable()
export class UsersService extends TypeOrmCrudService<User> {
  constructor(@InjectRepository(User) repo: Repository<User>) {
    super(repo)
  }
  async changePassword(id: string, { old, password }) {
    const user = await this.repo.findOne(id, {
      select: ['password']
    })

    if (user.validatePassword(old)) {
      user.password = user.hashPassword(password)
      return await this.repo.update(id, user)
    } else {
      throw new BadRequestException()
    }
  }
  async validateUser({ email, password }) {
    try {
      const user = await this.repo.findOneOrFail(
        { email },
        { select: ['id', 'email', 'password'] }
      );
      if (user.validatePassword(password)) {
        return user
      } else {
        throw new BadRequestException('Invalid credentials')
      }
    } catch (err) {
      throw new BadRequestException('Invalid credentials')
    }
  }
  async create(user: User): Promise<any> {
    return await this.repo.insert(user);
  }
  async forgotPassword({ email, lastPassword }) {
    const user = await this.repo.findOne({ email })
    if (!user) {
      throw new BadRequestException()
    }
    const expires = Date.now() + 86400000
    const token = crypto.randomBytes(20).toString('hex')
    return await this.repo.save({
      id: user.id,
      resetPassword: { token, expires: new Date(expires) }
    })
  }
  async resetPassword({ token, password }) {
    const now = new Date()
    const user = await this.repo.findOne({
      where: {
        resetPassword: { token },
        select: [
          'resetPassword.token',
          'resetPassword.expires'
        ]
      }
    })

    if (!user) {
      throw new BadRequestException('Token inválido')
    } else {
      if (user.resetPassword.expires < now) {
        throw new BadRequestException('Token expirou')
      }
      user.password = user.hashPassword(password)
      user.resetPassword = { token: null, expires: null }

      return await this.repo.save(user)
    }
  }
}
