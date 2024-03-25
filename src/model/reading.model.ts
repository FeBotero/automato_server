import mongoose, { Schema, Document } from "mongoose";
import moment from 'moment';

export interface IReading extends Document {
    readings: [{
        sensor: mongoose.Schema.Types.ObjectId;
        value: string;
    }];
    createdAt: string | Date;
}

const ReadingSchema: Schema = new Schema({
    readings: [{
        sensor: { type: Schema.Types.ObjectId, ref: "Sensor", required: true }, 
        value: { type: String, required: true }
    }],
    createdAt: { type: String, default: () => moment().format("DD/MM/YYYY, HH:mm:ss") }
});

export const Reading = mongoose.model<IReading>("Reading", ReadingSchema);
