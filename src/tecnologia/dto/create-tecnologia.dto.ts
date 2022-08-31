import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTecnologiaDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  @IsNotEmpty()
  image: string;
  @IsString()
  @IsNotEmpty()
  owner: string;
  @IsString()
  @IsNotEmpty()
  description: string;
}
