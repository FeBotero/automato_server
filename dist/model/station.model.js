"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Station = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const moment_1 = __importDefault(require("moment"));
const StationSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    sensors: [{ type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Sensor' }],
    createdAt: { type: String, default: () => (0, moment_1.default)().format("DD/MM/YYYY, HH:mm:ss") }
});
exports.Station = mongoose_1.default.model("Station", StationSchema);
//# sourceMappingURL=station.model.js.map