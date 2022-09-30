import {BadRequestException, ForbiddenException, Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {User} from "../models/user.model";
import * as bcrypt from 'bcrypt';
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(@InjectModel(User) private userRepository: typeof User,
              private jwtService: JwtService) {
  }
  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userRepository.findOne({where: {username: username}});
    if(!user) throw new ForbiddenException('Wrong username or password!');
    const isMatched = await bcrypt.compare(password, user.password);
    if (!user || !isMatched) {
      throw new ForbiddenException('Wrong username or password!');
    }
    return {username: user.username, userId: user.userId, isAdmin: user.isAdmin};
  }

  async login(user: any) {
    const payload = { username: user.username, userId: user.userId, isAdmin: user.isAdmin};
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
