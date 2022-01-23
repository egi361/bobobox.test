import { Column, Model, Table, HasMany } from 'sequelize-typescript';
import {Price} from './price.model';

@Table
export class RoomType extends Model {
    @Column({
        allowNull:false,
    })
    name: string;

    @HasMany(()=>Price)
    prices:Price[]
}