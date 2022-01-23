'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseAuditableEntityModel = exports.BaseEntityModel = void 0;
const sequelize_1 = require("sequelize");
class BaseEntityModel extends sequelize_1.Model {
}
exports.BaseEntityModel = BaseEntityModel;
class BaseAuditableEntityModel extends sequelize_1.Model {
}
exports.BaseAuditableEntityModel = BaseAuditableEntityModel;
//# sourceMappingURL=BaseModel.js.map