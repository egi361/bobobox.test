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
exports.Stay = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const reservation_model_1 = require("./reservation.model");
const room_model_1 = require("./room.model");
const stayRoom_model_1 = require("./stayRoom.model");
let Stay = class Stay extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: false,
    }),
    __metadata("design:type", String)
], Stay.prototype, "guest_name", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => reservation_model_1.Reservation),
    (0, sequelize_typescript_1.Column)({
        allowNull: false
    }),
    __metadata("design:type", Number)
], Stay.prototype, "reservation_id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => room_model_1.Room),
    (0, sequelize_typescript_1.Column)({
        allowNull: false
    }),
    __metadata("design:type", Number)
], Stay.prototype, "room_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => reservation_model_1.Reservation, {
        onUpdate: 'NO ACTION',
        onDelete: 'NO ACTION'
    }),
    __metadata("design:type", reservation_model_1.Reservation)
], Stay.prototype, "reservation", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => room_model_1.Room),
    __metadata("design:type", room_model_1.Room)
], Stay.prototype, "room", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => stayRoom_model_1.StayRoom, {
        onUpdate: 'NO ACTION',
        onDelete: 'NO ACTION'
    }),
    __metadata("design:type", Array)
], Stay.prototype, "stayRooms", void 0);
Stay = __decorate([
    sequelize_typescript_1.Table
], Stay);
exports.Stay = Stay;
//# sourceMappingURL=stay.model.js.map