import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Agreement} from "../models/agreement.model";

interface createAgreementDto {
  clauseOfAgr: string;
}

interface deleteAgreementDto {
  clauseOfAgrId: number;
}

@Injectable()
export class AgreementService {
  constructor(@InjectModel(Agreement) private agreementRepository: typeof Agreement) {}

  async createAgreement({clauseOfAgr}: createAgreementDto) {
    await this.agreementRepository.create({clauseOfAgr});
    return {statusCode: 201, message: 'Agreement created successfully!', agreement: clauseOfAgr};
  }

  async deleteAgreement({clauseOfAgrId}: deleteAgreementDto) {
    const agreement = await this.agreementRepository.findOne({where: {clauseOfAgrId}});
    if(!agreement) throw new NotFoundException('Agreement not found!');
    await this.agreementRepository.destroy({where: {clauseOfAgrId}});
    return {statusCode: 201, message: 'Agreement deleted successfully!'};
  }

  async getAllAgreements() {
    const agreements = await this.agreementRepository.findAll();
    if(!agreements.length) throw new NotFoundException('Agreements not found!');
    const mappedAgreements = agreements.map((el) => {
      return {
        clauseOfAgrId: el.clauseOfAgrId,
        clauseOfAgr: el.clauseOfAgr,
      }
    })
    return mappedAgreements;
  }
}
