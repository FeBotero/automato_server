import mongoose, { Schema } from "mongoose";
import moment from 'moment';

export interface ISensor {
    name: string;
    station: mongoose.Schema.Types.ObjectId;
    createdAt: string | Date;
}

const SensorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    station: { type: mongoose.Schema.Types.ObjectId, ref: 'Station', required: true },
    createdAt: { type: String, default: () => moment().format("DD/MM/YYYY, HH:mm:ss") }
});

export const Sensor = mongoose.model<ISensor>("Sensor", SensorSchema);
