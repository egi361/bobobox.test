'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const BaseModel_1 = require("../shared/BaseModel");
module.exports = (sequelize, DataTypes) => {
    class PriceEntity extends BaseModel_1.BaseEntityModel {
        static associate(models) {
            PriceEntity.belongsTo(models.RoomType, {
                foreignKey: 'room_type_id'
            });
        }
    }
    ;
    PriceEntity.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: sequelize_1.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        room_type_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'RoomTypes',
                key: 'id'
            }
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'Price',
    });
    return PriceEntity;
};
//# sourceMappingURL=PriceEntity.js.map