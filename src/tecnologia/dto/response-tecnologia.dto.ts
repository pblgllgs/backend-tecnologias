import { Exclude, Expose } from 'class-transformer';

export class TecnologiaResponseDto {
  id: number;
  name: string;
  owner: string;
  image: string;
  description: string;
  @Exclude()
  created_at: Date;
  @Expose({ name: 'createdAt' })
  createdAt() {
    return this.created_at;
  }
  @Exclude()
  updated_at: Date;
  constructor(partial: Partial<TecnologiaResponseDto>) {
    Object.assign(this, partial);
  }
}
