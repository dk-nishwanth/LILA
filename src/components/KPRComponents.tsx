import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, Search, User, X, CheckCircle2, Star, Zap } from "lucide-react";

export const Crosshair = ({ className = "" }: { className?: string }) => (
  <div className={`relative w-12 h-12 flex items-center justify-center ${className}`}>
    <div className="absolute w-full h-[1px] bg-current opacity-20"></div>
    <div className="absolute h-full w-[1px] bg-current opacity-20"></div>
    <div className="absolute w-2 h-2 border border-current opacity-40"></div>
  </div>
);

export const Navbar = ({ onNavigate, currentScreen = 'home' }: { onNavigate: (screen: string) => void, currentScreen?: string }) => {
  return (
    <nav className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 transition-all duration-300 ${currentScreen === 'home' ? 'bg-transparent' : 'bg-black/80 backdrop-blur-md border-b border-white/5'} text-white`}>
      <div className="flex items-center gap-6">
        <div onClick={() => onNavigate('home')} className="flex flex-col gap-1.5 cursor-pointer group">
          <div className="w-8 h-[1px] bg-white group-hover:w-12 transition-all"></div>
          <div className="w-5 h-[1px] bg-white group-hover:w-12 transition-all"></div>
          <div className="w-8 h-[1px] bg-white group-hover:w-12 transition-all"></div>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-black tracking-[0.3em] hidden sm:block">LILA BLACK</span>
            <span className="bg-yellow-500 text-black text-[7px] font-black px-1.5 py-0.5 rounded-sm tracking-tighter">PREMIUM</span>
          </div>
          <div className="flex items-center gap-2 mt-1 hidden sm:flex">
            <div className="h-1 w-24 bg-white/10 overflow-hidden rounded-full">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "62%" }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-full bg-white"
              ></motion.div>
            </div>
            <span className="text-[8px] font-bold opacity-60">TIER 38</span>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex items-center gap-10 text-[9px] font-black tracking-[0.3em] uppercase">
        <button onClick={() => onNavigate('home')} className={`flex items-center gap-2 group relative transition-opacity ${currentScreen === 'home' ? 'opacity-100' : 'opacity-60 hover:opacity-100'}`}>
          <span className={`absolute -left-4 w-1.5 h-1.5 bg-white rounded-full transition-transform ${currentScreen === 'home' ? 'scale-100' : 'scale-0 group-hover:scale-100'}`}></span>
          HOME
        </button>
        <button onClick={() => onNavigate('rewards')} className={`flex items-center gap-2 group relative transition-opacity ${currentScreen === 'rewards' ? 'opacity-100' : 'opacity-60 hover:opacity-100'}`}>
          <span className={`absolute -left-4 w-1.5 h-1.5 bg-white rounded-full transition-transform ${currentScreen === 'rewards' ? 'scale-100' : 'scale-0 group-hover:scale-100'}`}></span>
          BATTLE PASS
        </button>
        <button onClick={() => onNavigate('missions')} className={`flex items-center gap-2 group relative transition-opacity ${currentScreen === 'missions' ? 'opacity-100' : 'opacity-60 hover:opacity-100'}`}>
          <span className={`absolute -left-4 w-1.5 h-1.5 bg-white rounded-full transition-transform ${currentScreen === 'missions' ? 'scale-100' : 'scale-0 group-hover:scale-100'}`}></span>
          MISSIONS
        </button>
        <button onClick={() => onNavigate('purchase')} className={`flex items-center gap-2 group relative transition-opacity ${currentScreen === 'purchase' ? 'opacity-100' : 'opacity-60 hover:opacity-100'}`}>
          <span className={`absolute -left-4 w-1.5 h-1.5 bg-white rounded-full transition-transform ${currentScreen === 'purchase' ? 'scale-100' : 'scale-0 group-hover:scale-100'}`}></span>
          UPGRADE
        </button>
      </div>

      <div className="flex items-center gap-4">
        <button className="hidden md:flex items-center gap-2 text-[9px] font-black tracking-widest uppercase opacity-60 hover:opacity-100 transition-opacity">
          <Search size={14} />
          SEARCH
        </button>
        <button onClick={() => onNavigate('shop')} className="bg-white text-black px-8 py-3 rounded-tr-2xl rounded-bl-2xl text-[10px] font-black tracking-[0.2em] hover:bg-white/90 hover:scale-105 transition-all shadow-lg shadow-white/10">
          2,400 LP · 800 GEMS
        </button>
      </div>
    </nav>
  );
};

export const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col justify-end p-6 md:p-12 overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          src="/ChatGPT Image Mar 22, 2026, 12_54_43 PM.png" 
          alt="Hero" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-end justify-between gap-12">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-12 h-[1px] bg-white/40"></div>
            <span className="text-[10px] font-black tracking-[0.4em] text-white/60 uppercase">Season 01 · Operation Blackout</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-col"
          >
            <h1 className="kpr-heading text-[18vw] md:text-[14vw] text-white leading-[0.75]">THE.</h1>
            <h1 className="kpr-heading text-[18vw] md:text-[14vw] text-white leading-[0.75] ml-[8vw]">HUNT.</h1>
            <h1 className="kpr-heading text-[18vw] md:text-[14vw] text-white leading-[0.75]">BEGINS.</h1>
          </motion.div>
        </div>

        <div className="hidden md:block text-right mb-12">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col items-end gap-6"
          >
            <p className="text-white text-[10px] font-bold tracking-[0.2em] uppercase max-w-[200px] leading-relaxed opacity-60">
              90 days. 100 tiers. One chance to become legend.
            </p>
            <div className="flex gap-4">
              <button className="bg-white text-black px-6 py-3 rounded-tr-xl rounded-bl-xl text-[9px] font-black tracking-widest uppercase hover:scale-105 transition-all">View Rewards</button>
              <button className="border border-white/20 px-6 py-3 rounded-tr-xl rounded-bl-xl text-[9px] font-black tracking-widest uppercase hover:bg-white hover:text-black transition-all">Get Premium</button>
            </div>
            <div className="w-full max-w-[250px] space-y-2">
              <div className="flex justify-between text-[9px] font-black tracking-widest uppercase opacity-60">
                <span>Tier 38 of 100</span>
                <span>6,240 / 10,000 XP</span>
              </div>
              <div className="h-1 bg-white/10 w-full overflow-hidden">
                <div className="h-full bg-white w-[62.4%]"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Technical Overlays */}
      <div className="absolute top-32 right-12 hidden lg:flex flex-col items-end gap-2 text-white/20 font-mono text-[9px]">
        <p>COORD_X: 47.2819</p>
        <p>COORD_Y: -122.4047</p>
        <p>SECTOR: 7G-ALPHA</p>
      </div>

      <div className="absolute left-12 bottom-12 flex flex-col gap-4">
        <div className="w-12 h-12 border border-white/20 flex items-center justify-center">
          <Crosshair className="text-white/40" />
        </div>
      </div>

      <div className="absolute right-12 bottom-12 flex flex-col items-end gap-4 text-white">
        <span className="text-[10px] font-black tracking-[0.4em] uppercase rotate-90 origin-right translate-y-12 opacity-40">SCROLL</span>
        <div className="w-[1px] h-32 bg-white/10 relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 128] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-16 bg-white/60"
          />
        </div>
      </div>
    </section>
  );
};

export const StorySection = () => {
  return (
    <section className="min-h-screen bg-white py-32 px-6 md:px-12 border-t border-kpr-ink/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[10px] font-mono text-kpr-ink/40">SEASON_INFO</span>
              <div className="flex-1 h-[1px] bg-kpr-ink/10"></div>
            </div>
            
            <h2 className="kpr-heading text-6xl md:text-[8vw] mb-16 leading-[0.85]">
              62 DAYS REMAINING<br/>
              <span className="text-kpr-ink/20">100 TOTAL TIERS.</span>
            </h2>
            
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="w-full md:w-3/5 group cursor-crosshair">
                <div className="relative aspect-video bg-gray-100 rounded-tr-[4rem] rounded-bl-[4rem] overflow-hidden">
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    src="https://images.stockcake.com/public/4/5/b/45b531cf-e651-471a-988e-8a875cd406d3_large/tactical-rope-challenge-stockcake.jpg" 
                    alt="Story 1" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6">
                    <Crosshair className="text-white/40" />
                  </div>
                </div>
                <div className="mt-6 flex justify-between items-end">
                  <p className="text-[10px] font-black tracking-widest uppercase opacity-40">REWARD TRACKS: FREE · PREMIUM · PREMIUM+</p>
                  <div className="w-8 h-8 border border-kpr-ink/10 rounded-full flex items-center justify-center text-[10px] font-bold">
                    +
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-2/5">
                <p className="text-sm md:text-base leading-relaxed text-kpr-ink/80 font-medium mb-8">
                  Season ends on June 22, 2026. Prepare for the final extraction.
                </p>
                <div className="grid grid-cols-4 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-black">62</p>
                    <p className="text-[8px] font-bold opacity-40 uppercase">Days</p>
                  </div>
                  <div>
                    <p className="text-2xl font-black">08</p>
                    <p className="text-[8px] font-bold opacity-40 uppercase">Hours</p>
                  </div>
                  <div>
                    <p className="text-2xl font-black">42</p>
                    <p className="text-[8px] font-bold opacity-40 uppercase">Mins</p>
                  </div>
                  <div>
                    <p className="text-2xl font-black">17</p>
                    <p className="text-[8px] font-bold opacity-40 uppercase">Secs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-16">
            <div className="relative w-full aspect-[4/5] bg-gray-100 rounded-tr-[8rem] rounded-bl-[8rem] overflow-hidden group">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                src="https://images.stockcake.com/public/b/7/5/b75c1639-318c-4fad-b5e7-8a65f68bc36c_large/tactical-gear-display-stockcake.jpg" 
                alt="Story 2" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-8 right-8 text-white text-right font-mono text-[9px] opacity-60">
                <p>DATA_STREAM_ACTIVE</p>
                <p>ENCRYPTION_LEVEL: 4</p>
              </div>
            </div>
            
            <div className="w-3/4 aspect-square bg-gray-100 rounded-tr-[4rem] rounded-bl-[4rem] overflow-hidden self-end relative group">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                src="https://images.stockcake.com/public/c/7/8/c78390eb-f05a-4b40-a48a-af3d1f518f5e_large/tactical-gear-setup-stockcake.jpg" 
                alt="Story 3" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 backdrop-blur-sm">
                <Crosshair className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const KeeperSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center p-6 md:p-12 overflow-hidden bg-black text-white">
      <div className="absolute inset-0 z-0 opacity-50">
        <motion.img 
          initial={{ scale: 1.2 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src="https://images.stockcake.com/public/3/a/3/3a3f2b5c-d80d-4d0f-9ee2-9294918646b4_large/futuristic-tactical-vest-stockcake.jpg" 
          alt="Keeper BG" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative z-10 max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[10px] font-mono text-white/40 mb-8 block tracking-[0.4em]">MILESTONE_REWARDS // TRACK: 002</span>
            <h2 className="kpr-heading text-5xl md:text-[8vw] mb-12 leading-[0.85]">
            TIER 25, 50, 75, 100:<br/>
            <span className="text-white/40">ELITE MILESTONES.</span>
          </h2>
          <div className="flex justify-center">
            <Crosshair className="text-white/60 scale-150" />
          </div>
        </motion.div>
      </div>

      <div className="absolute top-12 left-12 font-mono text-[9px] text-white/40 space-y-1">
        <p>// SCANNING_ENVIRONMENT</p>
        <p>THREAT_LEVEL: MINIMAL</p>
        <p>POWER_LEVEL: 98.4%</p>
        <p>SYNC_STATUS: OPTIMAL</p>
      </div>

      <div className="absolute bottom-12 right-12 text-right font-mono text-[9px] text-white/40">
        <p>// INITIALIZING KEEPER STORY</p>
        <p>LOADING... [89%]</p>
        <p>LOCATION_DATA: 34.0522° N, 118.2437° W</p>
      </div>
    </section>
  );
};

export const PowerSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-end p-6 md:p-12 overflow-hidden bg-black text-white">
      <div className="absolute inset-0 z-0 opacity-40">
        <img 
          src="https://images.stockcake.com/public/f/9/5/f95f705a-1bcb-4c70-8b2c-dd21a5bc2664_large/dawn-tactical-mission-stockcake.jpg" 
          alt="Power BG" 
          className="w-full h-full object-cover grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-black via-black/40 to-transparent"></div>
      </div>
      
      <div className="relative z-10 max-w-3xl text-right">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[10px] font-mono text-white/40 mb-8 block tracking-[0.4em]">UPGRADE_MANDATORY // 003</span>
          <h2 className="kpr-heading text-5xl md:text-[7vw] leading-[0.85] mb-12">
            UNLEASH THE FULL POTENTIAL.
          </h2>
          <div className="flex justify-end gap-12">
            <div className="flex flex-col items-end gap-2">
              <span className="text-[10px] font-black tracking-widest uppercase opacity-40">800 GEMS</span>
              <span className="text-xl font-black tracking-widest uppercase">UPGRADE TO PREMIUM+</span>
            </div>
            <div className="flex flex-col items-end gap-2">
              <span className="text-[10px] font-black tracking-widest uppercase opacity-40">INSTANT ACCESS</span>
              <span className="text-xl font-black tracking-widest uppercase">SKIP TIERS</span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute left-12 bottom-12 flex items-center gap-6">
        <div className="w-12 h-12 border border-white/20 flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
        </div>
        <span className="text-[10px] font-black tracking-[0.4em] uppercase opacity-40">KEEPERS_PROTOCOL_ACTIVE</span>
      </div>
    </section>
  );
};

export const CollectiblesSection = () => {
  const [selectedReward, setSelectedReward] = useState<any>(null);
  const [showCelebration, setShowCelebration] = useState(false);

  const rewards = [
    { tier: "01", name: "Banner", type: "Cosmetic", state: "Claimed", track: "Free", img: "https://images.stockcake.com/public/e/7/4/e74d0134-d012-40d8-b67e-4ddabbc75d73_large/tactical-gear-display-stockcake.jpg", rarity: "Common" },
    { tier: "05", name: "Spray", type: "Cosmetic", state: "Claimed", track: "Premium", img: "https://images.stockcake.com/public/d/d/6/dd6e7756-e769-4995-95c4-7eeb98bf87bf_large/tactical-soldier-sprite-stockcake.jpg", rarity: "Uncommon" },
    { tier: "10", name: "XP Boost", type: "XP Boost", state: "Unlocked", track: "Free", img: "https://images.stockcake.com/public/2/9/e/29ea1ca4-3132-4d2a-9138-8a8bbf46e80b_large/tactical-data-command-stockcake.jpg", rarity: "Rare" },
    { tier: "15", name: "Weapon Skin", type: "Cosmetic", state: "Unlocked", track: "Premium", img: "https://images.stockcake.com/public/1/6/c/16cd7957-770a-41e8-aea6-fb28e9673828_large/armed-tactical-officer-stockcake.jpg", rarity: "Epic" },
    { tier: "25", name: "Charm", type: "Cosmetic", state: "Locked", track: "Premium", img: "https://images.stockcake.com/public/4/5/b/45b531cf-e651-471a-988e-8a875cd406d3_large/tactical-rope-challenge-stockcake.jpg", rarity: "Rare" },
    { tier: "50", name: "Badge", type: "Currency", state: "Locked", track: "Free", img: "https://images.stockcake.com/public/b/7/5/b75c1639-318c-4fad-b5e7-8a65f68bc36c_large/tactical-gear-display-stockcake.jpg", rarity: "Common" },
    { tier: "75", name: "Avatar Frame", type: "Cosmetic", state: "Premium Locked", track: "Premium+", img: "https://images.stockcake.com/public/3/a/3/3a3f2b5c-d80d-4d0f-9ee2-9294918646b4_large/futuristic-tactical-vest-stockcake.jpg", rarity: "Legendary" },
    { tier: "100", name: "Animated Skin", type: "Cosmetic", state: "Premium Locked", track: "Premium+", img: "https://images.stockcake.com/public/2/3/7/237ac533-c9dc-4212-b802-078a22e02991_large/tactical-gear-display-stockcake.jpg", rarity: "Mythic" },
  ];

  const handleClaim = (e: React.MouseEvent, reward: any) => {
    e.stopPropagation();
    setShowCelebration(true);
    setTimeout(() => setShowCelebration(false), 3000);
  };

  return (
    <section className="py-32 bg-[#1a1a1a] text-white overflow-hidden relative">
      <AnimatePresence>
        {showCelebration && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md"
          >
            <motion.div 
              initial={{ scale: 0.5, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              className="text-center"
            >
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-32 h-32 border-4 border-yellow-500 border-t-transparent rounded-full mx-auto mb-8"
              />
              <h2 className="kpr-heading text-6xl mb-4">REWARD CLAIMED</h2>
              <p className="text-yellow-500 font-black tracking-[0.5em] uppercase">Tier Unlocked</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedReward && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] flex items-center justify-center p-6 bg-black/90 backdrop-blur-2xl"
            onClick={() => setSelectedReward(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              onClick={e => e.stopPropagation()}
            >
              <div className="relative aspect-[3/4] rounded-tr-[5rem] rounded-bl-[5rem] overflow-hidden border border-white/20">
                <motion.img 
                  animate={{ 
                    scale: [1, 1.05, 1],
                    rotateY: [0, 5, 0, -5, 0]
                  }}
                  transition={{ duration: 6, repeat: Infinity }}
                  src={selectedReward.img} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              </div>
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-mono text-white/40 tracking-[0.4em]">ITEM_PREVIEW // {selectedReward.rarity?.toUpperCase() || 'COMMON'}</span>
                  <div className="flex-1 h-[1px] bg-white/10"></div>
                </div>
                <h2 className="kpr-heading text-7xl leading-none">{selectedReward.name}</h2>
                <div className="flex gap-4">
                  <span className={`px-4 py-1 rounded-sm text-[10px] font-black tracking-widest uppercase ${
                    selectedReward.rarity === 'Mythic' ? 'bg-purple-600' : 
                    selectedReward.rarity === 'Legendary' ? 'bg-orange-500' : 
                    selectedReward.rarity === 'Epic' ? 'bg-pink-600' : 'bg-blue-600'
                  }`}>
                    {selectedReward.rarity || 'Common'}
                  </span>
                  <span className="border border-white/20 px-4 py-1 rounded-sm text-[10px] font-black tracking-widest uppercase opacity-60">
                    {selectedReward.type}
                  </span>
                </div>
                <p className="text-white/60 leading-relaxed">
                  A highly classified experimental asset recovered from the extraction zone. 
                  Equip this to show your elite status in the field.
                </p>
                <div className="flex gap-4 pt-8">
                  <button 
                    onClick={(e) => { handleClaim(e, selectedReward); setSelectedReward(null); }}
                    className="flex-1 bg-white text-black py-4 rounded-tr-xl rounded-bl-xl text-[10px] font-black tracking-widest uppercase hover:scale-105 transition-all"
                  >
                    Equip Now
                  </button>
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

      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-end">
          <div>
            <span className="text-[10px] font-mono text-white/40 mb-8 block tracking-[0.4em]">REWARD_TRACK // 100 TIERS + 50 BONUS</span>
            <h2 className="kpr-heading text-6xl md:text-[8vw] leading-[0.85]">
              FREE · PREMIUM<br/>
              <span className="text-white/20">PREMIUM+</span>
            </h2>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-white/20"></div>
              <span className="text-[10px] font-black tracking-[0.3em] uppercase opacity-60">TRACK_SELECTION</span>
            </div>
            <div className="flex gap-6 text-[10px] font-black tracking-widest uppercase">
              <button className="border-b-2 border-white pb-2">All Tracks</button>
              <button className="opacity-40 hover:opacity-100 transition-opacity pb-2">Free Only</button>
              <button className="opacity-40 hover:opacity-100 transition-opacity pb-2">Premium Only</button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-8 px-6 md:px-12 overflow-x-auto no-scrollbar pb-12 cursor-grab active:cursor-grabbing">
        {rewards.map((reward, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -20, scale: 1.02 }}
            onClick={() => setSelectedReward(reward)}
            className="min-w-[300px] md:min-w-[400px] aspect-[3/4] bg-white/5 rounded-tr-[5rem] rounded-bl-[5rem] overflow-hidden border border-white/10 backdrop-blur-xl relative group cursor-pointer"
          >
            <img 
              src={reward.img} 
              alt={reward.name} 
              className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-8 left-8 flex flex-col gap-2">
              <div className="w-12 h-12 border border-white/20 flex items-center justify-center text-xs font-black bg-black/40 backdrop-blur-md">
                TIER {reward.tier}
              </div>
              <span className={`text-[8px] font-black tracking-widest uppercase px-2 py-1 ${reward.track === 'Free' ? 'bg-white text-black' : reward.track === 'Premium' ? 'bg-yellow-500 text-black' : 'bg-purple-600 text-white'}`}>
                {reward.track}
              </span>
            </div>
            <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
              <div className="font-mono text-[9px]">
                <p className="text-white text-lg font-black tracking-widest uppercase mb-1">{reward.name}</p>
                <p className="opacity-60 uppercase">{reward.type}</p>
              </div>
              <button 
                onClick={(e) => reward.state === 'Unlocked' ? handleClaim(e, reward) : null}
                className={`px-4 py-2 rounded-full text-[8px] font-black tracking-widest uppercase border transition-all ${reward.state === 'Unlocked' ? 'bg-white text-black border-white hover:scale-110' : reward.state === 'Claimed' ? 'bg-green-500/20 text-green-500 border-green-500/40' : 'border-white/20 text-white/60'}`}
              >
                {reward.state === 'Unlocked' ? 'Claim Reward' : reward.state}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export const CrystalSection = () => {
  const [activeTab, setActiveTab] = useState('weekly');
  const [xpPopup, setXpPopup] = useState<string | null>(null);

  const handleClaimMission = (reward: string) => {
    setXpPopup(reward);
    setTimeout(() => setXpPopup(null), 2000);
  };

  return (
    <section id="missions" className="min-h-screen bg-white py-32 px-6 md:px-12 border-t border-kpr-ink/10 overflow-hidden text-kpr-ink relative">
      <AnimatePresence>
        {xpPopup && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: -50 }}
            exit={{ opacity: 0 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 z-[100] pointer-events-none"
          >
            <span className="text-4xl font-black text-kpr-ink tracking-widest">{xpPopup}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-24 items-center">
          <div className="lg:w-1/2 relative">
            <h2 className="kpr-heading glitch-hover text-[25vw] leading-none select-none opacity-5 absolute -top-24 -left-12">OPS</h2>
            <div className="relative z-10 w-full aspect-square bg-gray-100 rounded-tr-[10rem] rounded-bl-[10rem] overflow-hidden group">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                src="https://images.stockcake.com/public/2/9/e/29ea1ca4-3132-4d2a-9138-8a8bbf46e80b_large/tactical-data-command-stockcake.jpg" 
                alt="Missions Briefing" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-12 left-12">
                <Crosshair className="text-kpr-ink/20" />
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 flex flex-col gap-12">
            <div>
              <span className="text-[10px] font-mono text-kpr-ink/40 mb-4 block tracking-[0.4em]">MISSION_CONTROL // 004</span>
              <h2 className="kpr-heading text-6xl md:text-[8vw] leading-[0.85] mb-8">
                {activeTab === 'daily' ? 'DAILY' : 'WEEKLY'}<br/>
                <span className="text-kpr-ink/20">BRIEFING.</span>
              </h2>
              <div className="flex gap-12 mb-8">
                <button 
                  onClick={() => setActiveTab('daily')}
                  className={`text-[10px] font-black tracking-[0.3em] uppercase transition-all ${activeTab === 'daily' ? 'border-b-2 border-kpr-ink pb-2' : 'opacity-40'}`}
                >
                  Daily
                </button>
                <button 
                  onClick={() => setActiveTab('weekly')}
                  className={`text-[10px] font-black tracking-[0.3em] uppercase transition-all ${activeTab === 'weekly' ? 'border-b-2 border-kpr-ink pb-2' : 'opacity-40'}`}
                >
                  Weekly
                </button>
              </div>
              <div className="flex gap-8 text-[10px] font-black tracking-widest uppercase">
                <div className="flex flex-col gap-1">
                  <span className="opacity-40">Reset Timer</span>
                  <span>{activeTab === 'daily' ? 'Resets in 08:42:17' : 'Resets in 4d 12h'}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="opacity-40">Rerolls</span>
                  <span>2 rerolls left</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {(activeTab === 'daily' ? [
                { title: "Deal 500 Damage", progress: "500/500", reward: "+500 XP", action: "Claim", percent: 100 },
                { title: "Get 3 Headshot Kills", progress: "2/3", reward: "+300 XP", action: "Reroll", percent: 66 },
                { title: "Survive 10 Minutes", progress: "3/10", reward: "+400 XP", action: "Reroll", percent: 30 }
              ] : [
                { title: "Win 5 Extraction Matches", progress: "2/5", reward: "+2500 XP", action: "Reroll", percent: 40 },
                { title: "Eliminate 50 Hostiles", progress: "50/50", reward: "+3000 XP", action: "Claim", percent: 100 },
                { title: "Travel 5000m in Zone", progress: "1200/5000", reward: "+1500 XP", action: "Reroll", percent: 24 }
              ]).map((m, i) => (
                <div key={i} className="p-6 border border-kpr-ink/10 rounded-tr-2xl rounded-bl-2xl flex flex-col gap-4 group hover:bg-kpr-ink hover:text-white transition-all">
                  <div className="flex justify-between items-center">
                    <div className="space-y-2">
                      <p className="text-xs font-black tracking-widest uppercase">{m.title}</p>
                      <div className="flex gap-4 text-[9px] font-bold opacity-60 uppercase">
                        <span>{m.progress}</span>
                        <span>{m.reward}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {m.action === 'Reroll' && (
                        <button className="p-2 border border-kpr-ink/10 group-hover:border-white/20 rounded-full hover:bg-white hover:text-black transition-all">
                          <motion.div whileTap={{ rotate: 180 }} transition={{ duration: 0.3 }}>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 21h5v-5"/></svg>
                          </motion.div>
                        </button>
                      )}
                      <button 
                        onClick={() => m.action === 'Claim' ? handleClaimMission(m.reward) : null}
                        className={`px-6 py-2 rounded-full text-[9px] font-black tracking-widest uppercase border transition-all ${m.action === 'Claim' ? 'bg-kpr-ink text-white border-kpr-ink group-hover:bg-white group-hover:text-black' : 'border-kpr-ink/20 group-hover:border-white/40'}`}
                      >
                        {m.action}
                      </button>
                    </div>
                  </div>
                  <div className="h-1 bg-kpr-ink/10 group-hover:bg-white/20 w-full overflow-hidden rounded-full">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${m.percent}%` }}
                      className={`h-full ${m.action === 'Claim' ? 'bg-green-500' : 'bg-kpr-ink group-hover:bg-white'}`}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const WorldSection = ({ title, subtitle, image, id, number }: { title: string, subtitle: string, image: string, id: string, number: string }) => {
  return (
    <section id={id} className="relative h-screen flex flex-col items-center justify-center p-6 md:p-12 overflow-hidden text-white text-center bg-black">
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src={image} 
          alt={title} 
          className="w-full h-full object-cover opacity-60 grayscale-[0.2]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-8 h-[1px] bg-white/40"></div>
            <span className="text-[10px] font-mono text-white/60 uppercase tracking-[0.4em]">{number} // {id.replace('-', ' ')}</span>
            <div className="w-8 h-[1px] bg-white/40"></div>
          </div>
          <h2 className="kpr-heading text-6xl md:text-[10vw] mb-12 leading-[0.85]">{title}</h2>
          <p className="text-sm md:text-lg font-medium mb-12 max-w-2xl mx-auto leading-relaxed opacity-80">
            {subtitle}
          </p>
          <button className="bg-white text-black px-12 py-4 rounded-tr-2xl rounded-bl-2xl text-[10px] font-black tracking-[0.3em] hover:scale-105 transition-all">
            EXPLORE
          </button>
        </motion.div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6">
        <div className="w-[1px] h-16 bg-white/20"></div>
        <Crosshair className="text-white/40" />
      </div>

      {/* Technical Sidebars */}
      <div className="absolute left-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-8 text-[9px] font-mono text-white/20 uppercase tracking-widest [writing-mode:vertical-rl] rotate-180">
        <p>ENVIRONMENT_SCAN: COMPLETE</p>
        <p>BIOME_TYPE: {id.toUpperCase()}</p>
      </div>
    </section>
  );
};

export const FinalSection = () => {
  return (
    <section id="shop" className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden py-24">
      <div className="absolute inset-0 z-0 opacity-40">
        <img 
          src="https://images.stockcake.com/public/4/a/8/4a828369-414e-417e-90aa-f8683c172f5c_large/tactical-warrior-standing-stockcake.jpg" 
          alt="Final BG" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl px-6">
        <div className="text-center mb-24">
          <span className="text-[10px] font-mono text-white/40 mb-8 block tracking-[0.4em]">UPGRADE_PLANS // SEASON_01</span>
          <h2 className="kpr-heading text-6xl md:text-[8vw] mb-12">
            CHOOSE YOUR PATH.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Battle Pass — Free", price: "Free", btn: "Current Plan", features: ["100 free tier rewards", "Daily and weekly missions"], missing: ["Premium track", "XP boosts", "Premium+ rewards"] },
            { name: "Battle Pass — Premium", price: "₹499", btn: "Upgrade Now", badge: "Most Popular", features: ["100 premium tier rewards", "Instant Tier 1–5 XP boost", "Exclusive weapon skins", "Premium avatar frames"] },
            { name: "Battle Pass — Premium+", price: "₹999", btn: "Unlock Elite", badge: "Elite", features: ["All premium rewards", "50 bonus tiers", "Instant Tier 1–25 XP boost", "Exclusive animated skin", "Season title and nameplate"] }
          ].map((plan, i) => (
            <div key={i} className={`p-8 border ${plan.badge ? 'border-white bg-white/5' : 'border-white/10'} rounded-tr-[4rem] rounded-bl-[4rem] flex flex-col gap-8 relative group hover:scale-105 transition-all`}>
              {plan.badge && <span className="absolute -top-4 left-12 bg-white text-black px-4 py-1 text-[8px] font-black tracking-widest uppercase">{plan.badge}</span>}
              <div>
                <h3 className="text-xl font-black tracking-widest uppercase mb-2">{plan.name}</h3>
                <p className="text-3xl font-black">{plan.price}</p>
              </div>
              <div className="space-y-4 flex-1">
                <div className="space-y-2">
                  {plan.features.map((f, j) => (
                    <div key={j} className="flex items-center gap-2 text-[10px] font-bold opacity-80 uppercase">
                      <span className="text-green-500">✓</span> {f}
                    </div>
                  ))}
                </div>
                {plan.missing && (
                  <div className="space-y-2 opacity-30">
                    {plan.missing.map((m, j) => (
                      <div key={j} className="flex items-center gap-2 text-[10px] font-bold uppercase">
                        <span className="text-red-500">✕</span> {m}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <button className={`w-full py-4 rounded-tr-2xl rounded-bl-2xl text-[10px] font-black tracking-[0.3em] uppercase transition-all ${plan.btn === 'Upgrade Now' || plan.btn === 'Unlock Elite' ? 'bg-white text-black hover:bg-white/90' : 'border border-white/20 opacity-60'}`}>
                {plan.btn}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-24 p-12 border border-white/10 rounded-tr-[4rem] rounded-bl-[4rem] bg-white/5 backdrop-blur-xl flex flex-col md:flex-row gap-12 items-center justify-between">
          <div className="space-y-4">
            <h3 className="text-2xl font-black tracking-widest uppercase">Skip Tiers</h3>
            <p className="text-[10px] font-bold opacity-40 uppercase tracking-widest">150 Gems per tier</p>
            <div className="flex items-center gap-6">
              <button className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all">-</button>
              <span className="text-2xl font-black">5</span>
              <button className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all">+</button>
            </div>
          </div>
          <div className="text-right space-y-4">
            <p className="text-3xl font-black">Total: 750 Gems</p>
            <p className="text-[10px] font-bold text-yellow-500 uppercase tracking-widest">You have 800 Gems · 50 Gems remaining after purchase</p>
            <div className="flex gap-4 justify-end">
              <button className="text-[10px] font-black tracking-widest uppercase opacity-40 hover:opacity-100 transition-opacity">Visit the Shop</button>
              <button className="bg-white text-black px-12 py-4 rounded-tr-2xl rounded-bl-2xl text-[10px] font-black tracking-[0.3em] uppercase hover:scale-105 transition-all">Confirm Skip</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-black text-white pt-32 pb-12 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-32">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-[1px] bg-white/40"></div>
              <p className="text-[10px] font-black tracking-[0.4em] uppercase text-white/40">LILA BLACK</p>
            </div>
            <div className="space-y-2 text-[10px] font-mono text-white/40 uppercase">
              <p>Season 01</p>
              <p>Operation Blackout</p>
              <p>2026</p>
            </div>
            <div className="mt-8">
              <span className="px-4 py-2 border border-white/20 rounded-tr-lg rounded-bl-lg text-[9px] font-black tracking-[0.3em]">ELITE_ACCESS</span>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <p className="text-[10px] font-black tracking-[0.4em] uppercase text-white/40">QUICK LINKS</p>
            <div className="flex flex-col gap-4 text-xs font-black tracking-[0.3em] uppercase">
              <a href="#" className="hover:text-white/60 transition-colors flex items-center gap-2 group">
                <span className="w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                BATTLE PASS
              </a>
              <a href="#missions" className="hover:text-white/60 transition-colors flex items-center gap-2 group">
                <span className="w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                MISSIONS
              </a>
              <a href="#shop" className="hover:text-white/60 transition-colors flex items-center gap-2 group">
                <span className="w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                SHOP
              </a>
              <a href="#" className="hover:text-white/60 transition-colors flex items-center gap-2 group">
                <span className="w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                SUPPORT
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <p className="text-[10px] font-black tracking-[0.4em] uppercase text-white/40">SOCIAL</p>
            <div className="flex flex-col gap-4 text-xs font-black tracking-[0.3em] uppercase">
              <a href="#" className="hover:text-white/60 transition-colors flex items-center gap-2 group">
                <span className="w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                X
              </a>
              <a href="#" className="hover:text-white/60 transition-colors flex items-center gap-2 group">
                <span className="w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                DISCORD
              </a>
              <a href="#" className="hover:text-white/60 transition-colors flex items-center gap-2 group">
                <span className="w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                YOUTUBE
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <p className="text-[10px] font-black tracking-[0.4em] uppercase text-white/40">CONTACT</p>
            <a href="mailto:SUPPORT@LILAGAMES.COM" className="text-sm font-black tracking-[0.2em] uppercase hover:text-white/60 transition-colors">SUPPORT@LILAGAMES.COM</a>
            
            <button className="mt-4 flex items-center justify-between w-full border border-white/10 rounded-tr-2xl rounded-bl-2xl p-6 text-[10px] font-black tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all group relative overflow-hidden">
              <span className="relative z-10">DOWNLOAD PRESS KIT</span>
              <motion.span 
                animate={{ y: [0, 5, 0] }} 
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="relative z-10"
              >
                ↓
              </motion.span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden mb-24 py-12">
          <h1 className="kpr-heading glitch-hover text-[35vw] leading-none text-white/[0.02] select-none text-center uppercase">LILA</h1>
          <div className="absolute inset-0 flex items-center justify-center">
             <h1 className="kpr-heading glitch-hover text-[28vw] leading-none text-white tracking-[-0.05em] uppercase">LILA</h1>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/5 pt-12 text-[9px] font-black tracking-[0.4em] uppercase text-white/30">
          <div className="flex gap-12">
            <a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a>
            <a href="#" className="hover:text-white transition-colors">TERMS OF SERVICE</a>
            <a href="#" className="hover:text-white transition-colors">LEGAL LICENSE</a>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-1.5 h-1.5 bg-white/20 rounded-full"></div>
            <p>© 2026 LILA GAMES. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
