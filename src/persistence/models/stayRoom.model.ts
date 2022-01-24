import { Column, Model, Table, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { Room } from './room.model';
import { Stay } from './stay.model';

@Table
export class StayRoom extends Model {
    @Column({
        allowNull:false,
    })
    date: Date;

    @ForeignKey(()=>Stay)
    @Column({
        allowNull: false
    })
    stay_id:number

    @ForeignKey(() => Room)
    @Column({
        allowNull: false
    })
    room_id: number

    @BelongsTo(() => Stay, {
        onUpdate: 'NO ACTION',
        onDelete: 'NO ACTION'
    })
    stay:Stay

    @BelongsTo(() => Room)
    room: Room
}