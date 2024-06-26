import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {
  id: string;

  @IsString()
  @Length(5, 20, { groups: ['create'] })
  username: string;

  @IsEmail({}, { message: "incorrect email format" })
  email: string;

  @IsString()
  country: string;
}
