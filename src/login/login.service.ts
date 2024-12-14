import { Injectable } from "@nestjs/common";
import { loginDto } from "./dto/login.dto";

@Injectable()
export class loginService{
    loginUserService(logindata : loginDto){
        console.log("login data", logindata)
        return "login service"
    }
}