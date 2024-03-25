import {Request, Response, Router} from 'express';
import readingService from '../service/reading.service';

const router = Router();

router.get('/', async (req:Request, res:Response)=> {
    const readings = await readingService.getAllReading();
    if(!readings){
        return res.status(400).send({message:"No readings found"});
    }
    res.status(200).send(readings);
})

router.delete('/:id', async (req:Request, res:Response)=> {
    const reading = await readingService.getReadingID(req.params.id);
    if(!reading){
        return res.status(400).send({message:"No reading found"});
    }
    res.status(200).send(reading);

})

router.post('/',async (req:Request, res:Response)=> {
    try{
        await readingService.createReading(req.body);
        res.status(201).send({message:"Reading created successfully."})
    } catch(error: any){
        res.status(400).send({message: error.message})
    }
})

router.put('/:id',async (req:Request, res:Response)=> {
    try{
        await readingService.updateReading(req.params.id,req.body);
        res.status(201).send({message:"Reading updated successfully."})
    } catch(error: any){
        res.status(400).send({message: error.message})
    }
})

router.get('/:id', async (req:Request, res:Response)=> {
    const reading = await readingService.deleteReading(req.params.id);
    if(!reading){
        return res.status(400).send({message:"No reading found"});
    }
    res.status(200).send({message:"Reading deleted successfully."});

})

export default router;