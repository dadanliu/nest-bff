import { IsString } from 'class-validator';

export default class AddUserDto {
  @IsString({ message: 'name should be a string' })
  name: string;

  @IsString({ message: 'phone should be a string' })
  phone: string;
}
