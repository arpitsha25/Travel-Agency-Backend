import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { loginService } from "./login.service";
import { loginDto } from "./dto/login.dto";
@Controller('login')
export class loginController{
    constructor(readonly  loginService : loginService){}
    @Post()
    loginUser(@Body() logindata : loginDto) : string{
        return this.loginService.loginUserService(logindata)
    }
}