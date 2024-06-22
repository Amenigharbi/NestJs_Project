import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post,Res} from "@nestjs/common";
import { createUser } from "./dtos/createUser.dto";
import { UpdateUser } from "./dtos/updateUser.dto";
@Controller("users")
export class UsersController{
    @Get()
    find():string[]{
        return ['ameni','gharbi'];
    }

    @Get(":username")
    findOne(@Param("username")username:string):any{
        return {username,email:"ameni@gmail.com"};
    }

    @Post()
    Create(@Body()userData:createUser){
        return userData;
    }

    @Patch(":username")
    Update(@Param("username")username:string,@Body() data:UpdateUser){
        return data;
    }
    
    @Delete(":username")
    @HttpCode(HttpStatus.NO_CONTENT)
    Remove(@Param("username")username:string){}
}