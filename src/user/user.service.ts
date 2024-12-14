import { Injectable } from "@nestjs/common";
import { userDto } from "./dto/user.dto";
@Injectable()
export class userService{
    private users: userDto[] = [];
    createUserService(userdata : userDto){
        try {
             this.users.push(userdata)
            return "user created successfully"
        } catch (error) {
            return "user creation failed"
        }
    }

    updateUserService(){
        return "update user service"
    }

    getUserService(id : number){
        try {
        return JSON.stringify(this.users.find(user => user.id == +id))
            
        } catch (error) {
            return error
        }
    }

    getAllUsersService(){
        return JSON.stringify(this.users)
    }
    deleteUserService(){
        return "Delete user service"
    }
}