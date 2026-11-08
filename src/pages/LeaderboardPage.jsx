import React from 'react';
import { useGame } from '../context/GameContext';
import { Trophy } from 'lucide-react';

export const LeaderboardPage = () => {
  const { user } = useGame();

  const leaders = [
    { rank: 1, name: "ValkyrieX", level: 14, xp: 8400, avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" },
    { rank: 2, name: "RoninFit", level: 12, xp: 6900, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" },
    { rank: 3, name: user.username, level: user.level, xp: user.xp, avatar: "" },
    { rank: 4, name: "ByteLift", level: 6, xp: 2100, avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" },
  ];

  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-12">
      <div className="glass-card p-8 rounded-3xl border border-neonPurple/30 shadow-neon">
        <h1 className="font-display font-bold text-2xl md:text-3xl mb-2 flex items-center gap-3">
          <Trophy className="w-7 h-7 text-xpGold" /> Global Leaderboard
        </h1>
        <p className="text-xs text-textSecondary mb-8">Compare your hero progress against elite fitness champions worldwide.</p>

        <div className="space-y-3">
          {leaders.map((l) => (
            <div key={l.rank} className={`p-4 rounded-2xl flex items-center justify-between border ${l.name === user.username ? 'glass-card-cyan border-electricCyan' : 'bg-obsidian/40 border-neonPurple/10'}`}>
              <div className="flex items-center gap-4">
                <span className={`font-display font-bold text-lg w-6 text-center ${l.rank === 1 ? 'text-xpGold' : l.rank === 2 ? 'text-textPrimary' : 'text-textSecondary'}`}>
                  #{l.rank}
                </span>
                {l.avatar ? (
                  <img src={l.avatar} alt={l.name} className="w-12 h-12 rounded-xl object-cover border border-neonPurple/30" />
                ) : (
                  <div className="w-12 h-12 rounded-xl bg-neonPurple/20 border border-electricCyan flex items-center justify-center font-display font-bold text-lg text-electricCyan">
                    A
                  </div>
                )}
                <div>
                  <h4 className="font-bold text-sm text-textPrimary">{l.name}</h4>
                  <p className="text-xs text-neonPurple font-gaming">Level {l.level}</p>
                </div>
              </div>
              <span className="font-gaming font-bold text-electricCyan text-sm">{l.xp} XP</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};