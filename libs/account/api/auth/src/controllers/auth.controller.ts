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
import { ForgotPasswordDto } from '../dtos/forgot-password.dto';
import { ResetPasswordDto } from '../dtos/reset-password.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ) {}

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

  @Post('forgot-password')
  async forgotPassword(@Body() dto: ForgotPasswordDto) {
    return await this.authService.forgotPassword(dto)
  }


  @Post('reset-password')
  async resetPassword(@Body() dto: ResetPasswordDto) {
    return await this.authService.resetPassword(dto)
  }
}
