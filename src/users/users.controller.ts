import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseUUIDPipe, Patch, Post,Query,Res, UsePipes, ValidationPipe} from "@nestjs/common";
import { createUser } from "./dtos/createUser.dto";
import { UpdateUser } from "./dtos/updateUser.dto";
import { UserEntity } from "./user.entity";
import{v4 as uuid} from 'uuid';
import { CustomValidationPipe } from "./pipes/validation.pipe";
import { UserService } from "./user.service";

//inject service dans controller 
@Controller("users")
export class UsersController{
    //dependency injection 
    constructor(private readonly userService:UserService){}

    @Get()
    find(@Query("username",CustomValidationPipe)username:string):UserEntity[]{
        return this.userService.findUsers()
    }

    @Get(":id")
    findOne(@Param("id",ParseUUIDPipe)id:string):UserEntity{
        return this.userService.findUserById(id);
    }

    @Post()
    Create(@Body(new ValidationPipe({groups:['create']}))userData:createUser){
        return this.userService.CreateUser(userData);    
    }

    @Patch(":id")
    Update(@Param("id",ParseUUIDPipe) id:string, @Body(new ValidationPipe({groups:['update']})) data:UpdateUser){
        return this.userService.updateUser(id,data);
    }

    @Delete(":id")
    @HttpCode(HttpStatus.NO_CONTENT)
    Remove(@Param("id",ParseUUIDPipe) id:string){
        return this.userService.deleteUser(id);
    }
}