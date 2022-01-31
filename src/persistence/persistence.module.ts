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
import {Op} from 'sequelize';

const operatorsAliases = {
    $eq: Op.eq,
    $ne: Op.ne,
    $gte: Op.gte,
    $gt: Op.gt,
    $lte: Op.lte,
    $lt: Op.lt,
    $not: Op.not,
    $in: Op.in,
    $notIn: Op.notIn,
    $is: Op.is,
    $like: Op.like,
    $notLike: Op.notLike,
    $iLike: Op.iLike,
    $notILike: Op.notILike,
    $regexp: Op.regexp,
    $notRegexp: Op.notRegexp,
    $iRegexp: Op.iRegexp,
    $notIRegexp: Op.notIRegexp,
    $between: Op.between,
    $notBetween: Op.notBetween,
    $overlap: Op.overlap,
    $contains: Op.contains,
    $contained: Op.contained,
    $adjacent: Op.adjacent,
    $strictLeft: Op.strictLeft,
    $strictRight: Op.strictRight,
    $noExtendRight: Op.noExtendRight,
    $noExtendLeft: Op.noExtendLeft,
    $and: Op.and,
    $or: Op.or,
    $any: Op.any,
    $all: Op.all,
    $values: Op.values,
    $col: Op.col
};

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
            operatorsAliases: operatorsAliases
        }),
    ]
})
export class PersistenceModule { }
