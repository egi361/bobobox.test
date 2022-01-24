import { Model } from 'sequelize-typescript';
import { Hotel } from './hotel.model';
import { RoomType } from './roomType.model';
import { Stay } from './stay.model';
import { StayRoom } from './stayRoom.model';
export declare class Room extends Model {
    room_number: string;
    room_status: string;
    hotel_id: number;
    room_type_id: number;
    hotel: Hotel;
    roomType: RoomType;
    stays: Stay[];
    stayRooms: StayRoom[];
}
