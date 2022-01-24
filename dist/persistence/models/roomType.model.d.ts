import { Model } from 'sequelize-typescript';
import { Price } from './price.model';
import { Room } from './room.model';
export declare class RoomType extends Model {
    name: string;
    prices: Price[];
    rooms: Room[];
}
