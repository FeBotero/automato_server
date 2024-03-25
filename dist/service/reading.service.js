"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const reading_repository_1 = __importDefault(require("../repository/reading.repository"));
class ReadingService {
    async getAllReading() {
        return await reading_repository_1.default.getAllReading();
    }
    async getReadingID(id) {
        return await reading_repository_1.default.getReadingID(id);
    }
    async createReading(body) {
        return await reading_repository_1.default.createReading(body);
    }
    async updateReading(id, body) {
        return await reading_repository_1.default.updateReading(id, body);
    }
    async deleteReading(id) {
        return await reading_repository_1.default.deleteReading(id);
    }
}
exports.default = new ReadingService();
//# sourceMappingURL=reading.service.js.map