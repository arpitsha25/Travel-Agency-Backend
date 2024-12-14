import { Module } from '@nestjs/common';
import { userModule } from './user/user.module';
import { loginModule } from './login/login.module';

@Module({
  imports: [userModule,loginModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
