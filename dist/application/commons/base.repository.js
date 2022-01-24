"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_base_1 = require("../../app.base");
class BaseRepository {
    constructor(Model) {
        this.Model = Model;
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