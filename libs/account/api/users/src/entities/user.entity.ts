import * as crypto from 'crypto';
import { CrudValidationGroups } from '@nestjsx/crud';
import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  ValidateNested,
  MinLength,
} from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne, ManyToMany, OneToMany, BeforeInsert, BeforeUpdate } from 'typeorm';
import { UserProfile } from './user-profile.entity';
import { BaseEntity } from '@sws/shared/api/entities';
import { Company } from 'org/companies';
import { UserProject, Project } from 'org/projects';


const { CREATE, UPDATE } = CrudValidationGroups;

export class Name {
  @IsString({ always: true })
  @Column({ nullable: true, select: true })
  first: string;

  @IsString({ always: true })
  @Column({ nullable: true, select: true })
  last: string;
}

@Entity('users')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @IsString({ always: true })
  @MaxLength(255, { always: true })
  @IsEmail({ require_tld: false }, { always: true })
  @Column({ type: 'varchar', length: 255, nullable: false, unique: true })
  email: string;

  @IsOptional({ groups: [UPDATE] })
  @Column({
    type: 'text',
    nullable: true,
    name: 'confirmation_code'
  })
  confirmationCode: string;

  @Column({
    type: 'timestamp',
    nullable: true,
    name: 'confirmation_time'
  })
  confirmationTime: Date | null;

  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @IsString({ always: true })
  @MinLength(4, { always: true })
  @MaxLength(255, { always: true })
  @Column({ nullable: false, select: false })
  public password!: string;

  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @IsBoolean({ always: true })
  @Column({ type: 'boolean', default: true })
  isActive: boolean;

  @Type((t) => Name)
  @Column((type) => Name)
  name: Name;

  @Column({ nullable: true })
  profileId?: number;

  /**
   * Relations
  */

  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @ValidateNested({ always: true })
  @Type((t) => UserProfile)
  @OneToOne((type) => UserProfile, (p) => p.user, { cascade: true })
  @JoinColumn()
  profile?: UserProfile;

  @ManyToOne((type) => Company, (c) => c.users)
  company?: Company;

  @ManyToMany((type) => Project, (c) => c.users)
  projects?: Project[];

  @OneToMany((type) => UserProject, (el) => el.user, {
    persistence: false,
    onDelete: 'CASCADE',
  })
  userProjects?: UserProject[];

  @BeforeInsert()
  createPassword() {
    if (this.password) {
      this.password = this.hashPassword(this.password);
    }
  }
  @BeforeInsert()
  confirmCode() {
    if (!this.confirmationCode) {
      this.confirmationCode = ("" + Math.random()).substring(2, 7);
    }
  }
  hashPassword(password: string) {
    return crypto.createHmac('sha256', password).digest('hex');
  }
  validatePassword(password: string) {
    return this.hashPassword(password) === this.password;
  }
}
