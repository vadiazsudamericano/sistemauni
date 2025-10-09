import { PartialType } from '@nestjs/mapped-types';
import { CreateMaestroMateriaDto } from './create-maestro-materia.dto';

export class UpdateMaestroMateriaDto extends PartialType(CreateMaestroMateriaDto) {}
