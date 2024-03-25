import { Station, IStation } from "../model/station.model";

class StationRepository {
    async getAllStation() {
        return await Station.find().populate('sensors').exec(); // Corrigido o caminho para a população
    }
    async getStationID(id: string){
        return await Station.findById(id).populate('sensors').exec(); // Corrigido o caminho para a população
    }
    async createStation(body: IStation){
        return await Station.create(body);
    }
    async updateStation(id: string, body: IStation){
        return await Station.updateOne({_id: id}, { $set: body });
    }
    async deleteStation(id: string){
        return await Station.deleteOne({_id: id});
    }
}

export default new StationRepository();
