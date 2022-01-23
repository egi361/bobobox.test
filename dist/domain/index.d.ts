import { IEntity } from '../entity';
export interface HotelAttributes extends IEntity<string> {
    hotel_name: string;
    address: string;
}
export interface RoomTypeAttributes extends IEntity<string> {
    name: string;
}
export interface PriceAttributes extends IEntity<string> {
    date: Date;
    room_type_id: string;
    price: number;
}
export interface RoomAttributes extends IEntity<string> {
    room_type_id: string;
    hotel_id: string;
    room_number: string;
    room_status: string;
}
export interface ReservationAttributes extends IEntity<string> {
    order_id: string;
    customer_name: string;
    booked_room_count: Number;
    checkin_date: Date;
    checkout_date: Date;
    hotel_id: String;
}
export interface StayAttributes extends IEntity<string> {
    guest_name: string;
    reservation_id: string;
    room_id: string;
}
export interface StayRoomAttributes extends IEntity<string> {
    stay_id: string;
    date: Date;
    room_id: string;
}
