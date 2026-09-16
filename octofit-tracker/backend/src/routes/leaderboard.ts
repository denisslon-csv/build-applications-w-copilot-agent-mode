import { Router } from 'express';
import { Leaderboard } from '../models/Leaderboard.js';

export const leaderboardRouter = Router();

leaderboardRouter.get('/', async (_request, response, next) => {
  try {
    response.json(await Leaderboard.find().populate('user').sort({ points: -1 }));
  } catch (error) {
    next(error);
  }
});