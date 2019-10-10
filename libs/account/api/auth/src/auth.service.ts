import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService, User } from 'api/users';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) { }

  async validateUser(email: string, pass: string): Promise<any> {
    console.log(email)
    const user = await this.usersService.findOne({ where: { email } });
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
  async login(credentials: any) {
    console.log("login: ", credentials)
    return this.usersService.validateUser(credentials)
      .then((user) => {
        console.log(user)
        const payload = { email: user.email, sub: user.id }
        return {
          access_token: this.jwtService.sign(payload)
        }
      })
  }
  public async register(user: User): Promise<any> {
    return this.usersService.create(user)
  }
}
