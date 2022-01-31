export class RoomPriceDto{
    date:Date;
    price:number;
    constructor(
        date: Date,
        price: number,
    ){
        this.date = date;
        this.price = price;
    }
}
export class AvailableRoomDto{
    room_id:number;
    room_number:string;
    prices: RoomPriceDto[]
    constructor(
        room_id: number,
        room_number: string,
        prices: RoomPriceDto[]
    ){
        this.room_id = room_id;
        this.room_number = room_number;
    }
}
export default class RoomAvailabilityDto{
    room_qty: number;
    room_type_id: number;
    checkin_date: Date;
    checkout_date: Date;
    total_price: number;
    availableRooms: AvailableRoomDto[]
    constructor(
        room_qty: number,
        room_type_id: number,
        checkin_date: Date,
        checkout_date: Date,
        total_price: number,
        availableRooms: AvailableRoomDto[]
    ){
        this.room_qty = room_qty;
        this.room_type_id = room_type_id,
        this.checkin_date = checkin_date;
        this.checkout_date = checkout_date;
        this.total_price = total_price;
        this.availableRooms = availableRooms;
    }
}