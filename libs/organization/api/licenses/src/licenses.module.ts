import { Module } from '@nestjs/common';
import { LicensesService } from './services/licenses.service';
import { UserLicensesService } from './services/user-licenses.service';
import { LicensesController } from './controllers/licenses.controller';
import { MyLicensesController } from './controllers/my-licenses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { License, UserLicense } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([License, UserLicense])],
  providers: [LicensesService, UserLicensesService],
  exports: [LicensesService, UserLicensesService],
  controllers: [LicensesController, MyLicensesController],
})
export class LicensesModule {}
