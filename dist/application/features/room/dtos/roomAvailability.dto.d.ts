export declare class RoomPriceDto {
    date: Date;
    price: number;
    constructor(date: Date, price: number);
}
export declare class AvailableRoomDto {
    room_id: number;
    room_number: string;
    prices: RoomPriceDto[];
    constructor(room_id: number, room_number: string, prices: RoomPriceDto[]);
}
export default class RoomAvailabilityDto {
    room_qty: number;
    room_type_id: number;
    checkin_date: Date;
    checkout_date: Date;
    total_price: number;
    availableRooms: AvailableRoomDto[];
    constructor(room_qty: number, room_type_id: number, checkin_date: Date, checkout_date: Date, total_price: number, availableRooms: AvailableRoomDto[]);
}
