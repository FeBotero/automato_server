import mongoose, { Schema } from "mongoose";
import moment from 'moment';

export interface IStation {
    name: string;
    address: string;
    sensors: mongoose.Schema.Types.ObjectId[];
    createdAt: string | Date;
}

const StationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    sensors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Sensor' }],
    createdAt: { type: String, default: () => moment().format("DD/MM/YYYY, HH:mm:ss") }
});

export const Station = mongoose.model<IStation>("Station", StationSchema);
