import express from 'express';
import multer from 'multer';

import * as mime from 'mime-types'
import { v4 as uuidv4 } from "uuid";

import auth from '../../middleware/auth.middleware.js';

import  { createStay, deleteStay, getStayById, updateStay } from '../../handlers/stay.handler.js';
import dbConnect from '../../db/dbConnect.js';

const stayRouter = express.Router();

// Multer Setup for storage.
const stayStorage = multer.diskStorage({

    destination: function (req, file, cb) {
        cb(null, 'public/stays')
    },
    filename: function (req, file, cb) {
        
        let newFileName = uuidv4() + '.' + mime.extension(file.mimetype)
        let ext = mime.extension(file.mimetype)

        cb(null, newFileName);
    }
});

const upload = multer({ storage: stayStorage });

// POST
stayRouter.post('/stay', upload.single('file'), async (req, res) => {

      const {title, description, price, includes, numberOfPersons} = req.body;

    const newStay = {
        title: title,
        description: description,
        price: price,
        includes: includes,
        numberOfPersons: numberOfPersons,
        picture: process.env.SERVER_HOST + "/stays/no-image.jpeg",
    }

    if(req.file) {

        newStay.picture = process.env.SERVER_HOST + '/stays/' + req.file.filename

    }

    await dbConnect();

    const result = await createStay(newStay);
    
    if(result.status === 'ok') {

        return res.status(200).send(
            { message: result.message, 
                data: result.data 
            }
        );

    } else {

        return res.status(200).send(
            {   
                message: result.message, 
                data: [] 
            }
        );
    }
    

});

// PUT
stayRouter.put('/stay', upload.single('file'), async (req, res) => {

   /*  const model = {
        ...req.body,
      };
    
      if (req.file) {
        model.image = process.env.SERVER_HOST + "/stays/" + req.file.filename;
      }
    
      const result = await updateStay(model);
    
      return res.status(200).send({ ...result }); */

console.log(req.body.password)
    const updatedStay = {
        ...req.body
    }

    if(req.file) {
        updatedStay.picture = process.env.SERVER_HOST + '/stays/' + req.file.filename
    }
    
    let result = await updateStay(updatedStay);

    if(result.status === 'ok') {

        return res.status(200).send({ message: result.message, data: result.data })

    } else {

        return res.status(200).send({ message: result.message, data: {} })

    }


});

// DELETE
stayRouter.delete('/stay/:id', async (req, res) => {

   /*  if (!req.params.id) {
        return res.status(200).send({ message: "No ID provided", data: {} });
      }
    
      let result = await deleteStay(req.params.id);
    
      return res.status(200).send({ ...result }); */

      if(!req.params.id) {
              return res.status(200).send({ message: 'No ID provided', data: {}})
          }
          
          let result = await deleteStay(req.params.id);
      
          if(result.status === 'ok') {
      
              return res.status(200).send({ message: result.message, data: [] })
      
          } else {
      
              return res.status(200).send({ message: result.message, data: {} })
      
          }

})

// GET By ID
stayRouter.get('/stay/:id', async (req, res) => {

    if(!req.params.id) {
        return res.status(200).send({ message: 'No ID provided', data: {}})
    }

    let result = await getStayById(req.params.id);

    if(result.status === 'ok') {

        return res.status(200).send({ message: result.message, data: result.data})

    } else {

        return res.status(200).send({ message: result.message, data: {} })

    }
    
})

export default stayRouter;
