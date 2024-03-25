import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const URL = process.env.URL_DATABASE || "";

const sensors = "sensors_reading";

const stations = "weather_station";

export default mongoose.connect(URL);

