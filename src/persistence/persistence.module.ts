import { Module } from '@nestjs/common';
import { Hotel } from './models/hotel.model';
import { RoomType } from './models/roomType.model';
import { Price } from './models/price.model';
import { SequelizeModule } from '@nestjs/sequelize';
import * as config from './config/config.json';

@Module({
    imports: [
        SequelizeModule.forRoot({
            dialect: 'mssql',
            host: config.development.host,
            port: config.development.port,
            username: config.development.username,
            password: config.development.password,
            database: config.development.database,
            models: [
                Hotel,
                RoomType,
                Price
            ],
            synchronize: true,
            autoLoadModels: true,
        }),
    ]
})
export class PersistenceModule { }
