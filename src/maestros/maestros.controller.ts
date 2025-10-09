// src/maestros/maestros.controller.ts
import { Body, Controller, Get, Param, Post, ParseIntPipe } from '@nestjs/common';
import { MaestrosService } from './maestros.service';
import { CreateMaestroDto } from './dto/create-maestro.dto';

@Controller('maestros')
export class MaestrosController {
  constructor(private readonly maestrosService: MaestrosService) {}

  @Get()
  findAll() {
    return this.maestrosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.maestrosService.findOne(id);
  }

  @Post()
  create(@Body() createMaestroDto: CreateMaestroDto) {
    return this.maestrosService.create(createMaestroDto);
  }
}
