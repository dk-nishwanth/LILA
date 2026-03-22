import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Reward, Mission, RewardState } from './types';

interface BattlePassContextType {
  tier: number;
  xp: number;
  maxXp: number;
  gems: number;
  lp: number;
  isPremium: boolean;
  isPremiumPlus: boolean;
  rewards: Reward[];
  missions: Mission[];
  claimReward: (id: string) => void;
  completeMission: (id: string) => void;
  rerollMission: (id: string) => void;
  addXp: (amount: number) => void;
  purchasePremium: () => void;
  purchasePremiumPlus: () => void;
  skipTiers: (count: number) => void;
}

const BattlePassContext = createContext<BattlePassContextType | undefined>(undefined);

export const BattlePassProvider = ({ children }: { children: ReactNode }) => {
  const [tier, setTier] = useState(38);
  const [xp, setXp] = useState(6240);
  const [gems, setGems] = useState(800);
  const [lp, setLp] = useState(2400);
  const [isPremium, setIsPremium] = useState(false);
  const [isPremiumPlus, setIsPremiumPlus] = useState(false);
  
  const maxXp = 10000;

  const [rewards, setRewards] = useState<Reward[]>([
    { id: '1', tier: 1, name: 'Tactical Banner', type: 'SKIN', rarity: 'COMMON', isPremium: false, image: 'https://images.stockcake.com/public/e/7/4/e74d0134-d012-40d8-b67e-4ddabbc75d73_large/tactical-gear-display-stockcake.jpg' },
    { id: '5', tier: 5, name: 'Shadow Operative', type: 'SKIN', rarity: 'EPIC', isPremium: true, image: 'https://images.stockcake.com/public/d/d/6/dd6e7756-e769-4995-95c4-7eeb98bf87bf_large/tactical-soldier-sprite-stockcake.jpg' },
    { id: '10', tier: 10, name: '100 Gems', type: 'CURRENCY', rarity: 'RARE', isPremium: false, image: 'https://images.stockcake.com/public/2/9/e/29ea1ca4-3132-4d2a-9138-8a8bbf46e80b_large/tactical-data-command-stockcake.jpg' },
    { id: '25', tier: 25, name: 'Elite Vest', type: 'WEAPON', rarity: 'LEGENDARY', isPremium: true, image: 'https://images.stockcake.com/public/3/a/3/3a3f2b5c-d80d-4d0f-9ee2-9294918646b4_large/futuristic-tactical-vest-stockcake.jpg' },
    { id: '50', tier: 50, name: 'Ghost Camo', type: 'SKIN', rarity: 'EPIC', isPremium: false, image: 'https://images.stockcake.com/public/b/7/5/b75c1639-318c-4fad-b5e7-8a65f68bc36c_large/tactical-gear-display-stockcake.jpg' },
    { id: '75', tier: 75, name: 'Neon Blade', type: 'WEAPON', rarity: 'LEGENDARY', isPremium: true, image: 'https://images.stockcake.com/public/2/3/7/237ac533-c9dc-4212-b802-078a22e02991_large/tactical-gear-display-stockcake.jpg' },
    { id: '100', tier: 100, name: 'Blackout Master', type: 'SKIN', rarity: 'LEGENDARY', isPremium: true, image: 'https://images.stockcake.com/public/1/6/c/16cd7957-770a-41e8-aea6-fb28e9673828_large/armed-tactical-officer-stockcake.jpg' },
  ]);

  const [missions, setMissions] = useState<Mission[]>([
    { id: 'd1', title: 'Deal 500 Damage', description: 'Deal damage to enemies in any mode', progress: 500, total: 500, rewardXP: 500, type: 'DAILY' },
    { id: 'd2', title: 'Get 3 Headshots', description: 'Eliminate enemies with headshots', progress: 1, total: 3, rewardXP: 300, type: 'DAILY' },
    { id: 'w1', title: 'Win 5 Matches', description: 'Win matches in Extraction mode', progress: 2, total: 5, rewardXP: 2500, type: 'WEEKLY' },
    { id: 'w2', title: 'Travel 5000m', description: 'Travel distance in the combat zone', progress: 1200, total: 5000, rewardXP: 1500, type: 'WEEKLY' },
  ]);

  const addXp = (amount: number) => {
    setXp(prev => {
      const newXp = prev + amount;
      if (newXp >= maxXp) {
        setTier(t => t + 1);
        return newXp - maxXp;
      }
      return newXp;
    });
  };

  const claimReward = (id: string) => {
    // In a real app, we'd track claimed status in state
    console.log('Claimed reward:', id);
  };

  const completeMission = (id: string) => {
    const mission = missions.find(m => m.id === id);
    if (mission && mission.progress >= mission.total) {
      addXp(mission.rewardXP);
      setMissions(prev => prev.filter(m => m.id !== id));
    }
  };

  const rerollMission = (id: string) => {
    console.log('Rerolled mission:', id);
  };

  const purchasePremium = () => {
    if (gems >= 500) {
      setGems(prev => prev - 500);
      setIsPremium(true);
    } else {
      throw new Error('INSUFFICIENT_FUNDS');
    }
  };

  const purchasePremiumPlus = () => {
    if (gems >= 1000) {
      setGems(prev => prev - 1000);
      setIsPremium(true);
      setIsPremiumPlus(true);
      setTier(t => t + 25);
    } else {
      throw new Error('INSUFFICIENT_FUNDS');
    }
  };

  const skipTiers = (count: number) => {
    const cost = count * 150;
    if (gems >= cost) {
      setGems(prev => prev - cost);
      setTier(t => t + count);
    } else {
      throw new Error('INSUFFICIENT_FUNDS');
    }
  };

  return (
    <BattlePassContext.Provider value={{
      tier, xp, maxXp, gems, lp, isPremium, isPremiumPlus, rewards, missions,
      claimReward, completeMission, rerollMission, addXp,
      purchasePremium, purchasePremiumPlus, skipTiers
    }}>
      {children}
    </BattlePassContext.Provider>
  );
};

export const useBattlePass = () => {
  const context = useContext(BattlePassContext);
  if (!context) throw new Error('useBattlePass must be used within a BattlePassProvider');
  return context;
};
