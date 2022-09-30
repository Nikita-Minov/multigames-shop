import {BadRequestException, Injectable} from '@nestjs/common';
import {User} from "../models/user.model";
import {InjectModel} from "@nestjs/sequelize";
import * as bcrypt from 'bcrypt';
import {CreateUserDto} from "./dto/createUser.dto";

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userRepository: typeof User) {
  }
  async createUser({username, password}: CreateUserDto) {
    const foundUser = await this.userRepository.findOne({where: {username: username}});
    if(foundUser) throw new BadRequestException('A user with the same name already exists!');
    const hash = await bcrypt.hash(password, Number(process.env.SALT_ROUNDS));
    const user = await this.userRepository.create({username: username, password: hash});
    return {username: user.username, userId: user.userId};
  }
}
