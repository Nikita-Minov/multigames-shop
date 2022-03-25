import { Module } from '@nestjs/common';
import { AgreementService } from './agreement.service';
import { AgreementController } from './agreement.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {Agreement} from "../models/agreement.model";

@Module({
  imports: [ SequelizeModule.forFeature([Agreement])],
  providers: [AgreementService],
  controllers: [AgreementController]
})
export class AgreementModule {}
