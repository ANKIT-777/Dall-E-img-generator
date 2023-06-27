import express from 'express';
import * as dotenv from 'dotenv';

import cors from 'cors';

import connectDB from './mongoDb/connect.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({limit : '50'}));

app.get('/', async (req, res) => {
    res.send('hello world');
})

const startserver = async (req, res) => {
    

   /* The commented code block is attempting to connect to a MongoDB database using the URL specified
   in the environment variable `MONGODB_URL`. If the connection is successful, it starts the server
   on port 8080 and logs a message to the console. If there is an error connecting to the database,
   it logs the error to the console. However, the `startserver()` function is currently empty and
   not being called anywhere, so this code block is not being executed. */
    try {
        connectDB(process.env.MONGODB_URL);
        app.listen(8080, () => console.log('server has started on port http://localhost:8080'))
    }
    catch (err) {
        console.error(error);
    }
    
}

startserver();