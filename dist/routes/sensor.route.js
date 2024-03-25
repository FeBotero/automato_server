"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sensor_service_1 = __importDefault(require("../service/sensor.service"));
const router = (0, express_1.Router)();
router.get('/', async (req, res) => {
    const sensors = await sensor_service_1.default.getAllsensor();
    if (!sensors) {
        return res.status(400).send({ message: "No sensors found" });
    }
    res.status(200).send(sensors);
});
router.delete('/:id', async (req, res) => {
    const sensor = await sensor_service_1.default.getSensorID(req.params.id);
    if (!sensor) {
        return res.status(400).send({ message: "No sensor found" });
    }
    res.status(200).send(sensor);
});
router.post('/', async (req, res) => {
    try {
        await sensor_service_1.default.createSensor(req.body);
        res.status(201).send({ message: "Sensor created successfully." });
    }
    catch (error) {
        res.status(400).send({ message: error.message });
    }
});
router.put('/:id', async (req, res) => {
    try {
        await sensor_service_1.default.updateSensor(req.params.id, req.body);
        res.status(201).send({ message: "Sensor updated successfully." });
    }
    catch (error) {
        res.status(400).send({ message: error.message });
    }
});
router.get('/:id', async (req, res) => {
    const Sensor = await sensor_service_1.default.deleteSensor(req.params.id);
    if (!Sensor) {
        return res.status(400).send({ message: "No Sensor found" });
    }
    res.status(200).send({ message: "Sensor deleted successfully." });
});
exports.default = router;
//# sourceMappingURL=sensor.route.js.map