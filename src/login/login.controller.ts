import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { LoginService } from "./login.service";
import { loginDto } from "./dto/login.dto";
@Controller('login')
export class loginController{
    constructor(readonly  loginService : LoginService){}
    @Post()
    async loginUser(@Body() logindata: loginDto): Promise<{ statusCode: number; message: string; error?: string }> {
        const response = await this.loginService.loginUserService(logindata);
        return response;  
      }
}