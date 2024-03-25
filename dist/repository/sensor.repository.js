"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sensor_model_1 = require("../model/sensor.model");
const station_model_1 = require("../model/station.model");
class SensorRepository {
    async getAllSensor() {
        return await sensor_model_1.Sensor.find();
    }
    async getSensorID(id) {
        return await sensor_model_1.Sensor.findById(id);
    }
    async createSensor(body) {
        const sensor = await new sensor_model_1.Sensor(body).save();
        await station_model_1.Station.findByIdAndUpdate(body.station, { $push: { sensors: sensor._id } });
    }
    async updateSensor(id, body) {
        return await sensor_model_1.Sensor.updateOne({ _id: id }, { $set: body });
    }
    async deleteSensor(id) {
        return await sensor_model_1.Sensor.deleteOne({ _id: id });
    }
}
exports.default = new SensorRepository();
//# sourceMappingURL=sensor.repository.js.map