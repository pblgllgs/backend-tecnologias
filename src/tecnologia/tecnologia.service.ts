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

// interface Tecno {
//   id: number;
//   name: string;
//   owner: string;
//   image: string;
//   description: string;
//   createdAt: string;
//   updatedAt: string;
// }

// interface Tecnos {
//   tecnologias: Tecno[];
// }

const tecnologias = [
  {
    name: 'Nest',
    owner: 'Nest',
    image:
      'https://res.cloudinary.com/pblgllgs/image/upload/v1661916109/tecnologias/nest-logo400x400_ctl0us.png',
    description:
      'Nest. JS is a framework that helps build Node. JS server-side applications. The Nest framework is built using TypeScript which allows developers to build highly scalable and testable applications',
  },
  {
    name: 'Docker',
    owner: 'Docker Inc',
    image:
      'https://res.cloudinary.com/pblgllgs/image/upload/v1661916346/tecnologias/docker-logo400x400_qq0eqo.png',
    description:
      'Docker es un proyecto de código abierto que automatiza el despliegue de aplicaciones dentro de contenedores de software, proporcionando una capa adicional de abstracción y automatización de virtualización de aplicaciones en múltiples sistemas operativos',
  },
  {
    name: 'Nextjs',
    owner: 'Nextjs vercel',
    image:
      'https://res.cloudinary.com/pblgllgs/image/upload/v1661916682/tecnologias/logo-nextjs400x400_sozpsm.png',
    description:
      'Next.js es un marco de desarrollo web de código abierto creado por Vercel que permite aplicaciones web basadas en React con representación del lado del servidor y generación de sitios web estáticos',
  },
  {
    name: 'PostgresSQL',
    owner: 'Postgres',
    image:
      'https://res.cloudinary.com/pblgllgs/image/upload/v1661916852/tecnologias/postgres-logo400x400_kdqwek.jpg',
    description:
      'PostgreSQL, también llamado Postgres, es un sistema de gestión de bases de datos relacional orientado a objetos y de código abierto, publicado bajo la licencia PostgreSQL, ​ similar a la BSD o la MIT',
  },
  {
    name: 'React',
    owner: 'Facebook',
    image:
      'https://res.cloudinary.com/pblgllgs/image/upload/v1661990925/tecnologias/reactlogo400x400_hja4va.png',
    description:
      'React es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página. Es mantenido por Facebook y la comunidad de software libre. En el proyecto hay más de mil desarrolladores libres',
  },
  {
    name: 'Nodejs',
    owner: 'Node.js Developers',
    image:
      'https://res.cloudinary.com/pblgllgs/image/upload/v1661991048/tecnologias/node-js-logo_y2nb4h.jpg',
    description:
      'Node.js es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor basado en el lenguaje de programación JavaScript, asíncrono, con E/S de datos en una arquitectura orientada a eventos y basado en el motor V8 de Google',
  },
  {
    name: 'Visual studio code',
    owner: 'Microsoft',
    image:
      'https://res.cloudinary.com/pblgllgs/image/upload/v1661991193/tecnologias/vscode-logo400x400_kqd01o.jpg',
    description:
      'Visual Studio Code es un editor de código fuente desarrollado por Microsoft para Windows, Linux, macOS y Web. Incluye soporte para la depuración, control integrado de Git, resaltado de sintaxis, finalización inteligente de código, fragmentos y refactorización de código',
  },
  {
    name: 'Postman',
    owner: 'Postman Inc',
    image:
      'https://res.cloudinary.com/pblgllgs/image/upload/v1661991366/tecnologias/postman-logo400x400_noqeke.png',
    description:
      'Postman es una plataforma de API para que los desarrolladores diseñen, construyan, prueben e iteren sus API. En abril de 2022, Postman informa que tiene más de 20 millones de usuarios registrados y 75 000 API abiertas, lo que, según afirma, constituye el centro de API público más grande del mundo',
  },
  {
    name: 'Ubuntu',
    owner: 'Canonical Ltd',
    image:
      'https://res.cloudinary.com/pblgllgs/image/upload/v1661991497/tecnologias/ubuntu-logo400x400_ugtlk0.png',
    description:
      'Ubuntu es una distribución Linux basada en Debian GNU/Linux, que incluye principalmente software libre y de código abierto. Puede utilizarse en ordenadores y servidores. Está orientado al usuario promedio, con un fuerte enfoque en la facilidad de uso y en mejorar la experiencia del usuario',
  },
  {
    name: 'ZSH',
    owner: 'Paul Falstad',
    image:
      'https://res.cloudinary.com/pblgllgs/image/upload/v1661991615/tecnologias/zsh-logo400x400_pq73uh.jpg',
    description:
      'Z shell es un potente intérprete de comandos para sistemas operativos de tipo Unix, como por ejemplo los BSD o GNU/Linux.​ La primera versión de zsh fue escrita por Paul Falstad en 1990, cuando era estudiante en la Universidad de Princeton. Zsh se diseñó para poder usarse interactivamente',
  },
  {
    name: 'Github',
    owner: 'Github Inc',
    image:
      'https://res.cloudinary.com/pblgllgs/image/upload/v1661996251/tecnologias/GitHub-logo400x400_u6nvui.jpg',
    description:
      'GitHub es una forja para alojar proyectos utilizando el sistema de control de versiones Git. Se utiliza principalmente para la creación de código fuente de programas de ordenador. El software que opera GitHub fue escrito en Ruby on Rails. Desde enero de 2010, GitHub opera bajo el nombre de GitHub, Inc',
  },
  {
    name: 'MongoDB',
    owner: 'MongoDB Inc',
    image:
      'https://res.cloudinary.com/pblgllgs/image/upload/v1661996356/tecnologias/logo-mongodb400x400png_bydnai.png',
    description:
      'MongoDB es un sistema de base de datos NoSQL, orientado a documentos y de código abierto. En lugar de guardar los datos en tablas, tal y como se hace en las bases de datos relacionales',
  },
  {
    name: 'Amazon Web Services',
    owner: 'Amazon',
    image:
      'https://res.cloudinary.com/pblgllgs/image/upload/v1662067271/tecnologias/aws-logo400x400_p8wpnr.png',
    description:
      'Amazon Web Services es una colección de servicios de computación en la nube pública que en conjunto forman una plataforma de computación en la nube, ofrecidas a través de Internet por Amazon.com. Es usado en aplicaciones populares como Dropbox, Foursquare, HootSuite',
  },
  {
    name: 'Microsoft Azure',
    owner: 'Midrosoft',
    image:
      'https://res.cloudinary.com/pblgllgs/image/upload/v1662067324/tecnologias/logo-azure400x400_r7oac2.png',
    description:
      'Microsoft Azure es un servicio de computación en la nube creado por Microsoft para construir, probar, desplegar y administrar aplicaciones y servicios mediante el uso de sus centros de datos',
  },
  {
    name: 'Javascript',
    owner: 'Javascript',
    image:
      'https://res.cloudinary.com/pblgllgs/image/upload/v1662067394/tecnologias/javascript-logo-400x400_arvdsk.png',
    description:
      'JavaScript es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos, ​ basado en prototipos, imperativo, débilmente tipado y dinámico',
  },
  {
    name: 'Typescripts',
    owner: 'Microsoft',
    image:
      'https://res.cloudinary.com/pblgllgs/image/upload/v1662067453/tecnologias/typescript-logo400x400_c0w03c.svg',
    description:
      'TypeScript es un lenguaje de programación libre y de código abierto desarrollado y mantenido por Microsoft. Es un superconjunto de JavaScript, que esencialmente añade tipos estáticos y objetos basados en clases',
  },
  {
    name: 'Hyper Text Markup Language',
    owner: 'HTML',
    image:
      'https://res.cloudinary.com/pblgllgs/image/upload/v1662067534/tecnologias/html-logo400x400_qbiybp.png',
    description:
      'HTML, siglas en inglés de HyperText Markup Language, hace referencia al lenguaje de marcado para la elaboración de páginas web',
  },
  {
    name: 'Cascading Style Sheets',
    owner: 'CSS',
    image:
      'https://res.cloudinary.com/pblgllgs/image/upload/v1662067640/tecnologias/css-logo400x400_beewgc.png',
    description:
      'CSS, en español «Hojas de estilo en cascada», es un lenguaje de diseño gráfico para definir y crear la presentación de un documento estructurado escrito en un lenguaje de marcado',
  },
  {
    name: 'Node package Manager',
    owner: 'NPM',
    image:
      'https://res.cloudinary.com/pblgllgs/image/upload/v1662067715/tecnologias/npm-logo400x400_taxkhs.png',
    description:
      'npm es el sistema de gestión de paquetes por defecto para Node.js, un entorno de ejecución para JavaScript, bajo Artistic License 2.0.',
  },
  {
    name: 'Yarn',
    owner: 'Yarn',
    image:
      'https://res.cloudinary.com/pblgllgs/image/upload/v1662067792/tecnologias/yarn-logo400x400_olpoqp.png',
    description:
      'Yarn es un nuevo tipo de instalador de paquetes JavaScript y gestor de dependencias lanzado por la empresa Facebook en colaboración con otros desarrolladores como Google donde introduce cambios',
  },
  {
    name: 'Git',
    owner: 'Git',
    image:
      'https://res.cloudinary.com/pblgllgs/image/upload/v1662067859/tecnologias/git-logo400x400_jm0nsp.png',
    description:
      'Git es un software de control de versiones diseñado por Linus Torvalds, pensando en la eficiencia, la confiabilidad y compatibilidad del mantenimiento de versiones de aplicaciones cuando estas tienen un gran número de archivos de código fuente',
  },
  {
    name: 'Google Cloud Platform',
    owner: 'GCP',
    image:
      'https://res.cloudinary.com/pblgllgs/image/upload/v1662067912/tecnologias/gcp-logo400x400_cpe9q6.png',
    description:
      'Google Cloud es una plataforma que ha reunido todas las aplicaciones de desarrollo web que Google estaba ofreciendo por separado',
  },
  {
    name: 'Kubernetes',
    owner: 'Kubernetes',
    image:
      'https://res.cloudinary.com/pblgllgs/image/upload/v1662067983/tecnologias/kubernetes-logo-400x400_ocqcbj.png',
    description:
      'Kubernetes es un sistema de código libre para la automatización del despliegue, ajuste de escala y manejo de aplicaciones en contenedores​ que fue originalmente diseñado por Google y donado a la Cloud Native Computing Foundation. Soporta diferentes entornos para la ejecución de contenedores, incluido Docker',
  },
  {
    name: 'Vercel',
    owner: 'Vercel',
    image:
      'https://res.cloudinary.com/pblgllgs/image/upload/v1662068024/tecnologias/vercel-logo400x400_rxyvmw.png',
    description:
      'Vercel combines the best developer experience with an obsessive focus on end-user performance. Our platform enables frontend teams to do their best work',
  },
  {
    name: 'spring',
    owner: 'Spring',
    image:
      'http://res.cloudinary.com/pblgllgs/image/upload/v1662154506/tecnologias/xqr3bfomeml6mwm9emzt.png',
    description:
      'Spring es un framework para el desarrollo de aplicaciones y contenedor de inversión de control, de código abierto para la plataforma Java.​La primera versión fue escrita por Rod Johnson, quien lo lanzó junto a la publicación de su libro Expert One-on-One J2EE Design and Development.',
  },
  {
    name: 'Cloudinary',
    owner: 'Cloudinary',
    image:
      'http://res.cloudinary.com/pblgllgs/image/upload/v1662155704/tecnologias/ydqtjgujwdmadzo2dvpj.png',
    description:
      'Cloudinary es una empresa de tecnología SaaS con sede en Santa Clara, California, y oficinas en Israel, Inglaterra, Polonia y Singapur. La empresa ofrece servicios de gestión de imágenes y vídeos basados ​​en la nube',
  },
  {
    name: 'Chrome',
    owner: 'Chrome',
    image:
      'http://res.cloudinary.com/pblgllgs/image/upload/v1662155955/tecnologias/lvkxyfpzgfkhzuazjmyf.jpg',
    description:
      'Google Chrome es un navegador web de código cerrado​​ desarrollado por Google, aunque derivado de proyectos de código abierto.​​​ Está disponible gratuitamente. El nombre del navegador deriva del término en inglés usado para el marco de la interfaz gráfica de usuario',
  },
  {
    name: 'Vite',
    owner: 'Vite',
    image:
      'http://res.cloudinary.com/pblgllgs/image/upload/v1662156162/tecnologias/tpmbhkgoqbjxsq3juv2b.png',
    description:
      'Vite (French word for "quick", pronounced /vit/, like "veet") is a new breed of frontend build tooling that significantly improves the frontend development experience.',
  },
  {
    name: 'Linux',
    owner: 'Linux',
    image:
      'http://res.cloudinary.com/pblgllgs/image/upload/v1662156780/tecnologias/z0dbvuv4ddxvlmp5h1li.jpg',
    description:
      'GNU/Linux es un sistema operativo tipo Unix compuesto por software libre y de código abierto.​ GNU/Linux surge de las contribuciones de varios proyectos de software, entre los cuales destacan GNU y el kernel «Linux»',
  },
  {
    name: 'Graphql',
    owner: 'Graphql',
    image:
      'http://res.cloudinary.com/pblgllgs/image/upload/v1662156967/tecnologias/zww2qffbu9rsql7blx7e.png',
    description:
      'GraphQL es un lenguaje de consulta y manipulación de datos para APIs, y un entorno de ejecución para realizar consultas con datos existentes.​ GraphQL fue desarrollado internamente por Facebook en 2012 antes de ser liberado públicamente en 2015',
  },
];

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

  async seed() {
    await this.prismaService.tecnologia.deleteMany({});
    await this.prismaService.tecnologia.createMany({
      data: tecnologias,
    });
    return `Se restablecio la DB`;
  }
}
