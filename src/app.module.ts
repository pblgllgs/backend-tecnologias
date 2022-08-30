import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EnvConfigutarion } from './config/app.config';
import { JoiValidationSchema } from './config/joi.validation';
import { TecnologiaModule } from './tecnologia/tecnologia.module';
import { PrismaModule } from './prisma/prisma.module';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [EnvConfigutarion],
      validationSchema: JoiValidationSchema,
      envFilePath: ['.env.'],
    }),
    TecnologiaModule,
    PrismaModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
  ],
})
export class AppModule {}
