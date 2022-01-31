import { Column, Model, Table, ForeignKey, BelongsTo } from 'sequelize-typescript';
import {RoomType} from './roomType.model';
import { DECIMAL } from 'sequelize';

@Table
export class Price extends Model {
    @Column({
        allowNull:false,
    })
    date: Date;

    @Column({
        allowNull: false,
        type:DECIMAL(10,2)
    })
    price: number;
    @Column({
        allowNull: false
    })
    @ForeignKey(()=>RoomType)
    room_type_id: number;

    @BelongsTo(()=>RoomType)
    room_type:RoomType;

}