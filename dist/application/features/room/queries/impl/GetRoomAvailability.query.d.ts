export interface IGetRoomAvailabilityRequest {
    checkin_date: Date;
    checkout_date: Date;
    room_qty: number;
    room_type_id: number;
}
export declare class GetRoomAvailabilityQuery {
    checkin_date: Date;
    checkout_date: Date;
    room_qty: number;
    room_type_id: number;
    constructor(request: IGetRoomAvailabilityRequest);
}
