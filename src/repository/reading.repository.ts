import { Reading, IReading } from "../model/reading.model";

class ReadingRepository {
    async getAllReading() {
        return await Reading.find().populate('readings.sensor', 'id name').exec();
    }
    async getReadingID(id: string) {
        return await Reading.findById(id).populate('readings.sensor', 'id name').exec();
    }
    async createReading(body: IReading) {
        return await Reading.create(body);
    }
    async updateReading(id: string, body: IReading) {
        return await Reading.updateOne({ _id: id }, { $set: body });
    }
    async deleteReading(id: string) {
        return await Reading.deleteOne({ _id: id });
    }
}
export default new ReadingRepository();
