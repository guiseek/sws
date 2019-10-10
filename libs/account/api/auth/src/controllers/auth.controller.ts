import { Controller, UseGuards, Post, Request, Get, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../auth.service';
import { LoginDto } from '../dtos/login.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ) {}

  @Post('login')
  @HttpCode(HttpStatus.ACCEPTED)
  async login(@Body() credentials: LoginDto) {
    return await this.authService.login(credentials)
  }
  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  async profile(@Request() req) {
    return req.user;
  }
}
