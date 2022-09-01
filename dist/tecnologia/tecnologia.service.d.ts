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
export declare class TecnologiaService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createTecnologiaDto: CreateTecnologiaParams): Promise<TecnologiaResponseDto>;
    findAll(take?: number, skip?: number): Promise<TecnologiaResponseDto[]>;
    findOne(id: number): Promise<import(".prisma/client").Tecnologia>;
    update(id: number, data: UpdateTecnologiaParams): Promise<TecnologiaResponseDto>;
    remove(id: number): Promise<TecnologiaResponseDto>;
    normalize({ name, description, owner }: UpdateTecnologiaParams): {
        name: string;
        description: string;
        owner: string;
    };
    seed(): Promise<string>;
}
export {};
