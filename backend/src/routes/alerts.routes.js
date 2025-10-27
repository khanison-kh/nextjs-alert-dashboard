import express from 'express';
import { getAlert, getAlerts } from '../controllers/alerts.controller.js';
import { jwtCheck } from '../middleware/jwt.middleware.js';

const router = express.Router();

router.get('/', jwtCheck, getAlerts);
router.get('/:id', jwtCheck, getAlert);

export default router;
