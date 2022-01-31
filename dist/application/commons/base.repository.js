"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const app_base_1 = require("../../app.base");
const sqs = require('sequelize-querystring');
class BaseRepository {
    constructor(Model) {
        this.operators = {
            $eq: sequelize_1.Op.eq,
            $ne: sequelize_1.Op.ne,
            $gte: sequelize_1.Op.gte,
            $gt: sequelize_1.Op.gt,
            $lte: sequelize_1.Op.lte,
            $lt: sequelize_1.Op.lt,
            $not: sequelize_1.Op.not,
            $in: sequelize_1.Op.in,
            $notIn: sequelize_1.Op.notIn,
            $is: sequelize_1.Op.is,
            $like: sequelize_1.Op.like,
            $notLike: sequelize_1.Op.notLike,
            $iLike: sequelize_1.Op.iLike,
            $notILike: sequelize_1.Op.notILike,
            $regexp: sequelize_1.Op.regexp,
            $notRegexp: sequelize_1.Op.notRegexp,
            $iRegexp: sequelize_1.Op.iRegexp,
            $notIRegexp: sequelize_1.Op.notIRegexp,
            $between: sequelize_1.Op.between,
            $notBetween: sequelize_1.Op.notBetween,
            $overlap: sequelize_1.Op.overlap,
            $contains: sequelize_1.Op.contains,
            $contained: sequelize_1.Op.contained,
            $adjacent: sequelize_1.Op.adjacent,
            $strictLeft: sequelize_1.Op.strictLeft,
            $strictRight: sequelize_1.Op.strictRight,
            $noExtendRight: sequelize_1.Op.noExtendRight,
            $noExtendLeft: sequelize_1.Op.noExtendLeft,
            $and: sequelize_1.Op.and,
            $or: sequelize_1.Op.or,
            $any: sequelize_1.Op.any,
            $all: sequelize_1.Op.all,
            $values: sequelize_1.Op.values,
            $col: sequelize_1.Op.col
        };
        this.Model = Model;
    }
    async filter(request) {
        try {
            const doc = await this.Model.findAndCountAll({
                offset: request.offset || 0,
                limit: request.limit || 10,
                where: request.filter ? sqs.find(request.filter) : {},
                order: request.order ? sqs.sort(request.order) : []
            });
            if (!doc) {
                return app_base_1.Result.fail(new app_base_1.RepoError('Not found', 404));
            }
            return app_base_1.PagedResult.okPaged(doc.rows, doc.count);
        }
        catch (ex) {
            return app_base_1.Result.fail(new app_base_1.RepoError(ex.message, 500));
        }
    }
    async findAll() {
        try {
            const docs = await this.Model.findAll();
            if (!docs) {
                return app_base_1.Result.fail(new app_base_1.RepoError('Not found', 404));
            }
            return app_base_1.Result.ok(docs);
        }
        catch (ex) {
            return app_base_1.Result.fail(new app_base_1.RepoError(ex.message, 500));
        }
    }
    async save(doc) {
        try {
            const savedDoc = await doc.save();
            return app_base_1.Result.ok(savedDoc);
        }
        catch (ex) {
            return app_base_1.Result.fail(new app_base_1.RepoError(ex.message, 500));
        }
    }
    async findById(id) {
        try {
            const doc = await this.Model.findOne({
                where: {
                    id: id
                }
            });
            if (!doc) {
                return app_base_1.Result.fail(new app_base_1.RepoError('Not found', 404));
            }
            return app_base_1.Result.ok(doc);
        }
        catch (ex) {
            return app_base_1.Result.fail(new app_base_1.RepoError(ex.message, 500));
        }
    }
}
exports.default = BaseRepository;
//# sourceMappingURL=base.repository.js.map