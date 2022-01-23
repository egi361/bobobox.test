"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bobobox_base_1 = require("bobobox.base");
class Repository {
    constructor(Model) {
        this.Model = Model;
    }
    async save(doc) {
        try {
            const savedDoc = await doc.save();
            return bobobox_base_1.Result.ok(savedDoc);
        }
        catch (ex) {
            return bobobox_base_1.Result.fail(new bobobox_base_1.RepoError(ex.message, 500));
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
                return bobobox_base_1.Result.fail(new bobobox_base_1.RepoError('Not found', 404));
            }
            return bobobox_base_1.Result.ok(doc);
        }
        catch (ex) {
            return bobobox_base_1.Result.fail(new bobobox_base_1.RepoError(ex.message, 500));
        }
    }
}
exports.default = Repository;
//# sourceMappingURL=Repository.js.map