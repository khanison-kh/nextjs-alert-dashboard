import { format, parseISO } from 'date-fns';
import { enUS } from 'date-fns/locale';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataPath = path.join(__dirname, '../../data/data.json');

const alerts = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

export const getAllAlerts = () => alerts;
export const getAlertById = (id) => alerts.find((a) => a.id === id);
export const filterAlertsByMonth = (month) =>
  alerts.filter((a) => {
    const alertMonth = format(parseISO(a.timestamp), 'MMMM', {
      locale: enUS,
    }).toLowerCase();
    return alertMonth === month.toLowerCase();
  });
