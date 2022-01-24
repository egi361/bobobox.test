import { Model } from 'sequelize-typescript';
import { Hotel } from './hotel.model';
import { Stay } from './stay.model';
export declare class Reservation extends Model {
    customer_name: string;
    booked_room_count: Number;
    checkin_date: Date;
    checkout_date: Date;
    order_id: string;
    hotel_id: number;
    hotel: Hotel;
    stays: Stay[];
}
