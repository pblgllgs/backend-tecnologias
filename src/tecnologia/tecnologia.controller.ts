import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { TecnologiaService } from './tecnologia.service';
import { CreateTecnologiaDto } from './dto/create-tecnologia.dto';
import { UpdateTecnologiaDto } from './dto/update-tecnologia.dto';
import { TecnologiaResponseDto } from './dto/response-tecnologia.dto';

@Controller('tecnologia')
export class TecnologiaController {
  constructor(private readonly tecnologiaService: TecnologiaService) {}

  @Post()
  create(@Body() createTecnologiaDto: CreateTecnologiaDto) {
    return this.tecnologiaService.create(createTecnologiaDto);
  }

  @Get()
  findAll(
    @Query() options: { take?: number; skip?: number },
  ): Promise<TecnologiaResponseDto[]> {
    return this.tecnologiaService.findAll(+options.take, +options.skip);
  }

  @Get('seed')
  seed() {
    return this.tecnologiaService.seed();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.tecnologiaService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTecnologiaDto: UpdateTecnologiaDto,
  ): Promise<TecnologiaResponseDto> {
    return this.tecnologiaService.update(id, updateTecnologiaDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.tecnologiaService.remove(id);
  }
}
