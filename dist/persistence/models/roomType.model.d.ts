import { Model } from 'sequelize-typescript';
import { Price } from './price.model';
export declare class RoomType extends Model {
    name: string;
    prices: Price[];
}
