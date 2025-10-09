import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUsuarioDto } from './create-usuario.dto';

@Injectable()
export class UsuariosService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    const data = await this.prisma.usuario.findMany();
    return { status: 'success', data };
  }

  async findOne(id: number) {
    const usuario = await this.prisma.usuario.findUnique({ where: { id } });
    if (!usuario) throw new NotFoundException('Usuario no encontrado');
    return { status: 'success', data: usuario };
  }

  async create(dto: CreateUsuarioDto) {
    const usuario = await this.prisma.usuario.create({ data: dto });
    return { status: 'success', data: usuario };
  }
}
