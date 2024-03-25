"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const station_service_1 = __importDefault(require("../service/station.service"));
const router = (0, express_1.Router)();
router.get('/', async (req, res) => {
    const stations = await station_service_1.default.getAllStation();
    if (!stations) {
        return res.status(400).send({ message: "No stations found" });
    }
    res.status(200).send(stations);
});
router.get('/:id', async (req, res) => {
    const station = await station_service_1.default.getStationID(req.params.id);
    if (!station) {
        return res.status(400).send({ message: "No station found" });
    }
    res.status(200).send(station);
});
router.post('/', async (req, res) => {
    try {
        await station_service_1.default.createStation(req.body);
        res.status(201).send({ message: "Station created successfully." });
    }
    catch (error) {
        res.status(400).send({ message: error.message });
    }
});
router.put('/:id', async (req, res) => {
    try {
        await station_service_1.default.updateStation(req.params.id, req.body);
        res.status(201).send({ message: "Station updated successfully." });
    }
    catch (error) {
        res.status(400).send({ message: error.message });
    }
});
router.delete('/:id', async (req, res) => {
    const Sensor = await station_service_1.default.deleteStation(req.params.id);
    if (!Sensor) {
        return res.status(400).send({ message: "No station found" });
    }
    res.status(200).send({ message: "Station deleted successfully." });
});
exports.default = router;
//# sourceMappingURL=station.route.js.map