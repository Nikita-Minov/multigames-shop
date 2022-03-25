import {Column, DataType, Model, Table} from 'sequelize-typescript';

interface AgreementTypes {
  clauseOfAgr: string;
}

@Table({tableName: 'agreements'})
export class Agreement extends Model<Agreement, AgreementTypes> {
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  clauseOfAgrId: number;

  @Column({type: DataType.TEXT, validate: {notEmpty: true}})
  clauseOfAgr: string;
}