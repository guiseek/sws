import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { ApiUseTags } from '@nestjs/swagger';
import { LicensesService } from '../services/licenses.service';
import { License } from '../entities/license.entity';

@Crud({
  model: {
    type: License
  },
  params: {
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
@ApiUseTags('licenses')
@Controller('/licenses')
export class LicensesController {
  constructor(public service: LicensesService) { }
}
