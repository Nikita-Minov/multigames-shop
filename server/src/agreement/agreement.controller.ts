import {Body, Controller, Delete, Get, Post, UseGuards} from '@nestjs/common';
import {AuthGuard} from "@nestjs/passport";
import {AgreementService} from "./agreement.service";

@Controller('api/v1/agreements')
export class AgreementController {
  constructor(private agreementService: AgreementService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async createAgreement(@Body('clauseOfAgr') clauseOfAgr) {
    return this.agreementService.createAgreement({clauseOfAgr});
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('delete-agreement')
  async deleteAgreement(@Body('clauseOfAgrId') clauseOfAgrId) {
    return this.agreementService.deleteAgreement({clauseOfAgrId});
  }

  @Get()
  async getAllAgreement() {
    return this.agreementService.getAllAgreements();
  }
}
