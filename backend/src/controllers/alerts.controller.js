import { getAlertById, getAllAlerts } from '../services/alerts.service.js';

export const getAlerts = (req, res) => {
  res.json(getAllAlerts());
};

export const getAlert = (req, res) => {
  const alert = getAlertById(req.params.id);
  if (!alert) return res.status(404).json({ error: 'Alert not found' });
  res.json(alert);
};
