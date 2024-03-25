"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sensor = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const moment_1 = __importDefault(require("moment"));
const SensorSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    station: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Station', required: true },
    createdAt: { type: String, default: () => (0, moment_1.default)().format("DD/MM/YYYY, HH:mm:ss") }
});
exports.Sensor = mongoose_1.default.model("Sensor", SensorSchema);
//# sourceMappingURL=sensor.model.js.map