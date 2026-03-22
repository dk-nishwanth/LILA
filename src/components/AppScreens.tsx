import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, RotateCcw, Lock, Unlock, Check, Star, Zap, ShoppingCart, ArrowRight, ArrowLeft } from "lucide-react";

// --- Types ---
type Mission = {
  id: string;
  title: string;
  progress: number;
  total: number;
  reward: string;
  type: 'daily' | 'weekly';
};

type RewardState = 'locked' | 'unlocked' | 'claimed' | 'premium-locked';

type Reward = {
  tier: number;
  name: string;
  type: string;
  state: RewardState;
  track: 'free' | 'premium' | 'premium+';
  image: string;
  rarity: 'Common' | 'Uncommon' | 'Rare' | 'Epic' | 'Legendary' | 'Mythic';
};

// --- Components ---

const ProgressBar = ({ progress, total, color = "bg-white" }: { progress: number, total: number, color?: string }) => {
  const percentage = Math.min(100, (progress / total) * 100);
  return (
    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: `${percentage}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
        className={`h-full ${color}`}
      />
    </div>
  );
};

// --- Screen 2: Mission System ---
export const MissionScreen = ({ onBack }: { onBack: () => void }) => {
  const [activeTab, setActiveTab] = useState<'daily' | 'weekly'>('daily');
  const [missions, setMissions] = useState<Mission[]>([
    { id: 'd1', title: "Eliminate 10 enemies with SMGs", progress: 4, total: 10, reward: "500 XP", type: 'daily' },
    { id: 'd2', title: "Survive for 15 minutes in a single match", progress: 15, total: 15, reward: "800 XP", type: 'daily' },
    { id: 'd3', title: "Revive 3 teammates", progress: 1, total: 3, reward: "400 XP", type: 'daily' },
    { id: 'w1', title: "Win 5 matches in Season Mode", progress: 2, total: 5, reward: "2500 XP", type: 'weekly' },
    { id: 'w2', title: "Deal 5000 total damage", progress: 3420, total: 5000, reward: "3000 XP", type: 'weekly' },
    { id: 'w3', title: "Complete 10 daily missions", progress: 7, total: 10, reward: "5000 XP", type: 'weekly' },
  ]);

  const handleReroll = (id: string) => {
    setMissions(prev => prev.map(m => 
      m.id === id ? { ...m, title: "NEW MISSION: " + m.title.split(":")[0], progress: 0 } : m
    ));
  };

  const filteredMissions = missions.filter(m => m.type === activeTab);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-6 md:p-12 pt-24">
      <div className="max-w-4xl mx-auto">
        <button onClick={onBack} className="flex items-center gap-2 text-[10px] font-black tracking-widest uppercase opacity-40 hover:opacity-100 mb-12 transition-all">
          <ArrowLeft size={14} /> Back to Base
        </button>

        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-[10px] font-mono text-white/40 mb-2 block tracking-[0.4em]">MISSION_LOG // VOL_01</span>
            <h1 className="text-5xl font-black tracking-tighter uppercase">Operations</h1>
          </div>
          <div className="flex gap-8 border-b border-white/10">
            <button 
              onClick={() => setActiveTab('daily')}
              className={`pb-4 text-[10px] font-black tracking-widest uppercase transition-all ${activeTab === 'daily' ? 'border-b-2 border-white' : 'opacity-40'}`}
            >
              Daily
            </button>
            <button 
              onClick={() => setActiveTab('weekly')}
              className={`pb-4 text-[10px] font-black tracking-widest uppercase transition-all ${activeTab === 'weekly' ? 'border-b-2 border-white' : 'opacity-40'}`}
            >
              Weekly
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {filteredMissions.map((mission) => (
            <motion.div 
              layout
              key={mission.id}
              className="p-8 bg-white/5 border border-white/10 rounded-tr-3xl rounded-bl-3xl group hover:bg-white/10 transition-all"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="space-y-1">
                  <h3 className="text-lg font-black tracking-widest uppercase">{mission.title}</h3>
                  <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Reward: {mission.reward}</p>
                </div>
                <button 
                  onClick={() => handleReroll(mission.id)}
                  className="p-2 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all"
                  title="Reroll Mission"
                >
                  <RotateCcw size={14} />
                </button>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between text-[10px] font-black tracking-widest uppercase">
                  <span>Progress</span>
                  <span>{mission.progress} / {mission.total}</span>
                </div>
                <ProgressBar progress={mission.progress} total={mission.total} color={mission.progress === mission.total ? "bg-green-500" : "bg-white"} />
              </div>

              {mission.progress === mission.total && (
                <button className="w-full mt-6 py-3 bg-white text-black text-[10px] font-black tracking-widest uppercase rounded-tr-xl rounded-bl-xl hover:bg-white/90 transition-all">
                  Claim Rewards
                </button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- Screen 3: Reward Claim ---
export const RewardScreen = ({ onBack }: { onBack: () => void }) => {
  const [selectedReward, setSelectedReward] = useState<Reward | null>(null);
  const [rewards, setRewards] = useState<Reward[]>([
    { tier: 1, name: "Vanguard Banner", type: "Cosmetic", state: "claimed", track: 'free', image: "https://images.stockcake.com/public/e/7/4/e74d0134-d012-40d8-b67e-4ddabbc75d73_large/tactical-gear-display-stockcake.jpg", rarity: 'Common' },
    { tier: 5, name: "Shadow Spray", type: "Cosmetic", state: "unlocked", track: 'premium', image: "https://images.stockcake.com/public/d/d/6/dd6e7756-e769-4995-95c4-7eeb98bf87bf_large/tactical-soldier-sprite-stockcake.jpg", rarity: 'Uncommon' },
    { tier: 10, name: "Elite Weapon Skin", type: "Cosmetic", state: "locked", track: 'free', image: "https://images.stockcake.com/public/1/6/c/16cd7957-770a-41e8-aea6-fb28e9673828_large/armed-tactical-officer-stockcake.jpg", rarity: 'Epic' },
    { tier: 25, name: "Mythic Charm", type: "Cosmetic", state: "premium-locked", track: 'premium+', image: "https://images.stockcake.com/public/4/5/b/45b531cf-e651-471a-988e-8a875cd406d3_large/tactical-rope-challenge-stockcake.jpg", rarity: 'Legendary' },
  ]);

  const handleClaim = (tier: number) => {
    setRewards(prev => prev.map(r => r.tier === tier ? { ...r, state: 'claimed' } : r));
    setSelectedReward(null);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-6 md:p-12 pt-24">
      <div className="max-w-6xl mx-auto">
        <button onClick={onBack} className="flex items-center gap-2 text-[10px] font-black tracking-widest uppercase opacity-40 hover:opacity-100 mb-12 transition-all">
          <ArrowLeft size={14} /> Back to Base
        </button>

        <div className="mb-16">
          <span className="text-[10px] font-mono text-white/40 mb-2 block tracking-[0.4em]">REWARD_TRACK // SEASON_01</span>
          <h1 className="text-5xl font-black tracking-tighter uppercase mb-4">Battle Pass</h1>
          <div className="flex items-center gap-4">
            <div className="h-1 w-64 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-white w-1/3"></div>
            </div>
            <span className="text-[10px] font-black tracking-widest opacity-60">Tier 38 / 100</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {rewards.map((reward) => (
            <motion.div 
              key={reward.tier}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedReward(reward)}
              className={`relative aspect-[3/4] bg-white/5 border rounded-tr-[3rem] rounded-bl-[3rem] overflow-hidden cursor-pointer group transition-all ${
                reward.state === 'premium-locked' ? 'border-purple-500/20' : 
                reward.state === 'locked' ? 'border-white/5 opacity-60' : 'border-white/10'
              }`}
            >
              <img src={reward.image} className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              
              <div className="absolute top-6 left-6 flex flex-col gap-2">
                <div className="w-10 h-10 bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-[10px] font-black">
                  {reward.tier}
                </div>
                {reward.state === 'premium-locked' && <Lock size={12} className="text-purple-500" />}
                {reward.state === 'claimed' && <Check size={12} className="text-green-500" />}
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-[8px] font-black tracking-[0.3em] uppercase opacity-40 mb-1">{reward.track}</p>
                <h3 className="text-sm font-black tracking-widest uppercase">{reward.name}</h3>
              </div>

              {/* State Overlays */}
              {reward.state === 'claimed' && (
                <div className="absolute inset-0 bg-green-500/10 flex items-center justify-center pointer-events-none">
                  <div className="bg-green-500 text-black px-4 py-1 text-[8px] font-black tracking-widest uppercase rounded-full">Claimed</div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Reward Preview Modal */}
        <AnimatePresence>
          {selectedReward && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/95 backdrop-blur-xl"
              onClick={() => setSelectedReward(null)}
            >
              <motion.div 
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                onClick={e => e.stopPropagation()}
              >
                <div className="relative aspect-square rounded-tr-[5rem] rounded-bl-[5rem] overflow-hidden border border-white/10">
                  <motion.img 
                    animate={{ 
                      rotateY: [0, 10, 0, -10, 0],
                      scale: [1, 1.02, 1]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    src={selectedReward.image} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                </div>

                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-mono text-white/40 tracking-[0.4em]">ITEM_PREVIEW // {selectedReward.rarity.toUpperCase()}</span>
                    <div className="flex-1 h-[1px] bg-white/10"></div>
                  </div>
                  
                  <div>
                    <h2 className="text-6xl font-black tracking-tighter uppercase mb-4">{selectedReward.name}</h2>
                    <div className="flex gap-4">
                      <span className={`px-4 py-1 text-[10px] font-black tracking-widest uppercase rounded-sm ${
                        selectedReward.rarity === 'Legendary' ? 'bg-orange-500' : 'bg-blue-600'
                      }`}>
                        {selectedReward.rarity}
                      </span>
                      <span className="border border-white/20 px-4 py-1 text-[10px] font-black tracking-widest uppercase opacity-60 rounded-sm">
                        {selectedReward.type}
                      </span>
                    </div>
                  </div>

                  <p className="text-white/60 leading-relaxed max-w-md">
                    Classified tactical asset. Recovered from Sector 7G. 
                    This item represents the pinnacle of field equipment.
                  </p>

                  <div className="flex gap-4 pt-8">
                    {selectedReward.state === 'unlocked' ? (
                      <button 
                        onClick={() => handleClaim(selectedReward.tier)}
                        className="flex-1 bg-white text-black py-4 rounded-tr-xl rounded-bl-xl text-[10px] font-black tracking-widest uppercase hover:scale-105 transition-all"
                      >
                        Claim Reward
                      </button>
                    ) : selectedReward.state === 'claimed' ? (
                      <button className="flex-1 border border-green-500 text-green-500 py-4 rounded-tr-xl rounded-bl-xl text-[10px] font-black tracking-widest uppercase cursor-default">
                        Already Claimed
                      </button>
                    ) : (
                      <button className="flex-1 bg-white/10 text-white/40 py-4 rounded-tr-xl rounded-bl-xl text-[10px] font-black tracking-widest uppercase cursor-not-allowed">
                        {selectedReward.state === 'premium-locked' ? 'Premium Required' : 'Locked'}
                      </button>
                    )}
                    <button 
                      onClick={() => setSelectedReward(null)}
                      className="px-8 border border-white/20 py-4 rounded-tr-xl rounded-bl-xl text-[10px] font-black tracking-widest uppercase hover:bg-white hover:text-black transition-all"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

// --- Screen 4: Purchase Flow ---
export const PurchaseScreen = ({ onBack, onGoToShop }: { onBack: () => void, onGoToShop: () => void }) => {
  const [currency, setCurrency] = useState(400); // Low currency to trigger redirect
  const [tierCount, setTierCount] = useState(5);
  const TIER_PRICE = 150;

  const handlePurchase = (cost: number) => {
    if (currency < cost) {
      onGoToShop();
    } else {
      setCurrency(prev => prev - cost);
      alert("Purchase Successful!");
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-6 md:p-12 pt-24">
      <div className="max-w-5xl mx-auto">
        <button onClick={onBack} className="flex items-center gap-2 text-[10px] font-black tracking-widest uppercase opacity-40 hover:opacity-100 mb-12 transition-all">
          <ArrowLeft size={14} /> Back to Base
        </button>

        <div className="flex justify-between items-start mb-16">
          <div>
            <span className="text-[10px] font-mono text-white/40 mb-2 block tracking-[0.4em]">UPGRADE_CENTER // SECURE_LINE</span>
            <h1 className="text-5xl font-black tracking-tighter uppercase">Elite Access</h1>
          </div>
          <div className="bg-white/5 border border-white/10 px-6 py-3 rounded-tr-xl rounded-bl-xl">
            <p className="text-[8px] font-black tracking-widest uppercase opacity-40 mb-1">Your Balance</p>
            <p className="text-xl font-black">{currency} GEMS</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Premium Upgrade */}
          <div className="p-10 bg-white/5 border border-white/10 rounded-tr-[4rem] rounded-bl-[4rem] flex flex-col gap-8 group hover:border-white/40 transition-all">
            <div className="flex justify-between items-start">
              <h3 className="text-2xl font-black tracking-widest uppercase">Premium Pass</h3>
              <span className="bg-yellow-500 text-black px-3 py-1 text-[8px] font-black tracking-widest uppercase">Popular</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Unlock the full potential of Season 01. Access all 100 tiers of premium rewards, 
              including exclusive weapon skins and operator outfits.
            </p>
            <div className="mt-auto">
              <p className="text-3xl font-black mb-6">800 GEMS</p>
              <button 
                onClick={() => handlePurchase(800)}
                className="w-full py-4 bg-white text-black text-[10px] font-black tracking-widest uppercase rounded-tr-xl rounded-bl-xl hover:scale-105 transition-all"
              >
                Upgrade Now
              </button>
            </div>
          </div>

          {/* Premium+ Upgrade */}
          <div className="p-10 bg-purple-900/10 border border-purple-500/20 rounded-tr-[4rem] rounded-bl-[4rem] flex flex-col gap-8 group hover:border-purple-500/40 transition-all">
            <div className="flex justify-between items-start">
              <h3 className="text-2xl font-black tracking-widest uppercase">Premium+ Bundle</h3>
              <span className="bg-purple-600 text-white px-3 py-1 text-[8px] font-black tracking-widest uppercase">Elite</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              The ultimate tactical advantage. Includes everything in Premium plus 25 instant tier skips 
              and the exclusive "Shadow Protocol" animated skin.
            </p>
            <div className="mt-auto">
              <p className="text-3xl font-black mb-6">1,800 GEMS</p>
              <button 
                onClick={() => handlePurchase(1800)}
                className="w-full py-4 bg-purple-600 text-white text-[10px] font-black tracking-widest uppercase rounded-tr-xl rounded-bl-xl hover:scale-105 transition-all"
              >
                Unlock Elite
              </button>
            </div>
          </div>
        </div>

        {/* Tier Skip */}
        <div className="p-10 bg-white/5 border border-white/10 rounded-tr-[4rem] rounded-bl-[4rem] flex flex-col md:flex-row gap-12 items-center justify-between">
          <div className="space-y-4">
            <h3 className="text-2xl font-black tracking-widest uppercase">Instant Tier Skip</h3>
            <p className="text-[10px] font-bold opacity-40 uppercase tracking-widest">{TIER_PRICE} Gems per tier</p>
            <div className="flex items-center gap-6">
              <button 
                onClick={() => setTierCount(Math.max(1, tierCount - 1))}
                className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all text-xl font-black"
              >
                -
              </button>
              <span className="text-4xl font-black w-12 text-center">{tierCount}</span>
              <button 
                onClick={() => setTierCount(tierCount + 1)}
                className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all text-xl font-black"
              >
                +
              </button>
            </div>
          </div>
          <div className="text-right space-y-6">
            <p className="text-4xl font-black">Total: {tierCount * TIER_PRICE} Gems</p>
            <button 
              onClick={() => handlePurchase(tierCount * TIER_PRICE)}
              className="bg-white text-black px-12 py-4 rounded-tr-2xl rounded-bl-2xl text-[10px] font-black tracking-[0.3em] uppercase hover:scale-105 transition-all"
            >
              Confirm Purchase
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Shop Screen ---
export const ShopScreen = ({ onBack }: { onBack: () => void }) => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-6 md:p-12 pt-24">
      <div className="max-w-4xl mx-auto">
        <button onClick={onBack} className="flex items-center gap-2 text-[10px] font-black tracking-widest uppercase opacity-40 hover:opacity-100 mb-12 transition-all">
          <ArrowLeft size={14} /> Back
        </button>

        <div className="text-center mb-16">
          <span className="text-[10px] font-mono text-white/40 mb-2 block tracking-[0.4em]">EXCHANGE // MARKETPLACE</span>
          <h1 className="text-6xl font-black tracking-tighter uppercase">Gem Shop</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { amount: 500, price: "₹199", bonus: "" },
            { amount: 1200, price: "₹399", bonus: "+100 Bonus" },
            { amount: 2500, price: "₹799", bonus: "+300 Bonus" },
          ].map((pack, i) => (
            <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-tr-3xl rounded-bl-3xl text-center group hover:bg-white hover:text-black transition-all cursor-pointer">
              <p className="text-4xl font-black mb-2">{pack.amount}</p>
              <p className="text-[10px] font-black tracking-widest uppercase opacity-40 group-hover:text-black/60 mb-6">Gems</p>
              {pack.bonus && <p className="text-[10px] font-black text-yellow-500 mb-6">{pack.bonus}</p>}
              <p className="text-xl font-black">{pack.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- Screen 5: VFX / Animation (XP Gain) ---
export const XPGainAnimation = ({ amount, onComplete }: { amount: string, onComplete: () => void }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.5 }}
      onAnimationComplete={onComplete}
      className="fixed inset-0 z-[200] flex items-center justify-center pointer-events-none"
    >
      <div className="text-center">
        <motion.div 
          animate={{ y: [-20, -100], opacity: [0, 1, 0] }}
          transition={{ duration: 1.5 }}
          className="text-6xl font-black text-white tracking-widest drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]"
        >
          {amount}
        </motion.div>
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: 300 }}
          className="h-2 bg-white mt-4 mx-auto rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)]"
        />
      </div>
    </motion.div>
  );
};
