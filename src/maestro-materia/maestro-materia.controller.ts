// src/maestro-materia/maestro-materia.controller.ts
import { Body, Controller, Get, Param, Post, ParseIntPipe } from '@nestjs/common';
import { MaestroMateriaService } from './maestro-materia.service';
import { CreateMaestroMateriaDto } from './dto/create-maestro-materia.dto';

@Controller('maestro-materia')
export class MaestroMateriaController {
  constructor(private readonly maestroMateriaService: MaestroMateriaService) {}

  @Get()
  findAll() {
    return this.maestroMateriaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.maestroMateriaService.findOne(id);
  }

  @Post()
  create(@Body() createMaestroMateriaDto: CreateMaestroMateriaDto) {
    return this.maestroMateriaService.create(createMaestroMateriaDto);
  }
}
