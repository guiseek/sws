import { Test, TestingModule } from '@nestjs/testing';
import { MyLicensesController } from './my-licenses.controller';

describe('MyLicenses Controller', () => {
  let controller: MyLicensesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MyLicensesController],
    }).compile();

    controller = module.get<MyLicensesController>(MyLicensesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
