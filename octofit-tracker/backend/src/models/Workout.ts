import mongoose from 'mongoose';

const workoutSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    difficulty: { type: String, enum: ['beginner', 'intermediate', 'advanced'], required: true },
    target: { type: String, required: true, trim: true },
  },
  { timestamps: true },
);

export const Workout = mongoose.model('Workout', workoutSchema);