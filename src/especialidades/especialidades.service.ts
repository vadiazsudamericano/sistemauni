// src/especialidades/especialidades.service.ts
import { Injectable } from '@nestjs/common';
import { CreateEspecialidadDto } from './dto/create-especialidade.dto';
@Injectable()
export class EspecialidadesService {
  private especialidades = [
    { id: 1, nombre: 'Ingeniería en Software' },
  ];

  findAll() {
    return this.especialidades;
  }

  findOne(id: number) {
    return this.especialidades.find(e => e.id === id);
  }

  create(createEspecialidadDto: CreateEspecialidadDto) {
    const nuevaEspecialidad = {
      id: this.especialidades.length + 1,
      ...createEspecialidadDto,
    };
    this.especialidades.push(nuevaEspecialidad);
    return nuevaEspecialidad;
  }
}
