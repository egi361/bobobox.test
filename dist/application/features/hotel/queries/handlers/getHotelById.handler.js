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
exports.GetHotelByIdHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const hotel_repository_1 = require("../../repository/hotel.repository");
const impl_1 = require("../impl");
let GetHotelByIdHandler = class GetHotelByIdHandler {
    constructor(repository) {
        this.repository = repository;
    }
    async execute(query) {
        return await this.repository.findById(query.id);
    }
};
GetHotelByIdHandler = __decorate([
    (0, cqrs_1.QueryHandler)(impl_1.GetHotelByIdQuery),
    __metadata("design:paramtypes", [hotel_repository_1.HotelRepository])
], GetHotelByIdHandler);
exports.GetHotelByIdHandler = GetHotelByIdHandler;
//# sourceMappingURL=getHotelById.handler.js.map