import { Model } from 'sequelize-typescript';
import { Room } from './room.model';
import { Stay } from './stay.model';
export declare class StayRoom extends Model {
    date: Date;
    stay_id: number;
    room_id: number;
    stay: Stay;
    room: Room;
}
