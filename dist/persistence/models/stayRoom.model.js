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
exports.StayRoom = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const room_model_1 = require("./room.model");
const stay_model_1 = require("./stay.model");
let StayRoom = class StayRoom extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: false,
    }),
    __metadata("design:type", Date)
], StayRoom.prototype, "date", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => stay_model_1.Stay),
    (0, sequelize_typescript_1.Column)({
        allowNull: false
    }),
    __metadata("design:type", Number)
], StayRoom.prototype, "stay_id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => room_model_1.Room),
    (0, sequelize_typescript_1.Column)({
        allowNull: false
    }),
    __metadata("design:type", Number)
], StayRoom.prototype, "room_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => stay_model_1.Stay, {
        onUpdate: 'NO ACTION',
        onDelete: 'NO ACTION'
    }),
    __metadata("design:type", stay_model_1.Stay)
], StayRoom.prototype, "stay", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => room_model_1.Room),
    __metadata("design:type", room_model_1.Room)
], StayRoom.prototype, "room", void 0);
StayRoom = __decorate([
    sequelize_typescript_1.Table
], StayRoom);
exports.StayRoom = StayRoom;
//# sourceMappingURL=stayRoom.model.js.map