export enum RewardState {
  LOCKED = 'LOCKED',
  UNLOCKED = 'UNLOCKED',
  CLAIMED = 'CLAIMED',
  PREMIUM_LOCKED = 'PREMIUM_LOCKED'
}

export interface Reward {
  id: string;
  tier: number;
  name: string;
  type: 'SKIN' | 'WEAPON' | 'CURRENCY' | 'EMOTE';
  rarity: 'COMMON' | 'RARE' | 'EPIC' | 'LEGENDARY';
  isPremium: boolean;
  image: string;
}

export interface Mission {
  id: string;
  title: string;
  description: string;
  progress: number;
  total: number;
  rewardXP: number;
  type: 'DAILY' | 'WEEKLY';
}
