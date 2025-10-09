import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';

@Injectable()
export class EstudiantesService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    const data = await this.prisma.estudiante.findMany();
    return { status: 'success', data };
  }

  async findOne(id: number) {
    const estudiante = await this.prisma.estudiante.findUnique({ where: { id } });
    if (!estudiante) throw new NotFoundException('Estudiante no encontrado');
    return { status: 'success', data: estudiante };
  }

  async create(dto: CreateEstudianteDto) {
  try {
    const estudiante = await this.prisma.estudiante.create({
      data: dto,
    });
    return {
      status: 'success',
      data: estudiante,
    };
  } catch (error) {
    console.error(error);
    throw new Error('No se pudo crear el estudiante. Revisa los datos.');
  }
}
}