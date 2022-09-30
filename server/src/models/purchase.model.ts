import {Column, DataType, Model, Table} from 'sequelize-typescript';

interface PurchaseTypes {
  purchaseName: string;
  purchaseAmount: number;
  email: string;
  sum: number;
  orderId: string;
  status: boolean;
  productId: number;
  date: any;
}

@Table({tableName: 'purchases'})
export class Purchase extends Model<Purchase, PurchaseTypes> {
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  purchaseId: number;

  @Column({type: DataType.TEXT, validate: {notEmpty: true}})
  purchaseName: string;

  @Column({type: DataType.INTEGER})
  purchaseAmount: number;

  @Column({type: DataType.TEXT})
  email: string;

  @Column({type: DataType.INTEGER})
  sum: number;

  @Column({type: DataType.TEXT})
  orderId: string;

  @Column({type: DataType.DATE})
  date: any;

  @Column({type: DataType.INTEGER})
  productId: number;

  @Column({type: DataType.BOOLEAN})
  status: boolean;

  @Column({type: DataType.ARRAY(DataType.TEXT), defaultValue: []})
  data: string[];
}