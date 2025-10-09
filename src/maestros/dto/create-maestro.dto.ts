// src/maestros/dto/create-maestro.dto.ts
import { IsNotEmpty } from 'class-validator';
export class CreateMaestroDto {
  @IsNotEmpty()
  nombre!: string;

  @IsNotEmpty()
  apellido!: string;

  @IsNotEmpty()
  especialidadId!: number;
}
