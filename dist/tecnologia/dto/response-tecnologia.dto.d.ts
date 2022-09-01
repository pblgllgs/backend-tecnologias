export declare class TecnologiaResponseDto {
    id: number;
    name: string;
    owner: string;
    image: string;
    description: string;
    created_at: Date;
    createdAt(): Date;
    updated_at: Date;
    constructor(partial: Partial<TecnologiaResponseDto>);
}
