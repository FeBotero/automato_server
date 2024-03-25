"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sensor_repository_1 = __importDefault(require("../repository/sensor.repository"));
class SensorService {
    async getAllsensor() {
        return await sensor_repository_1.default.getAllSensor();
    }
    async getSensorID(id) {
        return await sensor_repository_1.default.getSensorID(id);
    }
    async createSensor(body) {
        return await sensor_repository_1.default.createSensor(body);
    }
    async updateSensor(id, body) {
        return await sensor_repository_1.default.updateSensor(id, body);
    }
    async deleteSensor(id) {
        return await sensor_repository_1.default.deleteSensor(id);
    }
}
exports.default = new SensorService();
//# sourceMappingURL=sensor.service.js.map