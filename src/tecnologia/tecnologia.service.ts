import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { TecnologiaResponseDto } from './dto/response-tecnologia.dto';

interface UpdateTecnologiaParams {
  name?: string;
  description?: string;
  owner?: string;
  image?: string;
}

interface CreateTecnologiaParams {
  name: string;
  description: string;
  owner: string;
  image: string;
}

@Injectable()
export class TecnologiaService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(
    createTecnologiaDto: CreateTecnologiaParams,
  ): Promise<TecnologiaResponseDto> {
    const newTecnologia = await this.prismaService.tecnologia.create({
      data: createTecnologiaDto,
    });
    return new TecnologiaResponseDto(newTecnologia);
  }

  async findAll(
    take?: number,
    skip?: number,
  ): Promise<TecnologiaResponseDto[]> {
    if (!take) {
      take = 2;
    }
    if (!skip) {
      skip = 0;
    }
    const tecs = await this.prismaService.tecnologia.findMany({
      skip,
      take,
    });
    return tecs.map((tec) => {
      return new TecnologiaResponseDto(tec);
    });
  }

  async findOne(id: number) {
    return await this.prismaService.tecnologia.findUnique({
      where: {
        id,
      },
    });
  }

  async update(
    id: number,
    data: UpdateTecnologiaParams,
  ): Promise<TecnologiaResponseDto> {
    const tecnologia = await this.prismaService.tecnologia.findUnique({
      where: {
        id,
      },
    });
    if (!tecnologia) {
      throw new NotFoundException(`No se encontro el recurso con id: ${id}`);
    }

    const updatedTecnologia = await this.prismaService.tecnologia.update({
      where: {
        id,
      },
      data: {
        ...data,
      },
    });
    return new TecnologiaResponseDto(updatedTecnologia);
  }

  async remove(id: number) {
    try {
      const tecnologia = this.prismaService.tecnologia.findUnique({
        where: {
          id,
        },
      });
      if (!tecnologia) {
        throw new NotFoundException(`No existe la tecnologia con id: ${id}`);
      }
      const deletedTecnologia = await this.prismaService.tecnologia.delete({
        where: {
          id,
        },
      });
      return new TecnologiaResponseDto(deletedTecnologia);
    } catch (error) {
      console.log(error.meta);
      throw new NotFoundException(
        `Error al eliminar un elemento, revisar logs`,
      );
    }
  }

  normalize({ name, description, owner }: UpdateTecnologiaParams) {
    return {
      name,
      description,
      owner,
    };
  }
}
