import { Model } from 'sequelize-typescript';
import { RoomType } from './roomType.model';
export declare class Price extends Model {
    date: Date;
    price: number;
    room_type_id: number;
    room_type: RoomType;
}
