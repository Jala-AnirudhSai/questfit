import React from 'react';
import { useGame } from '../context/GameContext';
import { User, Shield, Zap, Award, CheckCircle2 } from 'lucide-react';

export const ProfilePage = () => {
  const { user } = useGame();
  const initialLetter = user?.username ? user.username.charAt(0).toUpperCase() : 'A';

  const achievements = [
    { title: "First Workout", desc: "Logged your first real-world session", unlocked: true },
    { title: "Seven-Day Streak", desc: "Maintained a 7-day consistency streak", unlocked: true },
    { title: "Iron Warrior", desc: "Dealt 10,000+ damage to raid bosses", unlocked: true },
    { title: "Level 10 Hero", desc: "Reach Level 10 status", unlocked: false },
    { title: "Marathon Spirit", desc: "Run over 10km total distance", unlocked: true }
  ];

  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-12">
      <div className="glass-card p-8 rounded-3xl border border-neonPurple/30 shadow-neon flex flex-col md:flex-row items-center gap-8">
        <div className="w-32 h-32 rounded-3xl bg-neonPurple/20 border-2 border-electricCyan shadow-cyan flex items-center justify-center font-display font-bold text-5xl text-electricCyan">
          {initialLetter}
        </div>
        <div className="flex-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
            <span className="px-3 py-1 rounded-lg bg-neonPurple/20 text-neonPurple font-gaming text-xs font-bold">Level {user.level}</span>
            <span className="text-xs text-textSecondary">{user.title}</span>
          </div>
          <h1 className="font-display font-bold text-3xl text-textPrimary mb-2">{user.username}</h1>
          <p className="text-xs text-textSecondary mb-4">CR Rao AIMSCS • Computer Science & Engineering</p>
          <div className="flex items-center justify-center md:justify-start gap-4">
            <div className="px-4 py-2 rounded-xl bg-obsidian/60 border border-neonPurple/20 text-center">
              <span className="font-display font-bold text-lg text-electricCyan">{user.stats.streak}</span>
              <p className="text-[10px] text-textSecondary uppercase">Day Streak</p>
            </div>
            <div className="px-4 py-2 rounded-xl bg-obsidian/60 border border-neonPurple/20 text-center">
              <span className="font-display font-bold text-lg text-xpGold">{user.skillPoints}</span>
              <p className="text-[10px] text-textSecondary uppercase">Skill Points</p>
            </div>
          </div>
        </div>
      </div>

      <div className="glass-card p-8 rounded-3xl border border-neonPurple/20">
        <h3 className="font-display font-bold text-xl mb-6 text-textPrimary flex items-center gap-2">
          <Award className="w-5 h-5 text-xpGold" /> Hero Achievements
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {achievements.map((ach, idx) => (
            <div key={idx} className={`p-4 rounded-2xl border flex items-center gap-4 ${ach.unlocked ? 'glass-card-cyan border-electricCyan/40' : 'bg-obsidian/40 border-neonPurple/10 opacity-60'}`}>
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${ach.unlocked ? 'bg-electricCyan/20 text-electricCyan' : 'bg-obsidian text-textSecondary'}`}>
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-textPrimary">{ach.title}</h4>
                <p className="text-xs text-textSecondary">{ach.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};