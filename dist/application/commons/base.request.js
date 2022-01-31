"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseRequest {
    constructor(request) {
        this.order = request.order;
        this.filter = request.filter;
        this.limit = request.limit;
        this.offset = request.offset;
    }
}
exports.default = BaseRequest;
//# sourceMappingURL=base.request.js.map