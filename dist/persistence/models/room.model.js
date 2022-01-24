"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Room = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const hotel_model_1 = require("./hotel.model");
const roomType_model_1 = require("./roomType.model");
const stay_model_1 = require("./stay.model");
const stayRoom_model_1 = require("./stayRoom.model");
const sequelize_1 = require("sequelize");
let Room = class Room extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: false,
    }),
    __metadata("design:type", String)
], Room.prototype, "room_number", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: false,
        type: (0, sequelize_1.ENUM)('available', 'out of service')
    }),
    __metadata("design:type", String)
], Room.prototype, "room_status", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: false
    }),
    (0, sequelize_typescript_1.ForeignKey)(() => hotel_model_1.Hotel),
    __metadata("design:type", Number)
], Room.prototype, "hotel_id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: false
    }),
    (0, sequelize_typescript_1.ForeignKey)(() => roomType_model_1.RoomType),
    __metadata("design:type", Number)
], Room.prototype, "room_type_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => hotel_model_1.Hotel),
    __metadata("design:type", hotel_model_1.Hotel)
], Room.prototype, "hotel", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => roomType_model_1.RoomType),
    __metadata("design:type", roomType_model_1.RoomType)
], Room.prototype, "roomType", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => stay_model_1.Stay),
    __metadata("design:type", Array)
], Room.prototype, "stays", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => stayRoom_model_1.StayRoom),
    __metadata("design:type", Array)
], Room.prototype, "stayRooms", void 0);
Room = __decorate([
    sequelize_typescript_1.Table
], Room);
exports.Room = Room;
//# sourceMappingURL=room.model.js.map