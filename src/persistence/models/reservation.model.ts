import { Column, Model, Table, BelongsTo, ForeignKey, HasMany } from 'sequelize-typescript';
import {INTEGER} from 'sequelize';
import {Hotel} from './hotel.model';
import { Stay } from './stay.model';

@Table
export class Reservation extends Model {
    @Column({
        allowNull:false,
    })
    customer_name: string;

    @Column({
        allowNull: false,
        type:INTEGER
    })
    booked_room_count: Number;

    @Column({
        allowNull: false,
    })
    checkin_date: Date;

    @Column({
        allowNull: false,
    })
    checkout_date: Date;

    @Column({
        allowNull: false
    })
    order_id: string;

    @ForeignKey(()=>Hotel)
    @Column({
        allowNull: false
    })
    hotel_id:number

    @BelongsTo(()=>Hotel)
    hotel:Hotel

    @HasMany(()=>Stay,{
        onUpdate:'NO ACTION',
        onDelete: 'NO ACTION'
    })
    stays:Stay[]
}