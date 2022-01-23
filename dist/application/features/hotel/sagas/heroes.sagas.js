"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeroesGameSagas = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const clc = __importStar(require("cli-color"));
const operators_1 = require("rxjs/operators");
const drop_ancient_item_command_1 = require("../commands/impl/drop-ancient-item.command");
const hero_killed_dragon_event_1 = require("../events/impl/hero-killed-dragon.event");
const itemId = '0';
let HeroesGameSagas = class HeroesGameSagas {
    constructor() {
        this.dragonKilled = (events$) => {
            return events$
                .pipe((0, cqrs_1.ofType)(hero_killed_dragon_event_1.HeroKilledDragonEvent), (0, operators_1.delay)(1000), (0, operators_1.map)(event => {
                console.log(clc.redBright('Inside [HeroesGameSagas] Saga'));
                return new drop_ancient_item_command_1.DropAncientItemCommand(event.heroId, itemId);
            }));
        };
    }
};
__decorate([
    (0, cqrs_1.Saga)(),
    __metadata("design:type", Object)
], HeroesGameSagas.prototype, "dragonKilled", void 0);
HeroesGameSagas = __decorate([
    (0, common_1.Injectable)()
], HeroesGameSagas);
exports.HeroesGameSagas = HeroesGameSagas;
//# sourceMappingURL=heroes.sagas.js.map