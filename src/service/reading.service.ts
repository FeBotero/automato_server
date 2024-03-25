import { IReading } from "../model/reading.model";
import readingRepository from "../repository/reading.repository";

class ReadingService{
    async getAllReading() {
        return await readingRepository.getAllReading();
    }
    async getReadingID(id: string){
        return await readingRepository.getReadingID(id);
    }
    async createReading(body: IReading){
        return await readingRepository.createReading(body);
    }
    async updateReading(id: string, body:IReading){
        return await readingRepository.updateReading(id,body);
    }
    async deleteReading(id: string){
        return await readingRepository.deleteReading(id);
    }
}
export default new ReadingService();