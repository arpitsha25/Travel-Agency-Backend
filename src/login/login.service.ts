import { Injectable } from '@nestjs/common';
import { loginDto } from './dto/login.dto';
import { CollectionName, User } from './entity/login.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { HttpStatus } from '@nestjs/common';

@Injectable()
export class LoginService {
  constructor(@InjectModel(CollectionName) private userModel: Model<User>) {}

  isValidEmail(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  async loginUserService(logindata: loginDto) {
    try {
      if (Object.keys(logindata).length === 0) {
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Please enter login credentials',
        };
      }

      if (!this.isValidEmail(logindata.username)) {
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Please enter a valid username',
        };
      }

      const user = await this.userModel.findOne({ username: logindata.username });

      if (user) {
        const passwordIsValid = logindata.password === user.password;

        if (passwordIsValid) {
          return {
            statusCode: HttpStatus.OK,
            message: 'Login successful',
          };
        } else {
          return {
            statusCode: HttpStatus.UNAUTHORIZED,
            message: 'Incorrect password',
          };
        }
      } else {
        return {
          statusCode: HttpStatus.NOT_FOUND,
          message: 'User not found',
        };
      }
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'An error occurred while processing the request',
        error: error.message || 'Unknown error',
      };
    }
  }
}
