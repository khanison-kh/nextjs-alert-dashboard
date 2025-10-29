import * as alertService from '../services/alerts.service.js';

export const getAlerts = (req, res) => {
  const { month } = req.query;

  if (month) {
    const filteredMonth = alertService.filterAlertsByMonth(month);
    res.json(filteredMonth);
  } else res.json(alertService.getAllAlerts());
};

export const getAlert = (req, res) => {
  const alert = alertService.getAlertById(req.params.id);
  if (!alert) return res.status(404).json({ error: 'Alert not found' });
  res.json(alert);
};
