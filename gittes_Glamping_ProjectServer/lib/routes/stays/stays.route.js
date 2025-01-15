import express from 'express';
import { getStays } from '../../handlers/stay.handler.js';


const staysRouter = express.Router();

// Get
staysRouter.get('/stays', async (req, res) => {

    const data = await getStays();
      
       
        if(data.status === 'ok') {
    
            return res.status(200).send({ message: data.message, data: data.data });
    
        } else {
    
            return res.status(200).send({ message: data.message, data: [] });
    
        }
    
});

export default staysRouter;