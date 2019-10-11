import { IsNotEmpty, IsEmail, IsString, MaxLength, MinLength, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { Name } from 'api/users/entities/user.entity';
import { UserProfile } from 'api/users';

export class CreateUserDto {
  @IsString({ always: true })
  @MaxLength(255, { always: true })
  @IsEmail({ require_tld: false }, { always: true })
  email: string;

  @IsString({ always: true })
  @MinLength(4, { always: true })
  @MaxLength(255, { always: true })
  password: string;

  @Type(t => Name)
  name: Name;

  @ValidateNested({ always: true })
  @Type(t => UserProfile)
  profile?: UserProfile;
}
