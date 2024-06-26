import { Module } from "@nestjs/common";
import { UserModule } from "./users/users.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "@nestjs/config";

@Module({
    imports:[UserModule,ConfigModule.forRoot(),//config module bich tista5dem env variable 
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: process.env.DATABASE_HOST,
            port: process.env.DATABSE_PORT as any,
            username:process.env.DATABASE_USERNAME,
            password:process.env.DATABASE_PASSWORD,
            database: process.env.DATABASE_NAME,
            //les entités seront auto enregistrées dans la base 
            autoLoadEntities:true,
            //ay modification fil entités sera enregistré dans la base :true
            synchronize: true,
          }),
    ],
    controllers:[]
})
export class AppModule{
    
}