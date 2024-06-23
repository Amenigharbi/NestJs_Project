import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post,Res} from "@nestjs/common";
import { createUser } from "./dtos/createUser.dto";
import { UpdateUser } from "./dtos/updateUser.dto";
import { UserEntity } from "./user.entity";
import{v4 as uuid} from 'uuid';
@Controller("users")
export class UsersController{
    private users:UserEntity[]=[];

    @Get()
    find():UserEntity[]{
        return this.users;
    }

    @Get(":id")
    findOne(@Param("id")id:string):UserEntity{
        return this.users.find((user) => user.id===id);
    }

    @Post()
    Create(@Body()userData:createUser){
        const newUser:UserEntity={
            ... userData,
            id:uuid(),
        }
        this.users.push(newUser);
        return newUser;
    }

    @Patch(":id")
    Update(@Param("id") id:string, @Body() data:UpdateUser){
        //1-find the element index that we want to update
        const index=this.users.findIndex((user)=>user.id===id);
        //2-update this element
        this.users[index]={... this.users[index],...data}
        return this.users[index];
    }

    @Delete(":id")
    @HttpCode(HttpStatus.NO_CONTENT)
    Remove(@Param("id") id:string){
        this.users=this.users.filter((user)=>user.id != id);
    }
}