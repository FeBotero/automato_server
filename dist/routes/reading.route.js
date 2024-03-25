"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const reading_service_1 = __importDefault(require("../service/reading.service"));
const router = (0, express_1.Router)();
router.get('/', async (req, res) => {
    const readings = await reading_service_1.default.getAllReading();
    if (!readings) {
        return res.status(400).send({ message: "No readings found" });
    }
    res.status(200).send(readings);
});
router.delete('/:id', async (req, res) => {
    const reading = await reading_service_1.default.getReadingID(req.params.id);
    if (!reading) {
        return res.status(400).send({ message: "No reading found" });
    }
    res.status(200).send(reading);
});
router.post('/', async (req, res) => {
    try {
        await reading_service_1.default.createReading(req.body);
        res.status(201).send({ message: "Reading created successfully." });
    }
    catch (error) {
        res.status(400).send({ message: error.message });
    }
});
router.put('/:id', async (req, res) => {
    try {
        await reading_service_1.default.updateReading(req.params.id, req.body);
        res.status(201).send({ message: "Reading updated successfully." });
    }
    catch (error) {
        res.status(400).send({ message: error.message });
    }
});
router.get('/:id', async (req, res) => {
    const reading = await reading_service_1.default.deleteReading(req.params.id);
    if (!reading) {
        return res.status(400).send({ message: "No reading found" });
    }
    res.status(200).send({ message: "Reading deleted successfully." });
});
exports.default = router;
//# sourceMappingURL=reading.route.js.map