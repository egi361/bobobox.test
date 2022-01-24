import { Column, Model, Table, BelongsTo, ForeignKey, HasMany } from 'sequelize-typescript';
import {Reservation} from './reservation.model';
import { Room } from './room.model';
import { StayRoom } from './stayRoom.model';

@Table
export class Stay extends Model {
    @Column({
        allowNull:false,
    })
    guest_name: string;

    @ForeignKey(()=>Reservation)
    @Column({
        allowNull: false
    })
    reservation_id:number

    @ForeignKey(() => Room)
    @Column({
        allowNull: false
    })
    room_id: number

    @BelongsTo(() => Reservation, {
        onUpdate: 'NO ACTION',
        onDelete: 'NO ACTION'
    })
    reservation:Reservation

    @BelongsTo(() => Room)
    room: Room

    @HasMany(() => StayRoom, {
        onUpdate: 'NO ACTION',
        onDelete: 'NO ACTION'
    })
    stayRooms:StayRoom[]

}