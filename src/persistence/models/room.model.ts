import { Column, Model, Table, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import {Hotel} from './hotel.model';
import { RoomType } from './roomType.model';
import { Stay } from './stay.model';
import { StayRoom } from './stayRoom.model';
import {ENUM} from 'sequelize';

@Table
export class Room extends Model {
    @Column({
        allowNull:false,
    })
    room_number: string;

    @Column({
        allowNull: false,
        type:ENUM('available', 'out of service')
    })
    room_status: string;

    @Column({
        allowNull: false
    })
    @ForeignKey(()=>Hotel)
    hotel_id: number;

    @Column({
        allowNull: false
    })
    @ForeignKey(() => RoomType)
    room_type_id: number;

    @BelongsTo(()=>Hotel)
    hotel: Hotel
    
    @BelongsTo(() => RoomType)
    roomType: RoomType

    @HasMany(()=>Stay)
    stays:Stay[]

    @HasMany(() => StayRoom)
    stayRooms: StayRoom[]
}