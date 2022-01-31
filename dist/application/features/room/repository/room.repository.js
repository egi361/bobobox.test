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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomRepository = void 0;
const common_1 = require("@nestjs/common");
const room_model_1 = require("../../../../persistence/models/room.model");
const roomType_model_1 = require("../../../../persistence/models/roomType.model");
const stay_model_1 = require("../../../../persistence/models/stay.model");
const price_model_1 = require("../../../../persistence/models/price.model");
const reservation_model_1 = require("../../../../persistence/models/reservation.model");
const base_repository_1 = __importDefault(require("../../../commons/base.repository"));
const sequelize_1 = require("sequelize");
const app_base_1 = require("../../../../app.base");
const roomAvailability_dto_1 = __importStar(require("../dtos/roomAvailability.dto"));
let RoomRepository = class RoomRepository extends base_repository_1.default {
    constructor() {
        super(room_model_1.Room);
    }
    async getRoomAvailability(request) {
        try {
            const reservations = await reservation_model_1.Reservation.findAll({
                include: [
                    {
                        model: stay_model_1.Stay,
                        include: [
                            {
                                model: room_model_1.Room
                            }
                        ]
                    }
                ],
                where: {
                    [sequelize_1.Op.or]: {
                        checkin_date: {
                            [sequelize_1.Op.lte]: request.checkin_date
                        },
                        checkout_date: {
                            [sequelize_1.Op.gte]: request.checkin_date
                        }
                    },
                    [sequelize_1.Op.or]: {
                        checkin_date: {
                            [sequelize_1.Op.lt]: request.checkout_date
                        },
                        checkout_date: {
                            [sequelize_1.Op.gte]: request.checkout_date
                        }
                    },
                    [sequelize_1.Op.or]: {
                        checkin_date: {
                            [sequelize_1.Op.gte]: request.checkin_date,
                            [sequelize_1.Op.lte]: request.checkout_date
                        }
                    }
                }
            });
            const bookedRooms = reservations.map((reservation) => {
                return reservation.stays[0].room.id;
            });
            const rooms = await this.Model.findAll({
                include: [{
                        model: roomType_model_1.RoomType,
                        include: [
                            {
                                model: price_model_1.Price
                            }
                        ]
                    }],
                where: {
                    id: {
                        [sequelize_1.Op.notIn]: bookedRooms
                    },
                    room_type_id: request.room_type_id
                }
            });
            if (!rooms) {
                return app_base_1.Result.fail(new app_base_1.RepoError('Not found', 404));
            }
            const availableRooms = rooms.map((room) => {
                return new roomAvailability_dto_1.AvailableRoomDto(room.id, room.room_number, room.roomType.prices.map((price) => {
                    return new roomAvailability_dto_1.RoomPriceDto(request.checkin_date, price.price);
                }));
            });
            const roomAvailability = new roomAvailability_dto_1.default(request.room_qty, request.room_type_id, request.checkin_date, request.checkout_date, 0, availableRooms);
            return app_base_1.PagedResult.ok(roomAvailability);
        }
        catch (ex) {
            console.log(ex);
            return app_base_1.Result.fail(new app_base_1.RepoError(ex.message, 500));
        }
    }
};
RoomRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], RoomRepository);
exports.RoomRepository = RoomRepository;
//# sourceMappingURL=room.repository.js.map