// src/maestros/dto/create-maestro.dto.ts
import { IsNotEmpty } from 'class-validator';
export class CreateMaestroDto {
  nombre!: string;
  apellido!: string;
  especialidadId!: number;
  carreraId!: number;
}

