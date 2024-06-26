import { Injectable } from "@nestjs/common";
import { User } from "./user.entity";
import { UpdateUser } from "./dtos/updateUser.dto";
import { CreateUserDto } from "./dtos/createUser.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class UserService{

    //dependency injection,User repo fil west bin il code mta3i w bin ay modifications fil données 3al table user 
    constructor(@InjectRepository(User)private usersRepository: Repository<User>){}

   
    async findUsers(): Promise<User[]> {
      return await this.usersRepository.find();
    }
  
    async findUserById(id: string): Promise<User> {
      return await this.usersRepository.findOne({ where: { id } });
    }
  
    async createUser(newUser: CreateUserDto): Promise<User> {
      const user = this.usersRepository.create(newUser); // Convertir DTO en entité
      return await this.usersRepository.save(user);
    }
  
    async updateUser(id: string, user: UpdateUser): Promise<User> {
      await this.usersRepository.update(id, user);
      return this.findUserById(id);
    }
  
    async deleteUser(id: string): Promise<void> {
      await this.usersRepository.delete(id);
    }
  }


