import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Project } from '../entities/project.entity';
import { ProjectsService } from '../services/projects.service';
import { ApiUseTags } from '@nestjs/swagger';

@Crud({
  model: {
    type: Project
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
    join: {
      users: {
        eager: true
      }
    }
  }
})
@ApiUseTags('projects')
@Controller('/companies/:companyId/projects')
export class ProjectsController {
  constructor(public service: ProjectsService) {}
}
