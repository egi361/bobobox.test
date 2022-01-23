'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const BaseModel_1 = require("../shared/BaseModel");
module.exports = (sequelize, DataTypes) => {
    class HotelEntity extends BaseModel_1.BaseEntityModel {
        static associate(models) {
            HotelEntity.hasMany(models.Room, {
                foreignKey: 'hotel_id',
                as: 'rooms'
            });
            HotelEntity.hasMany(models.Reservation, {
                foreignKey: 'hotel_id',
                as: 'reservations'
            });
        }
    }
    ;
    HotelEntity.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: sequelize_1.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        hotel_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'Hotel',
    });
    return HotelEntity;
};
//# sourceMappingURL=HotelEntity.js.map