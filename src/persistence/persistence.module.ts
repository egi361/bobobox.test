import { Module } from '@nestjs/common';
import { Hotel } from './models/hotel.model';
import { RoomType } from './models/roomType.model';
import { Price } from './models/price.model';
import { Room } from './models/room.model';
import { Reservation } from './models/reservation.model';
import { Stay } from './models/stay.model';
import { StayRoom } from './models/stayRoom.model';
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
                Price,
                Room,
                Reservation,
                Stay,
                StayRoom
            ],
            synchronize: true,
            autoLoadModels: true,
        }),
    ]
})
export class PersistenceModule { }
