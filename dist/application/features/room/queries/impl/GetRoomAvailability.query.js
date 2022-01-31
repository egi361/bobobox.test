"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetRoomAvailabilityQuery = void 0;
class GetRoomAvailabilityQuery {
    constructor(request) {
        this.checkin_date = request.checkin_date;
        this.checkout_date = request.checkout_date;
        this.room_qty = request.room_qty;
        this.room_type_id = request.room_type_id;
    }
}
exports.GetRoomAvailabilityQuery = GetRoomAvailabilityQuery;
//# sourceMappingURL=GetRoomAvailability.query.js.map