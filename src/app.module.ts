import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosService } from './usuarios/usuarios.service';
import { UsuariosController } from './usuarios/usuarios.controller';
import { CarrerasModule } from './carreras/carreras.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { PrismaService } from './prisma/prisma.service';
import { EstudiantesModule } from './estudiantes/estudiantes.module';
import { MaestrosModule } from './maestros/maestros.module';
import { EspecialidadesModule } from './especialidades/especialidades.module';
import { MateriasModule } from './materias/materias.module';
import { CiclosModule } from './ciclos/ciclos.module';
import { MaestroMateriaModule } from './maestro-materia/maestro-materia.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule, CarrerasModule, UsuariosModule, EstudiantesModule, MaestrosModule, EspecialidadesModule, MateriasModule, CiclosModule, MaestroMateriaModule],
  controllers: [AppController, UsuariosController],
  providers: [AppService, UsuariosService, PrismaService],
})
export class AppModule {}
