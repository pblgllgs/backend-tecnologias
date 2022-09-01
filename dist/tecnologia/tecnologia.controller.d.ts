import { TecnologiaService } from './tecnologia.service';
import { CreateTecnologiaDto } from './dto/create-tecnologia.dto';
import { UpdateTecnologiaDto } from './dto/update-tecnologia.dto';
import { TecnologiaResponseDto } from './dto/response-tecnologia.dto';
export declare class TecnologiaController {
    private readonly tecnologiaService;
    constructor(tecnologiaService: TecnologiaService);
    create(createTecnologiaDto: CreateTecnologiaDto): Promise<TecnologiaResponseDto>;
    findAll(options: {
        take?: number;
        skip?: number;
    }): Promise<TecnologiaResponseDto[]>;
    seed(): Promise<string>;
    findOne(id: number): Promise<import(".prisma/client").Tecnologia>;
    update(id: number, updateTecnologiaDto: UpdateTecnologiaDto): Promise<TecnologiaResponseDto>;
    remove(id: number): Promise<TecnologiaResponseDto>;
}
