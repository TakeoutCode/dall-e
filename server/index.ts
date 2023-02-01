import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import 'module-alias/register';

import connectDB from '@mongodb/connect';
import postRoutes from '@routes/postRoutes';
import dalleRoutes from '@routes/dalleRoutes';

dotenv.config();
const app = express();
app.use(express.json());

const allowedOrigins = [
  'http://localhost:8080/',
  'https://dall-e-api.takeoutcode.com/',
];

const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

app.use(cors(options));
app.use(express.json({ limit: '50mb' }));

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);

app.get('/', async (req, res) => {
  res.send('Hello from DALL-E');
});

const startServer = () => {
  try {
    connectDB(process.env.MONGODB_URL || '');
    app.listen(8080, () => {
      console.log(
        'server has started on port https://dall-e-api.takeoutcode.com'
      );
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
