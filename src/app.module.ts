import { Module } from '@nestjs/common';
import { userModule } from './user/user.module';
import { loginModule } from './login/login.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(), // This loads the .env file
    MongooseModule.forRoot(process.env.MONGO_URI),
    userModule,
    loginModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
