import { Column, Model, Table, HasMany } from 'sequelize-typescript';
import {Room} from './room.model';
import { Reservation } from './reservation.model';

@Table
export class Hotel extends Model {
    @Column({
        allowNull:false,
    })
    hotel_name: string;

    @Column({
        allowNull: false
    })
    address: string;

    @HasMany(()=>Room)
    rooms:Room[]

    @HasMany(() => Reservation)
    reservations: Reservation[]

}