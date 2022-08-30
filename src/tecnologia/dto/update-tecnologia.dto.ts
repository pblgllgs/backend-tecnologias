import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateTecnologiaDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  name?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  description?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  owner?: string;
}
