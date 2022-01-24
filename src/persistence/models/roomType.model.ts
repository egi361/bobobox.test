import { Column, Model, Table, HasMany } from 'sequelize-typescript';
import {Price} from './price.model';
import { Room } from './room.model';

@Table
export class RoomType extends Model {
    @Column({
        allowNull:false,
    })
    name: string;

    @HasMany(()=>Price)
    prices:Price[]

    @HasMany(() => Room)
    rooms: Room[]
}