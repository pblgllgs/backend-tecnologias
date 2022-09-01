"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TecnologiaService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const response_tecnologia_dto_1 = require("./dto/response-tecnologia.dto");
const tecnologias = [
    {
        name: 'Nest',
        owner: 'Nest',
        image: 'https://res.cloudinary.com/pblgllgs/image/upload/v1661916109/tecnologias/nest-logo400x400_ctl0us.png',
        description: 'Nest. JS is a framework that helps build Node. JS server-side applications. The Nest framework is built using TypeScript which allows developers to build highly scalable and testable applications',
    },
    {
        name: 'Docker',
        owner: 'Docker Inc',
        image: 'https://res.cloudinary.com/pblgllgs/image/upload/v1661916346/tecnologias/docker-logo400x400_qq0eqo.png',
        description: 'Docker es un proyecto de código abierto que automatiza el despliegue de aplicaciones dentro de contenedores de software, proporcionando una capa adicional de abstracción y automatización de virtualización de aplicaciones en múltiples sistemas operativos',
    },
    {
        name: 'Nextjs',
        owner: 'Nextjs vercel',
        image: 'https://res.cloudinary.com/pblgllgs/image/upload/v1661916682/tecnologias/logo-nextjs400x400_sozpsm.png',
        description: 'Next.js es un marco de desarrollo web de código abierto creado por Vercel que permite aplicaciones web basadas en React con representación del lado del servidor y generación de sitios web estáticos',
    },
    {
        name: 'PostgresSQL',
        owner: 'Postgres',
        image: 'https://res.cloudinary.com/pblgllgs/image/upload/v1661916852/tecnologias/postgres-logo400x400_kdqwek.jpg',
        description: 'PostgreSQL, también llamado Postgres, es un sistema de gestión de bases de datos relacional orientado a objetos y de código abierto, publicado bajo la licencia PostgreSQL, ​ similar a la BSD o la MIT',
    },
    {
        name: 'React',
        owner: 'Facebook',
        image: 'https://res.cloudinary.com/pblgllgs/image/upload/v1661990925/tecnologias/reactlogo400x400_hja4va.png',
        description: 'React es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página. Es mantenido por Facebook y la comunidad de software libre. En el proyecto hay más de mil desarrolladores libres',
    },
    {
        name: 'Nodejs',
        owner: 'Node.js Developers',
        image: 'https://res.cloudinary.com/pblgllgs/image/upload/v1661991048/tecnologias/node-js-logo_y2nb4h.jpg',
        description: 'Node.js es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor basado en el lenguaje de programación JavaScript, asíncrono, con E/S de datos en una arquitectura orientada a eventos y basado en el motor V8 de Google',
    },
    {
        name: 'Visual studio code',
        owner: 'Microsoft',
        image: 'https://res.cloudinary.com/pblgllgs/image/upload/v1661991193/tecnologias/vscode-logo400x400_kqd01o.jpg',
        description: 'Visual Studio Code es un editor de código fuente desarrollado por Microsoft para Windows, Linux, macOS y Web. Incluye soporte para la depuración, control integrado de Git, resaltado de sintaxis, finalización inteligente de código, fragmentos y refactorización de código',
    },
    {
        name: 'Postman',
        owner: 'Postman Inc',
        image: 'https://res.cloudinary.com/pblgllgs/image/upload/v1661991366/tecnologias/postman-logo400x400_noqeke.png',
        description: 'Postman es una plataforma de API para que los desarrolladores diseñen, construyan, prueben e iteren sus API. En abril de 2022, Postman informa que tiene más de 20 millones de usuarios registrados y 75 000 API abiertas, lo que, según afirma, constituye el centro de API público más grande del mundo',
    },
    {
        name: 'Ubuntu',
        owner: 'Canonical Ltd',
        image: 'https://res.cloudinary.com/pblgllgs/image/upload/v1661991497/tecnologias/ubuntu-logo400x400_ugtlk0.png',
        description: 'Ubuntu es una distribución Linux basada en Debian GNU/Linux, que incluye principalmente software libre y de código abierto. Puede utilizarse en ordenadores y servidores. Está orientado al usuario promedio, con un fuerte enfoque en la facilidad de uso y en mejorar la experiencia del usuario',
    },
    {
        name: 'ZSH',
        owner: 'Paul Falstad',
        image: 'https://res.cloudinary.com/pblgllgs/image/upload/v1661991615/tecnologias/zsh-logo400x400_pq73uh.jpg',
        description: 'Z shell es un potente intérprete de comandos para sistemas operativos de tipo Unix, como por ejemplo los BSD o GNU/Linux.​ La primera versión de zsh fue escrita por Paul Falstad en 1990, cuando era estudiante en la Universidad de Princeton. Zsh se diseñó para poder usarse interactivamente',
    },
];
let TecnologiaService = class TecnologiaService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(createTecnologiaDto) {
        const newTecnologia = await this.prismaService.tecnologia.create({
            data: createTecnologiaDto,
        });
        return new response_tecnologia_dto_1.TecnologiaResponseDto(newTecnologia);
    }
    async findAll(take, skip) {
        if (!take) {
            take = 4;
        }
        if (!skip) {
            skip = 0;
        }
        const tecs = await this.prismaService.tecnologia.findMany({
            skip,
            take,
        });
        return tecs.map((tec) => {
            return new response_tecnologia_dto_1.TecnologiaResponseDto(tec);
        });
    }
    async findOne(id) {
        return await this.prismaService.tecnologia.findUnique({
            where: {
                id,
            },
        });
    }
    async update(id, data) {
        const tecnologia = await this.prismaService.tecnologia.findUnique({
            where: {
                id,
            },
        });
        if (!tecnologia) {
            throw new common_1.NotFoundException(`No se encontro el recurso con id: ${id}`);
        }
        const updatedTecnologia = await this.prismaService.tecnologia.update({
            where: {
                id,
            },
            data: Object.assign({}, data),
        });
        return new response_tecnologia_dto_1.TecnologiaResponseDto(updatedTecnologia);
    }
    async remove(id) {
        try {
            const tecnologia = this.prismaService.tecnologia.findUnique({
                where: {
                    id,
                },
            });
            if (!tecnologia) {
                throw new common_1.NotFoundException(`No existe la tecnologia con id: ${id}`);
            }
            const deletedTecnologia = await this.prismaService.tecnologia.delete({
                where: {
                    id,
                },
            });
            return new response_tecnologia_dto_1.TecnologiaResponseDto(deletedTecnologia);
        }
        catch (error) {
            console.log(error.meta);
            throw new common_1.NotFoundException(`Error al eliminar un elemento, revisar logs`);
        }
    }
    normalize({ name, description, owner }) {
        return {
            name,
            description,
            owner,
        };
    }
    async seed() {
        await this.prismaService.tecnologia.createMany({
            data: tecnologias,
        });
        return `Se restablecio la DB`;
    }
};
TecnologiaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TecnologiaService);
exports.TecnologiaService = TecnologiaService;
//# sourceMappingURL=tecnologia.service.js.map