// src/maestros/maestros.service.ts
import { Injectable } from '@nestjs/common';
import { CreateMaestroDto } from './dto/create-maestro.dto';

@Injectable()
export class MaestrosService {
  private maestros = [
    { id: 1, nombre: 'Carlos', apellido: 'Lopez', especialidadId: 1 },
  ];

  findAll() {
    return this.maestros;
  }

  findOne(id: number) {
    return this.maestros.find(m => m.id === id);
  }

  create(createMaestroDto: CreateMaestroDto) {
    const nuevoMaestro = {
      id: this.maestros.length + 1,
      ...createMaestroDto,
    };
    this.maestros.push(nuevoMaestro);
    return nuevoMaestro;
  }
}
