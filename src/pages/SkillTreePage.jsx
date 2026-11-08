import React from 'react';
import { useGame } from '../context/GameContext';
import { Shield, Award, CheckCircle2 } from 'lucide-react';

export const SkillTreePage = () => {
  const { user, skills, unlockSkill } = useGame();

  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-12">
      <div className="glass-card p-8 rounded-3xl border border-neonPurple/30 shadow-neon">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="font-display font-bold text-2xl md:text-3xl mb-1 flex items-center gap-3">
              <Shield className="w-7 h-7 text-neonPurple" /> Interactive Skill Tree
            </h1>
            <p className="text-xs text-textSecondary">Unlock specialization branches using skill points earned from leveling up.</p>
          </div>
          <div className="px-4 py-2 rounded-xl bg-obsidian/60 border border-neonPurple/30 flex items-center gap-2">
            <Award className="w-5 h-5 text-xpGold" />
            <span className="font-display font-bold text-lg text-textPrimary">{user.skillPoints} SP Available</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skills.map(s => (
            <div key={s.id} className={`glass-card p-6 rounded-2xl border ${s.unlocked ? 'border-electricCyan/50' : 'border-neonPurple/20'}`}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-gaming uppercase tracking-wider text-neonPurple">{s.branch}</span>
                <span className="text-xs font-gaming text-xpGold font-bold">{s.cost} SP</span>
              </div>
              <h3 className="font-display font-bold text-lg text-textPrimary mb-2">{s.name}</h3>
              <p className="text-xs text-textSecondary mb-4">{s.desc}</p>
              {s.unlocked ? (
                <div className="flex items-center gap-2 text-xs font-gaming font-bold text-electricCyan">
                  <CheckCircle2 className="w-4 h-4" /> Unlocked
                </div>
              ) : (
                <button 
                  onClick={() => unlockSkill(s.id)}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-neonPurple to-electricCyan text-obsidian text-xs font-bold font-gaming hover:shadow-cyan transition-all"
                >
                  Unlock Skill
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};