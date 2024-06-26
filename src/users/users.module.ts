import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { UserService } from "./user.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from './user.entity';

@Module({
    //bich najem nista3mel il user 
    imports: [TypeOrmModule.forFeature([User])],
    controllers:[UsersController],
    providers:[UserService]
})
export class UserModule{

}