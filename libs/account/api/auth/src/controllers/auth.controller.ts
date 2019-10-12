import {
  Controller,
  UseGuards,
  Post,
  Request,
  Get,
  Body,
  HttpCode,
  HttpStatus
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../auth.service';
import { LoginDto } from '../dtos/login.dto';
import { CreateUserDto } from '../dtos/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // @Post('signup')
  // @HttpCode(HttpStatus.CREATED)
  // async signup(@Body() dto: CreateUserDto) {
  //   console.log('dto: ', dto)
  //   return await this.authService.signup(dto);
  // }

  @Post('login')
  @HttpCode(HttpStatus.ACCEPTED)
  async login(@Body() credentials: LoginDto) {
    return await this.authService.login(credentials);
  }
  @UseGuards(AuthGuard('jwt'))
  @Get('me')
  async me(@Request() req) {
    return req.user;
  }
  @UseGuards(AuthGuard('jwt'))
  @Get('info')
  async info(@Request() req) {
    return await this.authService.getUser(
      req.user.id
    )
  }
}
