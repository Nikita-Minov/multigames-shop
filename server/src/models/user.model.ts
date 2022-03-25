import {Column, DataType, Model, Table} from 'sequelize-typescript';

interface UserTypes {
  username: string;
  password: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserTypes> {
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  userId: number;

  @Column({type: DataType.TEXT, unique: true, validate: {notEmpty: true}})
  username: string;

  @Column({type: DataType.TEXT, allowNull: false, validate: {notEmpty: true}})
  password: string;

  @Column({type: DataType.BOOLEAN, defaultValue: false})
  isAdmin: boolean;
}