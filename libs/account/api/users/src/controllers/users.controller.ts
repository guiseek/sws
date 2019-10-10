import { Controller, Post, Body, Param, BadRequestException, Put } from '@nestjs/common';
import {
  Crud,
  CrudController,
  CrudRequest,
  Override,
  ParsedRequest,
} from '@nestjsx/crud';
import { User } from '../entities/user.entity';
import { UsersService } from '../users.service';
import { ChangePasswordDto } from '../dtos/change-password.dto';

@Crud({
  model: {
    type: User,
  },
  params: {
    // companyId: {
    //   field: 'companyId',
    //   type: 'number',
    // },
    id: {
      field: 'id',
      type: 'number',
      primary: true,
    },
  },
  query: {
    exclude: ['password'],
    join: {
      company: {
        exclude: ['description'],
      },
      profile: {
        eager: true,
        exclude: ['updatedAt'],
      },
    },
  },
})
@Controller('/users')
export class UsersController implements CrudController<User> {
  constructor(public service: UsersService) { }

  get base(): CrudController<User> {
    return this;
  }

  @Override('getManyBase')
  getAll(@ParsedRequest() req: CrudRequest) {
    return this.base.getManyBase(req);
  }

  @Put(':id/change-password')
  async changePassword(@Param('id') id: string, @Body() data: ChangePasswordDto) {
    try {
      return await this.service.changePassword(id, data)
    } catch (err) {
      throw new BadRequestException(err)
    }
  }
}

