import { Test, TestingModule } from '@nestjs/testing';
import { UserLicensesService } from './user-licenses.service';

describe('UserLicensesService', () => {
  let service: UserLicensesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserLicensesService],
    }).compile();

    service = module.get<UserLicensesService>(UserLicensesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
