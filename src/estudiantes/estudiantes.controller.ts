import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { EstudiantesService } from './estudiantes.service';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';

@Controller('estudiantes') // ruta base en plural
export class EstudiantesController {
  constructor(private readonly estudiantesService: EstudiantesService) {}

  @Post()
  create(@Body() data: CreateEstudianteDto) {
    return this.estudiantesService.create(data);
  }

  @Get()
  findAll() {
    return this.estudiantesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.estudiantesService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: UpdateEstudianteDto) {
    return this.estudiantesService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.estudiantesService.remove(+id);
  }
}
