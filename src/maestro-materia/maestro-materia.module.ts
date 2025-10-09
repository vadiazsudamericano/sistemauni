import { Module } from '@nestjs/common';
import { MaestroMateriaService } from './maestro-materia.service';
import { MaestroMateriaController } from './maestro-materia.controller';

@Module({
  controllers: [MaestroMateriaController],
  providers: [MaestroMateriaService],
})
export class MaestroMateriaModule {}
