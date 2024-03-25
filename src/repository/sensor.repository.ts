import { Sensor, ISensor } from "../model/sensor.model";
import { Station } from "../model/station.model";

class SensorRepository {
    async getAllSensor() {
        return await Sensor.find();
    }
    async getSensorID(id: string){
        return await Sensor.findById(id);
    }
    async createSensor(body: ISensor){
        const sensor = await new Sensor(body).save();
        await Station.findByIdAndUpdate(body.station, {$push: {sensors: sensor._id}})

    }
    async updateSensor(id: string, body:ISensor){
        return await Sensor.updateOne({_id:id}, {$set: body});
    }
    async deleteSensor(id: string){
        return await Sensor.deleteOne({_id:id});
    }
}
export default new SensorRepository();