import { IsNotEmpty } from 'class-validator';
export class CreatePostDto {
  body: string;
  @IsNotEmpty()
  title: string;
  userId: number;
}