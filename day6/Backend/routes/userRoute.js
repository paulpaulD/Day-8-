import express from 'express';
import {fetch, create,update,deleteuse} from '../controller/userController.js';

const router=express.Router();

router.post('/create',create);
router.get('/fetch',fetch);
router.put('/update/:id',update);
router.delete('/delete/:id',deleteuse);


export default router;