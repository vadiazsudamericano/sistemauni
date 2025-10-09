// src/estudiantes/dto/create-estudiante.dto.ts

import { IsNotEmpty, IsEmail } from "class-validator";

    
export class CreateEstudianteDto {
  @IsNotEmpty() 
  nombre!: string;

  @IsEmail()
  email!: string;

  @IsNotEmpty()
  carreraId!: number;
}
