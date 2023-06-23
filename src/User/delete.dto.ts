import { IsNumber, IsString, IsIn, IsNotEmpty } from 'class-validator';

export default class DelteUserDto {
  @IsNotEmpty()
  @IsIn([1, 2])
  @IsNumber({ allowNaN: false }, { message: 'id should be a number' })
  id: string;
}
