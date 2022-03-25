import {BadRequestException, Body, Controller, Get, HttpException, HttpStatus, Injectable, Post} from '@nestjs/common';
import {UsersService} from "./users.service";

@Controller('api/v1/users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Post()
  async createUser(@Body('username') username: string, @Body('password') password: string) {
    if(!password || !username) throw new BadRequestException('Password and username is required!');
    return await this.userService.createUser({
      username: username,
      password: password,
    });
  }
}
