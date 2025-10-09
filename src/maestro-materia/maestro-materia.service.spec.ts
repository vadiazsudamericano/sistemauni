import { Test, TestingModule } from '@nestjs/testing';
import { MaestroMateriaService } from './maestro-materia.service';

describe('MaestroMateriaService', () => {
  let service: MaestroMateriaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MaestroMateriaService],
    }).compile();

    service = module.get<MaestroMateriaService>(MaestroMateriaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
