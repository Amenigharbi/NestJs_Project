import {IsEmail, IsString, Length } from "class-validator";

export class createUser{
    @IsString()
    @Length(5,20,{groups:['create']})
    @Length(5,30,{groups:['update']})
    readonly username:string;
    @IsEmail({},{message:"incorrect email format"})
    readonly email:string;
    @IsString()
    readonly country:string;
}

