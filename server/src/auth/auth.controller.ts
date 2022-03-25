import {Request, Headers, Controller, Post, UseGuards, Get} from '@nestjs/common';
import {AuthGuard} from "@nestjs/passport";
import {AuthService} from "./auth.service";

@Controller('api/v1/auth')
export class AuthController {
  constructor(private authService: AuthService) {
  }

  @UseGuards(AuthGuard('local'))
  @Post()
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  getProfile(@Request() req, @Headers() headers) {
    return req.user;
  }
}
