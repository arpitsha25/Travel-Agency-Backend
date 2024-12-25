import { Module } from "@nestjs/common";
import { LoginService } from "./login.service";
import { loginController } from "./login.controller";
import { MongooseModule } from '@nestjs/mongoose'; // Required for database interaction
import { CollectionName, UserloginSchema } from './entity/login.entity'; // Your User schema
@Module({
    imports : [
        MongooseModule.forFeature([{ name: CollectionName, schema: UserloginSchema }]), // Register User schema
      ],
    controllers : [loginController],
    providers : [LoginService]
})
export class loginModule{
}