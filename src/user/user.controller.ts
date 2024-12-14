import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { userService } from "./user.service";
import { userDto } from "./dto/user.dto";

@Controller('user')
export class userController{
    constructor(readonly  userService : userService){}
    @Post('createuser')
    createUser(@Body() userdata : userDto) : string{
        return this.userService.createUserService(userdata)
    }

    @Patch('updateuser')
    updateUser() : string{
        return this.userService.updateUserService()
    }
    @Get('getuser/:id')
    getUser(@Param('id') id : number) : string{
        return this.userService.getUserService(id)
    }

    @Get('getallusers')
    getAllUsers() : string{
        return this.userService.getAllUsersService()
    }

    @Delete('deleteUser')
    deleteUser() :string{
        return this.userService.deleteUserService()
    }


}