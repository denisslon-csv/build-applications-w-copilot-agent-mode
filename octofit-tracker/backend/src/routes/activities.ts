import { Router } from 'express';
import { Activity } from '../models/Activity.js';

export const activitiesRouter = Router();

activitiesRouter.get('/', async (request, response, next) => {
  try {
    const filter = typeof request.query.user === 'string' ? { user: request.query.user } : {};
    response.json(await Activity.find(filter).populate('user').sort({ completedAt: -1 }));
  } catch (error) {
    next(error);
  }
});

activitiesRouter.post('/', async (request, response, next) => {
  try {
    const points = request.body.points ?? Math.round(Number(request.body.durationMinutes) * 1.5);
    response.status(201).json(await Activity.create({ ...request.body, points }));
  } catch (error) {
    next(error);
  }
});