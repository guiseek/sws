import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import { AuthController } from './controllers/auth.controller';
import { UsersModule } from 'api/users';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './config/constants';
import { AuthMailerService } from './services/auth-mailer.service';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './guards';

@Module({
  imports: [
    UsersModule,
    PassportModule.register({
      defaultStrategy: 'jwt'
    }),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '2h' }
    })
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy, AuthMailerService, {
    provide: APP_GUARD,
    useClass: AuthGuard
  }],
  exports: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
