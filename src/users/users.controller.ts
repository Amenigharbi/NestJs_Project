import { Controller, Delete, Get, Patch, Post } from "@nestjs/common";

@Controller("users")
export class UsersController{
    @Get()
    find():string[]{
        return ['ameni','gharbi'];
    }
    @Get()
    findOne():string{
        return 'find one user';
    }

    @Post()
    Create():string{
        return 'create new user';
    }

    @Patch()
    Update():string{
        return 'update user';
    }
    @Delete()
    Remove():string{
        return 'delete user';
    }
}