import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class RoomType extends Model {
    @Column({
        allowNull:false,
    })
    name: string;
}