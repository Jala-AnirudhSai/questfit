import React from 'react';
import { useGame } from '../context/GameContext';
import { Box, Shield, Zap, Sword, Glasses, FlaskConical } from 'lucide-react';

export const InventoryPage = () => {
  const { inventory, toggleEquip } = useGame();

  const getIcon = (iconName) => {
    switch(iconName) {
      case 'Shield': return Shield;
      case 'Sword': return Sword;
      case 'Glasses': return Glasses;
      case 'FlaskConical': return FlaskConical;
      default: return Zap;
    }
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-12">
      <div className="glass-card p-8 rounded-3xl border border-neonPurple/30 shadow-neon">
        <h1 className="font-display font-bold text-2xl md:text-3xl mb-2 flex items-center gap-3">
          <Box className="w-7 h-7 text-neonPurple" /> Inventory & Loot System
        </h1>
        <p className="text-xs text-textSecondary mb-8">Equip legendary gear earned through milestones and achievements to boost your power.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {inventory.map(item => {
            const IconComponent = getIcon(item.icon);
            return (
              <div key={item.id} className={`glass-card p-6 rounded-2xl border transition-all ${item.equipped ? 'border-electricCyan shadow-cyan' : 'border-neonPurple/20'}`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-neonPurple/20 flex items-center justify-center text-electricCyan">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className={`px-2.5 py-1 rounded-md text-[10px] font-gaming font-bold uppercase ${
                    item.rarity === 'Legendary' ? 'bg-xpGold/20 text-xpGold' :
                    item.rarity === 'Epic' ? 'bg-neonPurple/20 text-neonPurple' :
                    item.rarity === 'Mythic' ? 'bg-neonPink/20 text-neonPink' : 'bg-surface text-textSecondary'
                  }`}>
                    {item.rarity}
                  </span>
                </div>
                <h3 className="font-display font-bold text-base text-textPrimary mb-1">{item.name}</h3>
                <p className="text-xs text-textSecondary mb-4">{item.stats} • {item.type}</p>
                <button 
                  onClick={() => toggleEquip(item.id)}
                  className={`w-full py-2.5 rounded-xl font-gaming font-bold text-xs transition-all ${
                    item.equipped 
                      ? 'bg-electricCyan/20 text-electricCyan border border-electricCyan/40' 
                      : 'bg-gradient-to-r from-neonPurple to-electricCyan text-obsidian'
                  }`}
                >
                  {item.equipped ? 'UNEQUIP' : 'EQUIP'}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};