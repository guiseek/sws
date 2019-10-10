import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';

import { CompaniesService } from '../companies.service';
import { Company } from '../entities/company.entity';


@Crud({
  model: {
    type: Company,
  },
  query: {
    join: {
      users: {},
      projects: {},
    },
  },
})
@Controller('companies')
export class CompaniesController {
  constructor(public service: CompaniesService) { }
}
