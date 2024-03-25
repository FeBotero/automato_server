    import {Request, Response, Router} from 'express';
    import sensorService from '../service/sensor.service';

    const router = Router();

    router.get('/', async (req:Request, res:Response)=> {
        const sensors = await sensorService.getAllsensor();
        if(!sensors){
            return res.status(400).send({message:"No sensors found"});
        }
        res.status(200).send(sensors);
    })

    router.delete('/:id', async (req:Request, res:Response)=> {
        const sensor = await sensorService.getSensorID(req.params.id);
        if(!sensor){
            return res.status(400).send({message:"No sensor found"});
        }
        res.status(200).send(sensor);

    })

    router.post('/',async (req:Request, res:Response)=> {
        try{
            await sensorService.createSensor(req.body);
            res.status(201).send({message:"Sensor created successfully."})
        } catch(error: any){
            res.status(400).send({message: error.message})
        }
    })

    router.put('/:id',async (req:Request, res:Response)=> {
        try{
            await sensorService.updateSensor(req.params.id,req.body);
            res.status(201).send({message:"Sensor updated successfully."})
        } catch(error: any){
            res.status(400).send({message: error.message})
        }
    })

    router.get('/:id', async (req:Request, res:Response)=> {
        const Sensor = await sensorService.deleteSensor(req.params.id);
        if(!Sensor){
            return res.status(400).send({message:"No Sensor found"});
        }
        res.status(200).send({message:"Sensor deleted successfully."});

    })

    export default router;