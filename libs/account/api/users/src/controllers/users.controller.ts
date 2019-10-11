import {
  Controller,
  Post,
  Body,
  Param,
  BadRequestException,
  Put,
  UseGuards
} from '@nestjs/common';
import {
  Crud,
  CrudController,
  CrudRequest,
  Override,
  ParsedRequest,
  Feature
} from '@nestjsx/crud';
import { User } from '../entities/user.entity';
import { UsersService } from '../users.service';
import { ChangePasswordDto } from '../dtos/change-password.dto';
import { ApiUseTags } from '@nestjs/swagger';
import { RolesGuard } from 'api/auth/guards';
import { AuthGuard } from '@nestjs/passport';

@Crud({
  model: {
    type: User
  },
  params: {
    companyId: {
      field: 'companyId',
      type: 'number'
    },
    id: {
      field: 'id',
      type: 'number',
      primary: true
    }
  },
  query: {
    exclude: ['password'],
    join: {
      company: {
        exclude: ['description'],
        // eager: true,
      },
      usersProjects: {
        eager: true
      },
      // 'company.projects': {
      //   alias: 'pr',
      //   exclude: ['description'],
      // },
      profile: {
        eager: true,
        exclude: ['updatedAt']
      }
    }
  }
})
@ApiUseTags('users')
@Controller('/users')
@UseGuards(RolesGuard)
@Feature('Users')
export class UsersController implements CrudController<User> {
  constructor(public service: UsersService) {}

  get base(): CrudController<User> {
    return this;
  }

  @Override('getManyBase')
  getAll(@ParsedRequest() req: CrudRequest) {
    return this.base.getManyBase(req);
  }
  @UseGuards(AuthGuard('jwt'))
  @Override('getOneBase')
  getOneAndDoStuff(@ParsedRequest() req: CrudRequest) {
    console.log(req['user']);
    return this.base.getOneBase(req);
  }

  @Put(':id/change-password')
  async changePassword(
    @Param('id') id: string,
    @Body() data: ChangePasswordDto
  ) {
    try {
      return await this.service.changePassword(id, data);
    } catch (err) {
      throw new BadRequestException(err);
    }
  }
}
