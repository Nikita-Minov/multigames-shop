import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import {AuthService} from "./auth.service";
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "../models/user.model";
import {LocalStrategy} from "./local.strategy";
import {JwtModule, JwtService} from "@nestjs/jwt";
import {PassportModule} from "@nestjs/passport";
import {JwtStrategy} from "./jwt.strategy";
import {jwtConstants} from "./constants";

@Module({
  imports: [
    SequelizeModule.forFeature([User]),
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '3600s' },
    }),],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController]
})
export class AuthModule {}
