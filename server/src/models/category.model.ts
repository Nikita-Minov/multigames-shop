import {Column, DataType, Model, Table} from 'sequelize-typescript';

interface CategoryTypes {
  categoryName: string;
}

@Table({tableName: 'categories'})
export class Category extends Model<Category, CategoryTypes> {
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  categoryId: number;

  @Column({type: DataType.TEXT, unique: true, validate: {notEmpty: true}})
  categoryName: string;
}