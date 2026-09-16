import mongoose from 'mongoose';
import { Activity } from '../models/Activity.js';
import { Leaderboard } from '../models/Leaderboard.js';
import { Team } from '../models/Team.js';
import { User } from '../models/User.js';
import { Workout } from '../models/Workout.js';
import { connectDatabase } from '../config/database.js';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await connectDatabase();

    await Promise.all([
      Activity.deleteMany({}),
      Leaderboard.deleteMany({}),
      Team.deleteMany({}),
      User.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    const users = await User.create([
      { username: 'maya-chen', email: 'maya.chen@mergington.edu', displayName: 'Maya Chen' },
      { username: 'jordan-rivera', email: 'jordan.rivera@mergington.edu', displayName: 'Jordan Rivera' },
      { username: 'sam-wilson', email: 'sam.wilson@mergington.edu', displayName: 'Sam Wilson' },
      { username: 'alex-okafor', email: 'alex.okafor@mergington.edu', displayName: 'Alex Okafor' },
    ]);

    const teams = await Team.create([
      {
        name: 'Trailblazers',
        description: 'Distance-focused students building steady momentum.',
        members: [users[0]._id, users[1]._id],
        totalPoints: 315,
      },
      {
        name: 'Power Hour',
        description: 'Strength and conditioning with a team spirit.',
        members: [users[2]._id, users[3]._id],
        totalPoints: 270,
      },
    ]);

    await User.bulkWrite([
      { updateOne: { filter: { _id: users[0]._id }, update: { team: teams[0]._id } } },
      { updateOne: { filter: { _id: users[1]._id }, update: { team: teams[0]._id } } },
      { updateOne: { filter: { _id: users[2]._id }, update: { team: teams[1]._id } } },
      { updateOne: { filter: { _id: users[3]._id }, update: { team: teams[1]._id } } },
    ]);

    await Activity.create([
      { user: users[0]._id, type: 'running', durationMinutes: 35, distanceKm: 5.2, points: 90 },
      { user: users[1]._id, type: 'walking', durationMinutes: 45, distanceKm: 3.8, points: 75 },
      { user: users[2]._id, type: 'strength', durationMinutes: 40, points: 80 },
      { user: users[3]._id, type: 'running', durationMinutes: 30, distanceKm: 4.1, points: 70 },
    ]);

    await Leaderboard.create([
      { user: users[0]._id, points: 180, rank: 1 },
      { user: users[2]._id, points: 155, rank: 2 },
      { user: users[1]._id, points: 135, rank: 3 },
      { user: users[3]._id, points: 115, rank: 4 },
    ]);

    await Workout.create([
      {
        title: 'Campus Cardio Circuit',
        description: 'A brisk interval circuit using short runs, step-ups, and recovery walks.',
        difficulty: 'beginner',
        target: 'cardio',
      },
      {
        title: 'Full-Body Strength Set',
        description: 'A balanced bodyweight session with squats, push-ups, lunges, and planks.',
        difficulty: 'intermediate',
        target: 'strength',
      },
      {
        title: 'Endurance Builder',
        description: 'A progressive running workout designed to improve pace and stamina.',
        difficulty: 'advanced',
        target: 'endurance',
      },
    ]);

    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
