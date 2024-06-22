import { PartialType } from "@nestjs/mapped-types";
import { createUser } from "./createUser.dto";
//partial type attributs optionnels
export class UpdateUser extends PartialType (createUser){}