import React from 'react';
import { useGame } from '../context/GameContext';
import { Activity, Flame, Shield, Zap, TrendingUp, Award, CheckCircle2, Clock } from 'lucide-react';

export const DashboardPage = ({ setActiveTab }) => {
  const { user, boss, workouts, quests, completeQuest } = useGame();

  const xpPercent = Math.min(100, Math.round((user.xp / user.nextLevelXp) * 100));
  const initialLetter = user?.username ? user.username.charAt(0).toUpperCase() : 'A';

  return (
    <div className="space-y-8 pb-12">
      
      {/* Hero Header Card */}
      <div className="glass-card p-6 md:p-8 rounded-3xl border border-neonPurple/30 shadow-neon relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="absolute top-0 right-0 w-96 h-96 bg-neonPurple/10 rounded-full filter blur-3xl pointer-events-none" />
        
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-neonPurple/20 border-2 border-electricCyan shadow-cyan flex items-center justify-center font-display font-bold text-4xl text-electricCyan">
            {initialLetter}
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="px-3 py-1 rounded-lg bg-neonPurple/20 text-neonPurple font-gaming text-xs font-bold">Level {user.level}</span>
              <span className="text-xs text-textSecondary">{user.title}</span>
            </div>
            <h1 className="font-display font-bold text-3xl md:text-4xl text-textPrimary mb-2">{user.username}</h1>
            <div className="w-48 sm:w-64">
              <div className="flex justify-between text-xs font-gaming text-textSecondary mb-1">
                <span>XP Progress</span>
                <span>{user.xp} / {user.nextLevelXp} XP</span>
              </div>
              <div className="w-full h-2 bg-obsidian rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-neonPurple to-electricCyan transition-all duration-500" style={{ width: `${xpPercent}%` }} />
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full md:w-auto">
          <div className="glass-card p-4 rounded-2xl border border-neonPurple/20 text-center">
            <Flame className="w-5 h-5 text-neonPink mx-auto mb-1" />
            <h4 className="font-display font-bold text-xl text-textPrimary">{user.stats.streak} Days</h4>
            <p className="text-[11px] text-textSecondary">Active Streak</p>
          </div>
          <div className="glass-card p-4 rounded-2xl border border-neonPurple/20 text-center">
            <Zap className="w-5 h-5 text-electricCyan mx-auto mb-1" />
            <h4 className="font-display font-bold text-xl text-textPrimary">{user.stats.totalWorkouts}</h4>
            <p className="text-[11px] text-textSecondary">Workouts</p>
          </div>
          <div className="glass-card p-4 rounded-2xl border border-neonPurple/20 text-center">
            <Shield className="w-5 h-5 text-neonPurple mx-auto mb-1" />
            <h4 className="font-display font-bold text-xl text-textPrimary">{user.stats.bossDamageDealt}</h4>
            <p className="text-[11px] text-textSecondary">Boss DMG</p>
          </div>
          <div className="glass-card p-4 rounded-2xl border border-neonPurple/20 text-center">
            <Award className="w-5 h-5 text-xpGold mx-auto mb-1" />
            <h4 className="font-display font-bold text-xl text-textPrimary">{user.skillPoints} SP</h4>
            <p className="text-[11px] text-textSecondary">Skill Points</p>
          </div>
        </div>
      </div>

      {/* Attributes Grid */}
      <div>
        <h3 className="font-display font-bold text-xl mb-4 text-textPrimary flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-electricCyan" /> Character Attributes
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(user.attributes).map(([key, attr]) => (
            <div key={key} className="glass-card p-6 rounded-3xl border border-neonPurple/20 hover:border-electricCyan/50 transition-all">
              <div className="flex justify-between items-center mb-3">
                <span className="font-gaming font-bold text-xs uppercase tracking-wider text-electricCyan">{attr.label}</span>
                <span className="font-display font-bold text-xl text-textPrimary">{attr.value}</span>
              </div>
              <p className="text-xs text-textSecondary mb-4">{attr.desc}</p>
              <div className="w-full h-2 bg-obsidian rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-electricCyan to-neonPurple" style={{ width: `${attr.value}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Widgets Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Daily Quests Widget */}
        <div className="glass-card p-6 rounded-3xl border border-neonPurple/20 lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-display font-bold text-xl text-textPrimary flex items-center gap-2">
              <Flame className="w-5 h-5 text-neonPink" /> Today's Quests
            </h3>
            <button onClick={() => setActiveTab('quests')} className="text-xs text-electricCyan hover:underline font-gaming">View All</button>
          </div>
          <div className="space-y-4">
            {quests.map(q => (
              <div key={q.id} className="p-4 rounded-2xl bg-obsidian/50 border border-neonPurple/10 flex items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-sm text-textPrimary mb-1">{q.title}</h4>
                  <p className="text-xs text-textSecondary">{q.desc}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xs font-gaming text-xpGold font-bold">+{q.xp} XP</span>
                  {q.completed ? (
                    <span className="px-3 py-1 rounded-xl bg-neonPurple/20 text-electricCyan text-xs font-gaming font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Done
                    </span>
                  ) : (
                    <button 
                      onClick={() => completeQuest(q.id)}
                      className="px-4 py-1.5 rounded-xl bg-gradient-to-r from-neonPurple to-electricCyan text-obsidian text-xs font-bold font-gaming"
                    >
                      Claim
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Boss Raid Widget */}
        <div className="glass-card p-6 rounded-3xl border border-neonPurple/20 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display font-bold text-xl text-textPrimary">Active Raid Boss</h3>
              <span className="text-xs text-neonPink font-gaming animate-pulse">LIVE</span>
            </div>
            <div className="relative rounded-2xl overflow-hidden mb-4 border border-neonPurple/30 h-40">
              <img src={boss.image} alt={boss.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <h4 className="font-display font-bold text-lg text-textPrimary">{boss.name}</h4>
                <p className="text-xs text-textSecondary">Level {boss.level} World Boss</p>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex justify-between text-xs font-gaming text-textSecondary mb-1">
                <span>Boss HP</span>
                <span>{boss.currentHp} / {boss.maxHp}</span>
              </div>
              <div className="w-full h-2.5 bg-obsidian rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-neonPink to-neonPurple" style={{ width: `${(boss.currentHp / boss.maxHp) * 100}%` }} />
              </div>
            </div>
          </div>
          <button 
            onClick={() => setActiveTab('dungeons')}
            className="w-full py-3 rounded-xl bg-surface border border-neonPurple/30 text-electricCyan font-bold text-xs font-gaming tracking-wider hover:bg-neonPurple/10 transition-all"
          >
            ENTER RAID DUNGEON
          </button>
        </div>

      </div>

      {/* Recent Activity History */}
      <div className="glass-card p-6 rounded-3xl border border-neonPurple/20">
        <h3 className="font-display font-bold text-xl mb-4 text-textPrimary flex items-center gap-2">
          <Clock className="w-5 h-5 text-electricCyan" /> Recent Activity History
        </h3>
        <div className="space-y-3">
          {workouts.map(w => (
            <div key={w.id} className="p-4 rounded-2xl bg-obsidian/40 border border-neonPurple/10 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="px-2.5 py-0.5 rounded-md bg-neonPurple/20 text-electricCyan text-[11px] font-gaming font-bold">{w.type}</span>
                  <h4 className="font-bold text-sm text-textPrimary">{w.name}</h4>
                </div>
                <p className="text-xs text-textSecondary">{w.details}</p>
              </div>
              <div className="text-right">
                <span className="text-xs font-gaming text-xpGold font-bold">+{w.xp} XP</span>
                <p className="text-[11px] text-textSecondary">{w.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};