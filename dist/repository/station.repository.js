"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const station_model_1 = require("../model/station.model");
class StationRepository {
    async getAllStation() {
        return await station_model_1.Station.find().populate('sensors').exec(); // Corrigido o caminho para a população
    }
    async getStationID(id) {
        return await station_model_1.Station.findById(id).populate('sensors').exec(); // Corrigido o caminho para a população
    }
    async createStation(body) {
        return await station_model_1.Station.create(body);
    }
    async updateStation(id, body) {
        return await station_model_1.Station.updateOne({ _id: id }, { $set: body });
    }
    async deleteStation(id) {
        return await station_model_1.Station.deleteOne({ _id: id });
    }
}
exports.default = new StationRepository();
//# sourceMappingURL=station.repository.js.map