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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersistenceModule = void 0;
const common_1 = require("@nestjs/common");
const hotel_model_1 = require("./models/hotel.model");
const roomType_model_1 = require("./models/roomType.model");
const price_model_1 = require("./models/price.model");
const room_model_1 = require("./models/room.model");
const reservation_model_1 = require("./models/reservation.model");
const stay_model_1 = require("./models/stay.model");
const stayRoom_model_1 = require("./models/stayRoom.model");
const sequelize_1 = require("@nestjs/sequelize");
const config = __importStar(require("./config/config.json"));
let PersistenceModule = class PersistenceModule {
};
PersistenceModule = __decorate([
    (0, common_1.Module)({
        imports: [
            sequelize_1.SequelizeModule.forRoot({
                dialect: 'mssql',
                host: config.development.host,
                port: config.development.port,
                username: config.development.username,
                password: config.development.password,
                database: config.development.database,
                models: [
                    hotel_model_1.Hotel,
                    roomType_model_1.RoomType,
                    price_model_1.Price,
                    room_model_1.Room,
                    reservation_model_1.Reservation,
                    stay_model_1.Stay,
                    stayRoom_model_1.StayRoom
                ],
                synchronize: true,
                autoLoadModels: true,
            }),
        ]
    })
], PersistenceModule);
exports.PersistenceModule = PersistenceModule;
//# sourceMappingURL=persistence.module.js.map