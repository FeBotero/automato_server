"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reading_model_1 = require("../model/reading.model");
class ReadingRepository {
    async getAllReading() {
        return await reading_model_1.Reading.find().populate('readings.sensor', 'id name').exec();
    }
    async getReadingID(id) {
        return await reading_model_1.Reading.findById(id).populate('readings.sensor', 'id name').exec();
    }
    async createReading(body) {
        return await reading_model_1.Reading.create(body);
    }
    async updateReading(id, body) {
        return await reading_model_1.Reading.updateOne({ _id: id }, { $set: body });
    }
    async deleteReading(id) {
        return await reading_model_1.Reading.deleteOne({ _id: id });
    }
}
exports.default = new ReadingRepository();
//# sourceMappingURL=reading.repository.js.map