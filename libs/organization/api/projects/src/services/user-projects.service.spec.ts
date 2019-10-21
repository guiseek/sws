import { Test, TestingModule } from '@nestjs/testing';
import { UserProjectsService } from './user-projects.service';

describe('UserProjectsService', () => {
  let service: UserProjectsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserProjectsService],
    }).compile();

    service = module.get<UserProjectsService>(UserProjectsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
