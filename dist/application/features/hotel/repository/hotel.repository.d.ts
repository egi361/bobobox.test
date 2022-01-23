import { Hotel } from '../../../../persistence/models/hotel.model';
export declare class HotelRepository {
    findAll(): Promise<Hotel[]>;
}
