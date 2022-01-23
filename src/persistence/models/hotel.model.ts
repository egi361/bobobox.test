import { Column, Model, Table } from 'sequelize-typescript';

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

}