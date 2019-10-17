import { Controller } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';
import { Crud, CrudAuth } from '@nestjsx/crud';
import { UserProject } from '../entities/user-project.entity';
import { User } from 'api/users/entities/user.entity';
import { UserProjectsService } from '../services/user-projects.service';


@Crud({
  model: {
    type: UserProject,
  },
  params: {
    projectId: {
      field: 'projectId',
      type: 'number',
      primary: true,
    },
  },
  query: {
    join: {
      project: {
        eager: true,
      },
    },
  },
})
@CrudAuth({
  filter: (user: User) => ({
    userId: (u) => {
      console.log('u: ', u)
      console.log(u.id)
      return {
        userId: user.id
      }
    },
  }),
  persist: (user: User) => ({
    userId: user.id,
  }),
})
@ApiUseTags('my-projects')
@Controller('my-projects')
export class MyProjectsController {
  constructor(
    public service: UserProjectsService
  ) { }
}
