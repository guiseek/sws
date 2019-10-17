import { Controller, UseGuards } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';
import { Crud, CrudAuth } from '@nestjsx/crud';
import { User } from '../entities/user.entity';
import { UsersService } from '../users.service';
import { AuthGuard } from 'api/auth/guards';

@Crud({
  model: {
    type: User,
  },
  routes: {
    only: ['getOneBase', 'updateOneBase'],
  },
  params: {
    id: {
      primary: true,
      disabled: true,
    },
  },
  query: {
    join: {
      company: {
        eager: true,
      },
      profile: {
        eager: true,
      },
    },
  },
})
@CrudAuth({
  filter: (user: User) => ({
    id: user.id,
  }),
})
@ApiUseTags('me')
@Controller('me')
@UseGuards(AuthGuard)
export class MeController {
  constructor(
    public service: UsersService
  ) { }

}
