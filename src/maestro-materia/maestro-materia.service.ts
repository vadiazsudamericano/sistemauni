// src/maestro-materia/maestro-materia.service.ts
import { Injectable } from '@nestjs/common';
import { CreateMaestroMateriaDto } from './dto/create-maestro-materia.dto';

@Injectable()
export class MaestroMateriaService {
  private relaciones = [
    { id: 1, maestroId: 1, materiaId: 1 },
  ];

  findAll() {
    return this.relaciones;
  }

  findOne(id: number) {
    return this.relaciones.find(r => r.id === id);
  }

  create(createMaestroMateriaDto: CreateMaestroMateriaDto) {
    const nuevaRelacion = {
      id: this.relaciones.length + 1,
      ...createMaestroMateriaDto,
    };
    this.relaciones.push(nuevaRelacion);
    return nuevaRelacion;
  }
}
