"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const URL = process.env.URL_DATABASE || "";
const sensors = "sensors_reading";
const stations = "weather_station";
exports.default = mongoose_1.default.connect(URL);
//# sourceMappingURL=mongose.config.js.map