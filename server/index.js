import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongoDb/connect.js'; 
import postRoutes from './rotues/postRoutes.js';
import dalleRoutes from './rotues/dalleRoutes.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);

app.get('/', async (req, res) => {
  res.send('hello world');
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(8080, () => console.log('Server has started on http://localhost:8080'));
  } catch (error) {
    console.error(error);
  }
};

startServer();
