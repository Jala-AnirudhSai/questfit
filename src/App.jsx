import React, { useState } from 'react';
import { GameProvider } from './context/GameContext';
import { MainLayout } from './layouts/MainLayout';
import { LandingPage } from './pages/LandingPage';
import { DashboardPage } from './pages/DashboardPage';
import { QuestsPage } from './pages/QuestsPage';
import { WorkoutTrackerPage } from './pages/WorkoutTrackerPage';
import { DungeonsPage } from './pages/DungeonsPage';
import { InventoryPage } from './pages/InventoryPage';
import { SkillTreePage } from './pages/SkillTreePage';
import { LeaderboardPage } from './pages/LeaderboardPage';
import { ProfilePage } from './pages/ProfilePage';
import { SettingsPage } from './pages/SettingsPage';

export default function App() {
  const [activeTab, setActiveTab] = useState('landing');

  if (activeTab === 'landing') {
    return <LandingPage onStartQuest={(tab) => setActiveTab(tab)} />;
  }

  return (
    <GameProvider>
      <MainLayout activeTab={activeTab} setActiveTab={setActiveTab}>
        {activeTab === 'dashboard' && <DashboardPage setActiveTab={setActiveTab} />}
        {activeTab === 'quests' && <QuestsPage />}
        {activeTab === 'workouts' && <WorkoutTrackerPage />}
        {activeTab === 'dungeons' && <DungeonsPage />}
        {activeTab === 'inventory' && <InventoryPage />}
        {activeTab === 'skilltree' && <SkillTreePage />}
        {activeTab === 'leaderboard' && <LeaderboardPage />}
        {activeTab === 'profile' && <ProfilePage />}
        {activeTab === 'settings' && <SettingsPage />}
      </MainLayout>
    </GameProvider>
  );
}