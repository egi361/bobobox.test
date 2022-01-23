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
exports.KillDragonHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const hotel_repository_1 = require("../../repository/hotel.repository");
const kill_dragon_command_1 = require("../impl/kill-dragon.command");
let KillDragonHandler = class KillDragonHandler {
    constructor(repository, publisher) {
        this.repository = repository;
        this.publisher = publisher;
    }
    async execute(command) {
        const { heroId, dragonId } = command;
        const hero = this.publisher.mergeObjectContext(await this.repository.findOneById(+heroId));
        hero.killEnemy(dragonId);
        hero.commit();
    }
};
KillDragonHandler = __decorate([
    (0, cqrs_1.CommandHandler)(kill_dragon_command_1.KillDragonCommand),
    __metadata("design:paramtypes", [hotel_repository_1.HotelRepository,
        cqrs_1.EventPublisher])
], KillDragonHandler);
exports.KillDragonHandler = KillDragonHandler;
//# sourceMappingURL=kill-dragon.handler.js.map