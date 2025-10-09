import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCarreraDto } from './dto/create-carrera.dto';

@Injectable()
export class CarrerasService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    const data = await this.prisma.carrera.findMany();
    return { status: 'success', data };
  }

  async findOne(id: number) {
    const carrera = await this.prisma.carrera.findUnique({ where: { id } });
    if (!carrera) throw new NotFoundException('Carrera no encontrada');
    return { status: 'success', data: carrera };
  }

  async create(dto: CreateCarreraDto) {
  try {
    const carrera = await this.prisma.carrera.create({ data: dto });
    return { status: 'success', data: carrera };
  } catch (error) {
    console.error(error);
    throw new Error('No se pudo crear la carrera. Verifica que el nombre no esté repetido.');
  }
}
}
