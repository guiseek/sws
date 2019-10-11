import { Controller, UseGuards } from '@nestjs/common';
import { Crud, Feature, CrudController } from '@nestjsx/crud';

import { CompaniesService } from '../companies.service';
import { Company } from '../entities/company.entity';
import { ApiUseTags, ApiBearerAuth } from '@nestjs/swagger';
import { RolesGuard } from 'api/auth/guards/roles.guard';
import { AuthGuard } from '@nestjs/passport';

@Crud({
  model: {
    type: Company
  },
  query: {
    join: {
      users: {
        eager: true
      },
      projects: {}
    }
  }
})
@ApiUseTags('companies')
@ApiBearerAuth()
@Controller('companies')
// @UseGuards(RolesGuard)
@UseGuards(AuthGuard('jwt'), RolesGuard)
@Feature('Companies')
export class CompaniesController implements CrudController<Company> {
  constructor(public service: CompaniesService) {}
}
