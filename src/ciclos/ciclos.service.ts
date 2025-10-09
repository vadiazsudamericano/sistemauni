// src/ciclos/ciclos.service.ts
import { Injectable } from '@nestjs/common';
import { CreateCicloDto } from './dto/create-ciclo.dto';

@Injectable()
export class CiclosService {
  private ciclos = [
    { id: 1, nombre: '2025-I' },
    { id: 2, nombre: '2025-II' },
  ];

  // Obtener todos los ciclos
  findAll() {
    return this.ciclos;
  }

  // Obtener un ciclo por id
  findOne(id: number) {
    return this.ciclos.find(c => c.id === id);
  }

  // Crear un nuevo ciclo
  create(createCicloDto: CreateCicloDto) {
    const nuevoCiclo = {
      id: this.ciclos.length + 1,
      ...createCicloDto,
    };
    this.ciclos.push(nuevoCiclo);
    return nuevoCiclo;
  }
}
