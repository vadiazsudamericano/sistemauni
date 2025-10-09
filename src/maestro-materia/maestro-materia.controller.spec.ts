import { Test, TestingModule } from '@nestjs/testing';
import { MaestroMateriaController } from './maestro-materia.controller';
import { MaestroMateriaService } from './maestro-materia.service';

describe('MaestroMateriaController', () => {
  let controller: MaestroMateriaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MaestroMateriaController],
      providers: [MaestroMateriaService],
    }).compile();

    controller = module.get<MaestroMateriaController>(MaestroMateriaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
