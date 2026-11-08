import React from 'react';
import { useGame } from '../context/GameContext';
import { Swords, Shield, Trophy } from 'lucide-react';

export const DungeonsPage = () => {
  const { boss } = useGame();

  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-12">
      <div className="glass-card p-8 rounded-3xl border border-neonPurple/30 shadow-neon">
        <div className="flex items-center justify-between mb-6">
          <div>
            <span className="text-xs font-gaming text-neonPink uppercase tracking-widest">Cooperative World Boss Raid</span>
            <h1 className="font-display font-bold text-3xl text-textPrimary">{boss.name}</h1>
          </div>
          <span className="px-3 py-1 rounded-full bg-neonPink/20 text-neonPink font-gaming text-xs animate-pulse">
            Ends in {boss.timeLeft}
          </span>
        </div>

        <div className="relative rounded-2xl overflow-hidden mb-8 border border-neonPurple/30 h-64">
          <img src={boss.image} alt={boss.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex justify-between text-xs font-gaming text-textSecondary mb-2">
              <span>BOSS HP</span>
              <span>{boss.currentHp} / {boss.maxHp} HP</span>
            </div>
            <div className="w-full h-3 bg-obsidian rounded-full overflow-hidden border border-neonPink/40">
              <div className="h-full bg-gradient-to-r from-neonPink to-neonPurple transition-all duration-500" style={{ width: `${(boss.currentHp / boss.maxHp) * 100}%` }} />
            </div>
          </div>
        </div>

        <h3 className="font-display font-bold text-xl mb-4 text-textPrimary flex items-center gap-2">
          <Trophy className="w-5 h-5 text-xpGold" /> Squad Damage Rankings
        </h3>
        <div className="space-y-3">
          {boss.party.map((member, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-obsidian/50 border border-neonPurple/20 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="font-display font-bold text-sm text-electricCyan">#{idx + 1}</span>
                {member.avatar ? (
                  <img src={member.avatar} alt={member.name} className="w-10 h-10 rounded-xl object-cover border border-neonPurple/30" />
                ) : (
                  <div className="w-10 h-10 rounded-xl bg-neonPurple/20 border border-electricCyan flex items-center justify-center font-display font-bold text-base text-electricCyan">
                    A
                  </div>
                )}
                <span className="font-bold text-sm text-textPrimary">{member.name}</span>
              </div>
              <span className="font-gaming font-bold text-neonPink text-sm">{member.damage} DMG</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};