import { Test, TestingModule } from '@nestjs/testing';
import { MyProjectsController } from './my-projects.controller';

describe('MyProjects Controller', () => {
  let controller: MyProjectsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MyProjectsController],
    }).compile();

    controller = module.get<MyProjectsController>(MyProjectsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
