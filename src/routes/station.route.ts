import {Request, Response, Router} from 'express';
import stationService from '../service/station.service';

const router = Router();



router.get('/', async (req:Request, res:Response)=> {
    const stations = await stationService.getAllStation();
    if(!stations){
        return res.status(400).send({message:"No stations found"});
    }
    res.status(200).send(stations);
})

router.get('/:id', async (req:Request, res:Response)=> {
    const station = await stationService.getStationID(req.params.id);
    if(!station){
        return res.status(400).send({message:"No station found"});
    }
    res.status(200).send(station);

})

router.post('/',async (req:Request, res:Response)=> {
    try{
        await stationService.createStation(req.body);
        res.status(201).send({message:"Station created successfully."})
    } catch(error: any){
        res.status(400).send({message: error.message})
    }
})

router.put('/:id',async (req:Request, res:Response)=> {
    try{
        await stationService.updateStation(req.params.id,req.body);
        res.status(201).send({message:"Station updated successfully."})
    } catch(error: any){
        res.status(400).send({message: error.message})
    }
})

router.delete('/:id', async (req:Request, res:Response)=> {
    const Sensor = await stationService.deleteStation(req.params.id);
    if(!Sensor){
        return res.status(400).send({message:"No station found"});
    }
    res.status(200).send({message:"Station deleted successfully."});

})

export default router;