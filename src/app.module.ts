import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Hotel } from './persistence/models/hotel.model';
import { SequelizeModule, SequelizeModuleOptions } from '@nestjs/sequelize';
import * as config from './persistence/config/config.json';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mssql',
      host: config.development.host,
      port: config.development.port,
      username: config.development.username,
      password: config.development.password,
      database: config.development.database,
      models:[
        Hotel
      ],
      synchronize:true,
      autoLoadModels: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
