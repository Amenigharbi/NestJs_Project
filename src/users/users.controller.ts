import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseUUIDPipe, Patch, Post,Query,Res, UsePipes, ValidationPipe} from "@nestjs/common";
import { CreateUserDto } from "./dtos/createUser.dto";
import { UpdateUser } from "./dtos/updateUser.dto";
import { User } from "./user.entity";
import { CustomValidationPipe } from "./pipes/validation.pipe";
import { UserService } from "./user.service";

//inject service dans controller 
@Controller("users")
export class UsersController{
    //dependency injection 
    constructor(private readonly userService:UserService){}

    @Get()
  async find(@Query("username", CustomValidationPipe) username: string): Promise<User[]> {
    return await this.userService.findUsers();
  }

  @Get(":id")
  async findOne(@Param("id") id: string): Promise<User> {
    return await this.userService.findUserById(id);
  }

  @Post()
  @UsePipes(new ValidationPipe({ groups: ['create'] }))
  async create(@Body() userData: CreateUserDto): Promise<User> {
    return await this.userService.createUser(userData);
  }

  @Patch(":id")
  @UsePipes(new ValidationPipe({ groups: ['update'] }))
  async update(@Param("id") id: string, @Body() data: UpdateUser): Promise<User> {
    return await this.userService.updateUser(id, data);
  }

  @Delete(":id")
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param("id") id: string): Promise<void> {
    await this.userService.deleteUser(id);
  }
}