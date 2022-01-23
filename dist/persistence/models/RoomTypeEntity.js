'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const BaseModel_1 = require("../shared/BaseModel");
module.exports = (sequelize, DataTypes) => {
    class RoomTypeEntity extends BaseModel_1.BaseEntityModel {
        static associate(models) {
            RoomTypeEntity.hasMany(models.Price, {
                as: 'prices',
                foreignKey: 'room_type_id'
            });
            RoomTypeEntity.hasMany(models.Room, {
                as: 'rooms',
                foreignKey: 'room_type_id'
            });
        }
    }
    ;
    RoomTypeEntity.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: sequelize_1.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'RoomType',
    });
    return RoomTypeEntity;
};
//# sourceMappingURL=RoomTypeEntity.js.map