import { Module } from '@nestjs/common';
import {ConfigModule} from "@nestjs/config";
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "./models/user.model";
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import {Product} from "./models/product.model";
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import {Category} from "./models/category.model";
import { AgreementModule } from './agreement/agreement.module';
import {Agreement} from "./models/agreement.model";

@Module({
  imports: [
    ConfigModule.forRoot({
    envFilePath: `.${process.env.NODE_ENV}.env`,
  }),
    SequelizeModule.forFeature([User, Product, Category, Agreement]),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      models: [User, Product, Category],
      autoLoadModels: true,
    }),
    UsersModule,
    AuthModule,
    ProductModule,
    CategoryModule,
    AgreementModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
