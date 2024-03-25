"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongose_config_1 = __importDefault(require("./db/mongose.config"));
const reading_route_1 = __importDefault(require("./routes/reading.route"));
const sensor_route_1 = __importDefault(require("./routes/sensor.route"));
const station_route_1 = __importDefault(require("./routes/station.route"));
async function main() {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.use((0, cors_1.default)());
    app.use('/sensor', sensor_route_1.default);
    app.use('/station', station_route_1.default);
    app.use('/reading', reading_route_1.default);
    app.get('/', (req, res) => {
        res.send('Estação Metereologica Fametro');
    });
    mongose_config_1.default
        .then(() => {
        console.log("Banco de dados conectado");
        app.listen(3000, () => {
            console.log("Servidor rodando na porta 3000");
        });
    })
        .catch((error) => console.log(error));
}
main();
//# sourceMappingURL=app.js.map