import express from 'express';
import * as dotenv from 'dotenv';

import cors from 'cors';

import connectDB from './server/mongoDb/connect.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({limit : '50'}));

app.get('/', async (req, res) => {
    res.send('hello world');
})

const startserver = async (req, res) => {
    try {
        connectDB(process.env.MONGODB_URL);
        app.listen(8080, () => console.log('server has started on port http://localhost:8080'))
    }
    catch (err) {
        console.error(error);
    }
    
};