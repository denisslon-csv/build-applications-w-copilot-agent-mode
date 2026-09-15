import { Router } from 'express';
import { Workout } from '../models/Workout.js';

export const workoutsRouter = Router();

workoutsRouter.get('/', async (request, response, next) => {
  try {
    const filter: Record<string, string> = {};
    if (typeof request.query.difficulty === 'string') {
      filter.difficulty = request.query.difficulty;
    }
    response.json(await Workout.find(filter).sort({ createdAt: -1 }));
  } catch (error) {
    next(error);
  }
});

workoutsRouter.post('/', async (request, response, next) => {
  try {
    response.status(201).json(await Workout.create(request.body));
  } catch (error) {
    next(error);
  }
});