import React from 'react';
import { Swords, Zap, Trophy, Flame, Shield, ArrowRight, Play, CheckCircle2 } from 'lucide-react';

export const LandingPage = ({ onStartQuest }) => {
  return (
    <div className="min-h-screen bg-obsidian text-textPrimary overflow-x-hidden selection:bg-neonPurple selection:text-white">
      
      {/* Navbar */}
      <header className="absolute top-0 left-0 right-0 z-50 px-6 py-6 flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-neonPurple to-electricCyan flex items-center justify-center shadow-neon">
            <Swords className="w-6 h-6 text-white" />
          </div>
          <span className="font-display font-bold text-2xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-electricCyan to-neonPurple">QUESTFIT</span>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => onStartQuest('dashboard')}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-neonPurple to-electricCyan text-obsidian font-bold hover:shadow-cyan transition-all transform hover:-translate-y-0.5 text-sm font-gaming tracking-wider"
          >
            ENTER APP
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neonPurple/15 via-obsidian to-obsidian pointer-events-none" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-electricCyan/30 mb-8 animate-pulse">
            <Zap className="w-4 h-4 text-electricCyan" />
            <span className="text-xs font-gaming tracking-widest text-electricCyan uppercase">Season 3: Cybernetic Awakening Live</span>
          </div>
          
          <h1 className="font-display font-extrabold text-5xl md:text-7xl tracking-tight mb-6 leading-tight">
            Your Fitness Journey. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electricCyan via-neonPurple to-neonPink">Your RPG Adventure.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-textSecondary max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
            Transform workouts into XP, upgrade character attributes, unlock legendary gear, and defeat epic bosses with your squad in the ultimate gamified fitness platform.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button 
              onClick={() => onStartQuest('dashboard')}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-neonPurple to-electricCyan text-obsidian font-bold text-base hover:shadow-cyan transition-all flex items-center justify-center gap-3 font-gaming tracking-wider transform hover:scale-105"
            >
              Start Your Quest <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => onStartQuest('dashboard')}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl glass-card border border-neonPurple/40 text-textPrimary font-bold text-base hover:bg-surface transition-all flex items-center justify-center gap-3 font-gaming tracking-wider"
            >
              <Play className="w-4 h-4 text-neonPurple fill-neonPurple" /> Explore Demo
            </button>
          </div>

          {/* Hero Character Showcase Card */}
          <div className="glass-card p-6 md:p-8 rounded-3xl border border-neonPurple/30 shadow-neon max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8 relative">
            <div className="absolute -top-4 -right-4 bg-neonPink text-obsidian font-gaming font-bold text-xs px-3 py-1 rounded-full shadow-pink">
              DEMO HERO ACTIVE
            </div>
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-neonPurple/20 border-2 border-electricCyan shadow-cyan flex items-center justify-center font-display font-bold text-6xl text-electricCyan">
              A
            </div>
            <div className="text-left flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 rounded-lg bg-neonPurple/20 text-neonPurple font-gaming text-xs font-bold">Level 8</span>
                <span className="text-xs text-textSecondary">Cyber Berserker</span>
              </div>
              <h3 className="font-display font-bold text-2xl text-textPrimary mb-3">Anirudh</h3>
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between text-xs font-gaming text-textSecondary mb-1">
                    <span>XP Progress</span>
                    <span>3,450 / 5,000 XP</span>
                  </div>
                  <div className="w-full h-2 bg-obsidian rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-neonPurple to-electricCyan w-[69%]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl md:text-5xl mb-4">Engineered For Maximum Gains</h2>
          <p className="text-textSecondary max-w-xl mx-auto font-sans">Every squat, step, and sprint directly fuels your digital progression.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-8 rounded-3xl border border-neonPurple/20 hover:border-electricCyan/50 transition-all group">
            <div className="w-14 h-14 rounded-2xl bg-neonPurple/20 flex items-center justify-center text-neonPurple mb-6 group-hover:scale-110 transition-transform">
              <Zap className="w-7 h-7 text-electricCyan" />
            </div>
            <h3 className="font-display font-bold text-xl mb-3">Real-World XP Engine</h3>
            <p className="text-textSecondary text-sm leading-relaxed">Log strength workouts, cardio sessions, steps, and hydration to instantly earn XP and level up your attributes.</p>
          </div>

          <div className="glass-card p-8 rounded-3xl border border-neonPurple/20 hover:border-neonPurple/50 transition-all group">
            <div className="w-14 h-14 rounded-2xl bg-neonPurple/20 flex items-center justify-center text-neonPurple mb-6 group-hover:scale-110 transition-transform">
              <Swords className="w-7 h-7 text-neonPurple" />
            </div>
            <h3 className="font-display font-bold text-xl mb-3">Cooperative Boss Raids</h3>
            <p className="text-textSecondary text-sm leading-relaxed">Join forces with a squad of up to 4 heroes to deal massive damage to legendary bosses like The Iron Behemoth.</p>
          </div>

          <div className="glass-card p-8 rounded-3xl border border-neonPink/20 hover:border-neonPink/50 transition-all group">
            <div className="w-14 h-14 rounded-2xl bg-neonPink/20 flex items-center justify-center text-neonPink mb-6 group-hover:scale-110 transition-transform">
              <Trophy className="w-7 h-7 text-neonPink" />
            </div>
            <h3 className="font-display font-bold text-xl mb-3">Epic Gear & Skill Tree</h3>
            <p className="text-textSecondary text-sm leading-relaxed">Unlock legendary cosmetic drops, equip cybernetic armor sets, and master specialized skill trees to boost your stats.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neonPurple/10 py-12 px-6 text-center text-xs text-textSecondary">
        <p>© 2026 QUESTFIT RPG Fitness Platform. All rights reserved. Designed for elite student developers.</p>
      </footer>
    </div>
  );
};