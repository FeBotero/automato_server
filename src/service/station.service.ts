import { IStation } from "../model/station.model";
import stationRepository from "../repository/station.repository";

class StationService{
    async getAllStation() {
        return await stationRepository.getAllStation();
    }
    async getStationID(id: string){
        return await stationRepository.getStationID(id);
    }
    async createStation(body: IStation){
        return await stationRepository.createStation(body);
    }
    async updateStation(id: string, body:IStation){
        return await stationRepository.updateStation(id,body);
    }
    async deleteStation(id: string){
        return await stationRepository.deleteStation(id);
    }
}
export default new StationService();