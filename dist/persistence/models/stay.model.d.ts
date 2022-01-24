import { Model } from 'sequelize-typescript';
import { Reservation } from './reservation.model';
import { Room } from './room.model';
import { StayRoom } from './stayRoom.model';
export declare class Stay extends Model {
    guest_name: string;
    reservation_id: number;
    room_id: number;
    reservation: Reservation;
    room: Room;
    stayRooms: StayRoom[];
}
