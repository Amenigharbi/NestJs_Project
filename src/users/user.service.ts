import { Injectable } from "@nestjs/common";
import { UserEntity } from "./user.entity";
import { UpdateUser } from "./dtos/updateUser.dto";
import { createUser } from "./dtos/createUser.dto";
import{v4 as uuid} from 'uuid';
@Injectable()
export class UserService{
    private users:UserEntity[]=[];
     findUsers():UserEntity[]{
        return this.users;
     }
     findUserById(id:string):UserEntity{
        return this.users.find((user) => user.id===id);
     }
     CreateUser(newUser:createUser):UserEntity{
        const newU:UserEntity={
            ... newUser,
            id:uuid(),
        }
        this.users.push(newU);
        return newU;
     }
     updateUser(id:string,user:UpdateUser):UserEntity{
        //1-find the element index that we want to update
        const index=this.users.findIndex((user)=>user.id===id);
        //2-update this element
        this.users[index]={... this.users[index],...user}
        return this.users[index];
     }
     deleteUser(id:string):void{
        this.users=this.users.filter((user)=>user.id != id);
     }

}

