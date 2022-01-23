'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const BaseModel_1 = require("../shared/BaseModel");
module.exports = (sequelize, DataTypes) => {
    class RoomEntity extends BaseModel_1.BaseEntityModel {
        static associate(models) {
            RoomEntity.belongsTo(models.RoomType, {
                foreignKey: 'room_type_id'
            });
            RoomEntity.belongsTo(models.Hotel, {
                foreignKey: 'hotel_id'
            });
            RoomEntity.hasMany(models.Stay, {
                foreignKey: 'room_id',
                as: 'stays'
            });
            RoomEntity.hasMany(models.StayRoom, {
                foreignKey: 'room_id',
                as: 'stayRooms'
            });
        }
    }
    ;
    RoomEntity.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: sequelize_1.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        hotel_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'Hotels',
                key: 'id'
            }
        },
        room_number: {
            type: DataTypes.STRING,
            allowNull: false
        },
        room_status: {
            type: DataTypes.ENUM('available', 'out of service'),
            allowNull: false
        },
        room_type_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'RoomTypes',
                key: 'id'
            }
        }
    }, {
        sequelize,
        modelName: 'Room',
    });
    return RoomEntity;
};
//# sourceMappingURL=RoomEntity.js.map