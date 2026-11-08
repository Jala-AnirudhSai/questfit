import React, { useState } from 'react';
import { useGame } from '../context/GameContext';
import { 
  Shield, Flame, Swords, Trophy, BookOpen, 
  User, Settings, Box, Zap, Activity, Menu, X, Bell, LogOut, ChevronRight
} from 'lucide-react';

export const MainLayout = ({ children, activeTab, setActiveTab }) => {
  const { user, notification, resetDemoData } = useGame();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);

  const xpPercent = Math.min(100, Math.round((user.xp / user.nextLevelXp) * 100));

  const navItems = [
    { id: 'dashboard', label: 'Hero Dashboard', icon: Activity },
    { id: 'quests', label: 'Daily Quests', icon: Flame },
    { id: 'workouts', label: 'Workout Tracker', icon: Zap },
    { id: 'dungeons', label: 'Raid Dungeons', icon: Swords },
    { id: 'skilltree', label: 'Skill Tree', icon: Shield },
    { id: 'inventory', label: 'Inventory & Loot', icon: Box },
    { id: 'leaderboard', label: 'Leaderboard', icon: Trophy },
    { id: 'profile', label: 'Character Profile', icon: User },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const initialLetter = user?.username ? user.username.charAt(0).toUpperCase() : 'A';

  return (
    <div className="min-h-screen bg-obsidian text-textPrimary flex flex-col md:flex-row relative overflow-x-hidden">
      
      {/* Notification Toast */}
      {notification && (
        <div className="fixed top-5 right-5 z-50 glass-card p-4 rounded-xl border border-neonPurple/50 shadow-neon flex items-center gap-3 animate-bounce">
          <div className="w-3 h-3 rounded-full bg-electricCyan animate-ping" />
          <div>
            <h4 className="font-bold text-sm text-electricCyan">{notification.title}</h4>
            <p className="text-xs text-textSecondary">{notification.message}</p>
          </div>
        </div>
      )}

      {/* Sidebar for Desktop */}
      <aside className="hidden md:flex flex-col w-64 bg-surface/90 border-r border-neonPurple/20 backdrop-blur-md sticky top-0 h-screen z-30">
        <div className="p-6 border-b border-neonPurple/10 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('dashboard')}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-neonPurple to-electricCyan flex items-center justify-center shadow-neon">
              <Swords className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="font-display font-bold text-xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-electricCyan to-neonPurple">QUESTFIT</h1>
              <p className="text-xs text-textSecondary">RPG Fitness Engine</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                  isActive 
                    ? 'bg-gradient-to-r from-neonPurple/20 to-electricCyan/10 text-electricCyan border border-neonPurple/40 shadow-neon' 
                    : 'text-textSecondary hover:text-textPrimary hover:bg-surface'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-electricCyan' : 'text-textSecondary'}`} />
                <span className="text-sm">{item.label}</span>
                {isActive && <ChevronRight className="w-4 h-4 ml-auto text-electricCyan" />}
              </button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-neonPurple/10 bg-obsidian/40">
          <button 
            onClick={() => setActiveTab('landing')}
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-neonPink/30 text-neonPink hover:bg-neonPink/10 text-xs font-semibold transition-all"
          >
            <LogOut className="w-4 h-4" /> Exit to Landing Page
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* Top Navbar */}
        <header className="h-20 bg-surface/80 border-b border-neonPurple/20 backdrop-blur-md px-6 flex items-center justify-between sticky top-0 z-20">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-surface border border-neonPurple/20 text-electricCyan"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <div>
              <h2 className="font-display font-bold text-lg capitalize tracking-wide text-textPrimary">
                {activeTab === 'dashboard' ? 'Hero Dashboard' : activeTab.replace('-', ' ')}
              </h2>
              <p className="text-xs text-textSecondary hidden sm:block">Welcome back, Commander {user.username}. Ready for today's quests?</p>
            </div>
          </div>

          <div className="flex items-center gap-5">
            {/* XP and Level badge */}
            <div className="hidden sm:flex items-center gap-3 bg-obsidian/60 px-4 py-2 rounded-xl border border-neonPurple/30">
              <div className="w-8 h-8 rounded-lg bg-neonPurple/20 flex items-center justify-center text-neonPurple font-bold font-gaming text-sm">
                L{user.level}
              </div>
              <div className="w-28">
                <div className="flex justify-between text-[10px] text-textSecondary mb-1 font-gaming">
                  <span>XP</span>
                  <span>{user.xp}/{user.nextLevelXp}</span>
                </div>
                <div className="w-full h-1.5 bg-obsidian rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-neonPurple to-electricCyan transition-all duration-500" style={{ width: `${xpPercent}%` }} />
                </div>
              </div>
            </div>

            {/* Notification bell */}
            <button className="relative p-2.5 rounded-xl bg-obsidian/60 border border-neonPurple/20 text-textSecondary hover:text-electricCyan transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-neonPink animate-pulse" />
            </button>

            {/* User Profile Dropdown Toggle */}
            <div className="relative">
              <div 
                onClick={() => setProfileDropdown(!profileDropdown)}
                className="flex items-center gap-3 cursor-pointer p-1.5 rounded-xl hover:bg-surface border border-transparent hover:border-neonPurple/30 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-neonPurple/20 border border-neonPurple/40 shadow-neon flex items-center justify-center font-display font-bold text-lg text-electricCyan">
                  {initialLetter}
                </div>
                <div className="hidden lg:block text-left">
                  <h4 className="font-bold text-sm text-textPrimary">{user.username}</h4>
                  <p className="text-[11px] text-neonPurple font-gaming">{user.title}</p>
                </div>
              </div>

              {profileDropdown && (
                <div className="absolute right-0 mt-3 w-56 glass-card rounded-2xl p-2 shadow-2xl border border-neonPurple/40 z-50">
                  <div className="p-3 border-b border-neonPurple/10">
                    <p className="font-bold text-sm">{user.username}</p>
                    <p className="text-xs text-textSecondary">{user.title}</p>
                  </div>
                  <button onClick={() => { setActiveTab('profile'); setProfileDropdown(false); }} className="w-full text-left px-3 py-2 rounded-lg text-xs hover:bg-neonPurple/10 text-textPrimary flex items-center gap-2">
                    <User className="w-4 h-4 text-electricCyan" /> Character Profile
                  </button>
                  <button onClick={() => { setActiveTab('settings'); setProfileDropdown(false); }} className="w-full text-left px-3 py-2 rounded-lg text-xs hover:bg-neonPurple/10 text-textPrimary flex items-center gap-2">
                    <Settings className="w-4 h-4 text-neonPurple" /> Settings
                  </button>
                  <button onClick={() => { resetDemoData(); setProfileDropdown(false); }} className="w-full text-left px-3 py-2 rounded-lg text-xs hover:bg-neonPink/10 text-neonPink flex items-center gap-2">
                    <LogOut className="w-4 h-4" /> Reset Demo Data
                  </button>
                </div>
              )}
            </div>

          </div>
        </header>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-40 bg-obsidian/90 backdrop-blur-lg flex flex-col pt-24 px-6 pb-6">
            <div className="flex items-center gap-4 p-4 mb-4 glass-card rounded-2xl border border-neonPurple/30">
              <div className="w-12 h-12 rounded-xl bg-neonPurple/20 border border-electricCyan flex items-center justify-center font-display font-bold text-xl text-electricCyan">
                {initialLetter}
              </div>
              <div>
                <h3 className="font-bold text-textPrimary">{user.username}</h3>
                <p className="text-xs text-electricCyan font-gaming">Level {user.level} — {user.title}</p>
              </div>
            </div>
            <nav className="space-y-2 flex-1 overflow-y-auto">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => { setActiveTab(item.id); setMobileMenuOpen(false); }}
                    className={`w-full flex items-center gap-4 px-5 py-3.5 rounded-xl font-medium ${
                      isActive ? 'bg-neonPurple/20 text-electricCyan border border-neonPurple/40' : 'text-textSecondary hover:bg-surface'
                    }`}
                  >
                    <Icon className="w-5 h-5 text-electricCyan" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>
            <button 
              onClick={() => { setActiveTab('landing'); setMobileMenuOpen(false); }}
              className="w-full py-3 rounded-xl border border-neonPink/30 text-neonPink font-semibold text-center mt-4"
            >
              Exit to Landing Page
            </button>
          </div>
        )}

        {/* Page Content */}
        <main className="flex-1 p-6 md:p-10 max-w-7xl w-full mx-auto">
          {children}
        </main>
      </div>

    </div>
  );
};