import { PartialType } from "@nestjs/mapped-types";
import { CreateUserDto } from "./createUser.dto";
//partial type attributs optionnels
export class UpdateUser extends PartialType (CreateUserDto){}