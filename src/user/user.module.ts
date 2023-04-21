import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user';
import { LocalStrategy } from './strategy/local.strategy';
import { JwtModule } from "@nestjs/jwt";
import { JwtStrategy } from './strategy/jwt.strategy';

@Module({
  controllers: [UserController],
  imports:[
    TypeOrmModule.forFeature([User]),
    JwtModule.registerAsync({
      useFactory : () =>({
        secret : "MyToKeNMyToKeNMyToKeNMyToKeN",
        signOptions:{
          expiresIn : "60m"
        }
      })
    })
  ],
  providers: [UserService, LocalStrategy, JwtStrategy]
})
export class UserModule {}
