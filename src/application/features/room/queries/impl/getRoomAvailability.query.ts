import BaseRequest, { IBaseRequest } from '../../../../commons/base.request';
export interface IGetRoomAvailabilityRequest{
    checkin_date:Date;
    checkout_date:Date;
    room_qty:number;
    room_type_id:number;
}
export class GetRoomAvailabilityQuery{
    checkin_date: Date;
    checkout_date: Date;
    room_qty: number;
    room_type_id: number;
    public constructor(request: IGetRoomAvailabilityRequest) {
        this.checkin_date = request.checkin_date;
        this.checkout_date = request.checkout_date;
        this.room_qty = request.room_qty;
        this.room_type_id = request.room_type_id;
    }
}