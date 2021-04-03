import { Test, TestingModule } from '@nestjs/testing';
import { SortsController } from './sorts.controller';

describe('SortsController', () => {
  let controller: SortsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SortsController],
    }).compile();

    controller = module.get<SortsController>(SortsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
