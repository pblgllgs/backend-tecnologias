import { Exclude } from 'class-transformer';

export class TecnologiaResponseDto {
  constructor(partial: Partial<TecnologiaResponseDto>) {
    Object.assign(this, partial);
  }
  id: number;
  name: string;
  owner: string;
  description: string;
  @Exclude()
  createdAt: Date;
  @Exclude()
  updatedAt: Date;
}
