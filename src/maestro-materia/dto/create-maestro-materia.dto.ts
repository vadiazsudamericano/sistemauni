// src/maestro-materia/dto/create-maestro-materia.dto.ts

import { IsNotEmpty } from "class-validator";

    
export class CreateMaestroMateriaDto {
  @IsNotEmpty()
  maestroId!: number;

  @IsNotEmpty()
  materiaId!: number;
}
