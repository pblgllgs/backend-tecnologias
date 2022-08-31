import { Module, ClassSerializerInterceptor } from '@nestjs/common';
import { TecnologiaService } from './tecnologia.service';
import { TecnologiaController } from './tecnologia.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [PrismaModule],
  controllers: [TecnologiaController],
  providers: [
    TecnologiaService,
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
  ],
})
export class TecnologiaModule {}
