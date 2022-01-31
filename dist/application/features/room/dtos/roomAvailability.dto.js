"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvailableRoomDto = exports.RoomPriceDto = void 0;
class RoomPriceDto {
    constructor(date, price) {
        this.date = date;
        this.price = price;
    }
}
exports.RoomPriceDto = RoomPriceDto;
class AvailableRoomDto {
    constructor(room_id, room_number, prices) {
        this.room_id = room_id;
        this.room_number = room_number;
    }
}
exports.AvailableRoomDto = AvailableRoomDto;
class RoomAvailabilityDto {
    constructor(room_qty, room_type_id, checkin_date, checkout_date, total_price, availableRooms) {
        this.room_qty = room_qty;
        this.room_type_id = room_type_id,
            this.checkin_date = checkin_date;
        this.checkout_date = checkout_date;
        this.total_price = total_price;
        this.availableRooms = availableRooms;
    }
}
exports.default = RoomAvailabilityDto;
//# sourceMappingURL=roomAvailability.dto.js.map