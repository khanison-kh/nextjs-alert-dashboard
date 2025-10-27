import cors from 'cors';
import express from 'express';
import alertsRoutes from './routes/alerts.routes.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/alerts', alertsRoutes);

export default app;
