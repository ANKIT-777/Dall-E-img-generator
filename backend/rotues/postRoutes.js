import express from 'express';
import * as dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';

import Post from '../mongoDb/models/post.js';

dotenv.config();

const router = express.Router();

cloudinary.config(
    {
        cloud_name: process.env.API_KEY,
        api_key: process.env.API_KEY,
        api_secret: process.env.API_SECRET,

    }
);

router.route('/').post(async(req,res) => {
    const { name , prompt, photo } = req.body; 
    cont photoUrl = await cloudinary
})

export default router;
