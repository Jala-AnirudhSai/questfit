import React from 'react';
import { useGame } from '../context/GameContext';
import { Settings, RefreshCw } from 'lucide-react';

export const SettingsPage = () => {
  const { resetDemoData } = useGame();

  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-12">
      <div className="glass-card p-8 rounded-3xl border border-neonPurple/30 shadow-neon">
        <h1 className="font-display font-bold text-2xl md:text-3xl mb-2 flex items-center gap-3">
          <Settings className="w-7 h-7 text-neonPurple" /> System Settings
        </h1>
        <p className="text-xs text-textSecondary mb-8">Manage application preferences and data persistence.</p>

        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-obsidian/50 border border-neonPurple/20 flex items-center justify-between">
            <div>
              <h4 className="font-bold text-sm text-textPrimary mb-1">Reset Demo Data</h4>
              <p className="text-xs text-textSecondary">Restore all attributes, workouts, quests, and boss state to initial demo values.</p>
            </div>
            <button 
              onClick={resetDemoData}
              className="px-5 py-2.5 rounded-xl bg-neonPink/20 text-neonPink text-xs font-bold font-gaming border border-neonPink/40 hover:bg-neonPink/30 transition-all flex items-center gap-2"
            >
              <RefreshCw className="w-4 h-4" /> Reset Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};