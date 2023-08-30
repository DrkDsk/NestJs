import { IsNotEmpty, IsNumber, Length } from 'class-validator';

export class CreateItemDto {
  @IsNotEmpty()
  @Length(1, 800)
  name: string;

  @IsNumber()
  price: number;

  @IsNotEmpty()
  description: string;
}
