import React, { useState } from 'react';
import { useGame } from '../context/GameContext';
import { Zap, Plus, Dumbbell, Activity, Footprints, Timer } from 'lucide-react';

export const WorkoutTrackerPage = () => {
  const { logWorkout } = useGame();
  const [workoutType, setWorkoutType] = useState('Strength');
  const [exerciseName, setExerciseName] = useState('');
  const [details, setDetails] = useState('');
  const [xpAmount, setXpAmount] = useState(300);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!exerciseName) return;

    logWorkout({
      type: workoutType,
      name: exerciseName,
      details: details || 'Standard session logged',
      xp: Number(xpAmount),
      calories: 350
    });

    setExerciseName('');
    setDetails('');
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-12">
      <div className="glass-card p-8 rounded-3xl border border-neonPurple/30 shadow-neon">
        <h1 className="font-display font-bold text-2xl md:text-3xl mb-2 flex items-center gap-3">
          <Zap className="w-7 h-7 text-electricCyan" /> Workout & Activity Logger
        </h1>
        <p className="text-xs text-textSecondary mb-8">Log your workouts to earn XP, level up your character attributes, and deal damage to raid bosses.</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {['Strength', 'Cardio', 'Steps', 'Mobility'].map(t => (
              <button
                type="button"
                key={t}
                onClick={() => setWorkoutType(t)}
                className={`py-3 px-4 rounded-2xl font-gaming font-bold text-xs transition-all border ${
                  workoutType === t 
                    ? 'bg-gradient-to-r from-neonPurple to-electricCyan text-obsidian border-electricCyan shadow-cyan' 
                    : 'bg-obsidian/40 text-textSecondary border-neonPurple/20 hover:text-textPrimary'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div>
            <label className="block text-xs font-gaming uppercase tracking-wider text-textSecondary mb-2">Activity / Exercise Name</label>
            <input 
              type="text" 
              value={exerciseName}
              onChange={e => setExerciseName(e.target.value)}
              placeholder="e.g. Heavy Bench Press, 5km Cyber Run..." 
              className="w-full bg-obsidian/60 border border-neonPurple/30 rounded-2xl px-4 py-3.5 text-textPrimary placeholder-textSecondary/50 focus:outline-none focus:border-electricCyan text-sm"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-gaming uppercase tracking-wider text-textSecondary mb-2">Details & Metrics</label>
            <input 
              type="text" 
              value={details}
              onChange={e => setDetails(e.target.value)}
              placeholder="e.g. 80kg x 8 reps x 4 sets" 
              className="w-full bg-obsidian/60 border border-neonPurple/30 rounded-2xl px-4 py-3.5 text-textPrimary placeholder-textSecondary/50 focus:outline-none focus:border-electricCyan text-sm"
            />
          </div>

          <button 
            type="submit"
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-neonPurple to-electricCyan text-obsidian font-bold font-gaming tracking-wider text-sm hover:shadow-cyan transition-all flex items-center justify-center gap-2"
          >
            <Plus className="w-5 h-5" /> Log Workout & Claim XP
          </button>
        </form>
      </div>
    </div>
  );
};