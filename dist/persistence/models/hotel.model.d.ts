import { Model } from 'sequelize-typescript';
import { Room } from './room.model';
import { Reservation } from './reservation.model';
export declare class Hotel extends Model {
    hotel_name: string;
    address: string;
    rooms: Room[];
    reservations: Reservation[];
}
