import React from 'react';
import { useGame } from '../context/GameContext';
import { Flame, CheckCircle2 } from 'lucide-react';

export const QuestsPage = () => {
  const { quests, completeQuest } = useGame();

  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-12">
      <div className="glass-card p-8 rounded-3xl border border-neonPurple/30 shadow-neon">
        <h1 className="font-display font-bold text-2xl md:text-3xl mb-2 flex items-center gap-3">
          <Flame className="w-7 h-7 text-neonPink" /> Daily Fitness Quests
        </h1>
        <p className="text-xs text-textSecondary mb-8">Complete daily protocols to boost your attributes and earn bonus XP.</p>

        <div className="space-y-4">
          {quests.map(q => (
            <div key={q.id} className="glass-card p-6 rounded-2xl border border-neonPurple/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="font-display font-bold text-lg text-textPrimary">{q.title}</h3>
                  <span className="text-xs font-gaming text-xpGold font-bold">+{q.xp} XP</span>
                </div>
                <p className="text-xs text-textSecondary mb-3">{q.desc}</p>
                <div className="w-full sm:w-72 h-2 bg-obsidian rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-neonPurple to-electricCyan" style={{ width: `${Math.min(100, (q.progress / q.target) * 100)}%` }} />
                </div>
              </div>
              <div>
                {q.completed ? (
                  <span className="px-4 py-2 rounded-xl bg-neonPurple/20 text-electricCyan text-xs font-gaming font-bold flex items-center gap-1.5 border border-neonPurple/40">
                    <CheckCircle2 className="w-4 h-4" /> Completed
                  </span>
                ) : (
                  <button 
                    onClick={() => completeQuest(q.id)}
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-neonPurple to-electricCyan text-obsidian text-xs font-bold font-gaming hover:shadow-cyan transition-all"
                  >
                    Claim Reward
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};