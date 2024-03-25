import { ISensor } from "../model/sensor.model";
import sensorRepository from "../repository/sensor.repository";

class SensorService{
    async getAllsensor() {
        return await sensorRepository.getAllSensor();
    }
    async getSensorID(id: string){
        return await sensorRepository.getSensorID(id);
    }
    async createSensor(body: ISensor){
        return await sensorRepository.createSensor(body);
    }
    async updateSensor(id: string, body:ISensor){
        return await sensorRepository.updateSensor(id,body);
    }
    async deleteSensor(id: string){
        return await sensorRepository.deleteSensor(id);
    }
}
export default new SensorService();