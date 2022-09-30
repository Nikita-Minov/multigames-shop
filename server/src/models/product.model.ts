import {Column, DataType, Model, Table} from 'sequelize-typescript';

interface ProductTypes {
  productName: string;
  productPrice: number;
  data: string[];
  category?: string;
  description?: string;
  inStock: number;
  photos?: string[];
  categoryId: number;
}

@Table({tableName: 'products'})
export class Product extends Model<Product, ProductTypes> {
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  productId: number;

  @Column({type: DataType.TEXT})
  productName: string;

  @Column({type: DataType.INTEGER})
  productPrice: number;

  @Column({type: DataType.TEXT, defaultValue: ''})
  category: string;

  @Column({type: DataType.INTEGER, defaultValue: 0})
  categoryId: number;

  @Column({type: DataType.INTEGER, defaultValue: 0})
  sales: number;

  @Column({type: DataType.INTEGER, defaultValue: 0})
  inStock: number;

  @Column({type: DataType.TEXT, defaultValue: 'None'})
  description: string;

  @Column({type: DataType.ARRAY(DataType.TEXT), defaultValue: []})
  data: string[];

  @Column({type: DataType.ARRAY(DataType.STRING), defaultValue: []})
  photos: string;
}