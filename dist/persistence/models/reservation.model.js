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
exports.Reservation = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const sequelize_1 = require("sequelize");
const hotel_model_1 = require("./hotel.model");
const stay_model_1 = require("./stay.model");
let Reservation = class Reservation extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: false,
    }),
    __metadata("design:type", String)
], Reservation.prototype, "customer_name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: false,
        type: sequelize_1.INTEGER
    }),
    __metadata("design:type", Number)
], Reservation.prototype, "booked_room_count", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: false,
    }),
    __metadata("design:type", Date)
], Reservation.prototype, "checkin_date", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: false,
    }),
    __metadata("design:type", Date)
], Reservation.prototype, "checkout_date", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: false
    }),
    __metadata("design:type", String)
], Reservation.prototype, "order_id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => hotel_model_1.Hotel),
    (0, sequelize_typescript_1.Column)({
        allowNull: false
    }),
    __metadata("design:type", Number)
], Reservation.prototype, "hotel_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => hotel_model_1.Hotel),
    __metadata("design:type", hotel_model_1.Hotel)
], Reservation.prototype, "hotel", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => stay_model_1.Stay, {
        onUpdate: 'NO ACTION',
        onDelete: 'NO ACTION'
    }),
    __metadata("design:type", Array)
], Reservation.prototype, "stays", void 0);
Reservation = __decorate([
    sequelize_typescript_1.Table
], Reservation);
exports.Reservation = Reservation;
//# sourceMappingURL=reservation.model.js.map