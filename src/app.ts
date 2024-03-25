import express from 'express';
import cors from 'cors';
import connection from "./db/mongose.config";
import readingRouter from "./routes/reading.route"
import sensorRouter from "./routes/sensor.route"
import stationRouter from "./routes/station.route"



async function main() {

    const app = express();

    app.use(express.json());
    app.use(cors());

    app.use('/sensor',sensorRouter);
    app.use('/station',stationRouter);
    app.use('/reading',readingRouter)
    app.get('/', (req, res) => {
        res.send('Estação Metereologica Fametro');
    });

    connection
        .then(() => {
            console.log("Banco de dados conectado");

            app.listen(3000, () => {
                console.log("Servidor rodando na porta 3000");
            });
        })
        .catch((error) => console.log(error));

}
main();