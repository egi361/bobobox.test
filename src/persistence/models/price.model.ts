import { Column, Model, Table, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import {DataTypes} from 'sequelize';
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
    price: Number;
    @Column({
        allowNull: false
    })
    @ForeignKey(()=>RoomType)
    room_type_id: Number;

    @BelongsTo(()=>RoomType)
    room_type:RoomType;

}