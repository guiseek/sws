import { Column, Entity } from 'typeorm';
import { IsOptional, IsString, MaxLength, IsDefined } from 'class-validator';
import { BaseEntity } from '@sws/shared/api/entities';
import { ApiModelPropertyOptional, ApiModelProperty } from '@nestjs/swagger';
import { CrudValidationGroups } from '@nestjsx/crud';

const { CREATE, UPDATE } = CrudValidationGroups;

@Entity('licenses')
export class License extends BaseEntity {
  @ApiModelProperty({
    type: 'string',
    nullable: false
  })
  @IsOptional({ groups: [UPDATE] })
  @IsDefined({ groups: [CREATE] })
  @IsString({ always: true })
  @MaxLength(128, { always: true })
  @Column({ type: 'varchar', length: 128, nullable: false, default: null })
  name: string;

  @ApiModelPropertyOptional({
    type: 'string',
    nullable: true
  })
  @IsOptional({ always: true })
  @Column({ type: 'text', nullable: true })
  description?: string;
}
