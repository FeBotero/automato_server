"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const station_repository_1 = __importDefault(require("../repository/station.repository"));
class StationService {
    async getAllStation() {
        return await station_repository_1.default.getAllStation();
    }
    async getStationID(id) {
        return await station_repository_1.default.getStationID(id);
    }
    async createStation(body) {
        return await station_repository_1.default.createStation(body);
    }
    async updateStation(id, body) {
        return await station_repository_1.default.updateStation(id, body);
    }
    async deleteStation(id) {
        return await station_repository_1.default.deleteStation(id);
    }
}
exports.default = new StationService();
//# sourceMappingURL=station.service.js.map