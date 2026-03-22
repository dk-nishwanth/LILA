import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, Lock, Check } from "lucide-react";
import { Crosshair } from "../components/KPRComponents";

type RewardState = "locked" | "unlocked" | "claimed" | "premium-locked";

type Reward = {
  tier: number;
  name: string;
  type: string;
  state: RewardState;
  track: "free" | "premium" | "premium+";
  image: string;
  rarity: "Common" | "Uncommon" | "Rare" | "Epic" | "Legendary" | "Mythic";
};

const RARITY_COLOR: Record<string, string> = {
  Mythic: "bg-purple-600",
  Legendary: "bg-orange-500",
  Epic: "bg-pink-600",
  Rare: "bg-blue-600",
  Uncommon: "bg-teal-600",
  Common: "bg-white/20",
};

const REWARDS: Reward[] = [
  { tier: 1, name: "Vanguard Banner", type: "Cosmetic", state: "claimed", track: "free", image: "https://images.stockcake.com/public/e/7/4/e74d0134-d012-40d8-b67e-4ddabbc75d73_large/tactical-gear-display-stockcake.jpg", rarity: "Common" },
  { tier: 5, name: "Shadow Spray", type: "Cosmetic", state: "unlocked", track: "premium", image: "https://images.stockcake.com/public/d/d/6/dd6e7756-e769-4995-95c4-7eeb98bf87bf_large/tactical-soldier-sprite-stockcake.jpg", rarity: "Uncommon" },
  { tier: 10, name: "XP Boost", type: "XP Boost", state: "unlocked", track: "free", image: "https://images.stockcake.com/public/2/9/e/29ea1ca4-3132-4d2a-9138-8a8bbf46e80b_large/tactical-data-command-stockcake.jpg", rarity: "Rare" },
  { tier: 15, name: "Elite Weapon Skin", type: "Cosmetic", state: "locked", track: "free", image: "https://images.stockcake.com/public/1/6/c/16cd7957-770a-41e8-aea6-fb28e9673828_large/armed-tactical-officer-stockcake.jpg", rarity: "Epic" },
  { tier: 25, name: "Mythic Charm", type: "Cosmetic", state: "premium-locked", track: "premium+", image: "https://images.stockcake.com/public/4/5/b/45b531cf-e651-471a-988e-8a875cd406d3_large/tactical-rope-challenge-stockcake.jpg", rarity: "Legendary" },
  { tier: 50, name: "Ghost Badge", type: "Currency", state: "locked", track: "free", image: "https://images.stockcake.com/public/b/7/5/b75c1639-318c-4fad-b5e7-8a65f68bc36c_large/tactical-gear-display-stockcake.jpg", rarity: "Common" },
  { tier: 75, name: "Avatar Frame", type: "Cosmetic", state: "premium-locked", track: "premium+", image: "https://images.stockcake.com/public/3/a/3/3a3f2b5c-d80d-4d0f-9ee2-9294918646b4_large/futuristic-tactical-vest-stockcake.jpg", rarity: "Legendary" },
  { tier: 100, name: "Animated Skin", type: "Cosmetic", state: "premium-locked", track: "premium+", image: "https://images.stockcake.com/public/2/3/7/237ac533-c9dc-4212-b802-078a22e02991_large/tactical-gear-display-stockcake.jpg", rarity: "Mythic" },
];

export const RewardsPage = ({ onBack }: { onBack: () => void }) => {
  const [rewards, setRewards] = useState<Reward[]>(REWARDS);
  const [selected, setSelected] = useState<Reward | null>(null);
  const [showCelebration, setShowCelebration] = useState(false);
  const [trackFilter, setTrackFilter] = useState<"all" | "free" | "premium" | "premium+">("all");

  const handleClaim = (tier: number) => {
    setRewards((prev) =>
      prev.map((r) => (r.tier === tier ? { ...r, state: "claimed" } : r))
    );
    setSelected(null);
    setShowCelebration(true);
    setTimeout(() => setShowCelebration(false), 3000);
  };

  const filtered = rewards.filter(
    (r) => trackFilter === "all" || r.track === trackFilter
  );

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header */}
      <div className="relative h-[40vh] flex flex-col justify-end p-6 md:p-12 overflow-hidden bg-black">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src="https://images.stockcake.com/public/3/a/3/3a3f2b5c-d80d-4d0f-9ee2-9294918646b4_large/futuristic-tactical-vest-stockcake.jpg"
            alt="Rewards"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-[10px] font-black tracking-widest uppercase opacity-40 hover:opacity-100 mb-8 transition-all"
          >
            <ArrowLeft size={14} /> Back to Base
          </button>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-white/40" />
            <span className="text-[10px] font-black tracking-[0.4em] text-white/60 uppercase">
              Season 01 · Operation Blackout
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="text-[10px] font-mono text-white/40 mb-2 block tracking-[0.4em]">
                REWARD_TRACK // SEASON_01
              </span>
              <h1 className="kpr-heading text-6xl md:text-[8vw] leading-[0.85]">
                BATTLE PASS.
              </h1>
            </div>
            <div className="flex flex-col items-end gap-3">
              <div className="flex items-center gap-4">
                <div className="h-1 w-48 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-white w-[38%]" />
                </div>
                <span className="text-[10px] font-black tracking-widest opacity-60">
                  Tier 38 / 100
                </span>
              </div>
              <div className="flex gap-6 text-[10px] font-black tracking-widest uppercase border-b border-white/10">
                {(["all", "free", "premium", "premium+"] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setTrackFilter(t)}
                    className={`pb-3 transition-all ${
                      trackFilter === t ? "border-b-2 border-white" : "opacity-40"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-32 right-12 hidden lg:flex flex-col items-end gap-2 text-white/20 font-mono text-[9px]">
          <p>TIERS_UNLOCKED: 38</p>
          <p>REWARDS_CLAIMED: 1</p>
          <p>TRACK: FREE · PREMIUM</p>
        </div>
      </div>

      {/* Celebration Overlay */}
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
              <p className="text-yellow-500 font-black tracking-[0.5em] uppercase">
                Tier Unlocked
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Reward Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((reward) => (
            <motion.div
              key={reward.tier}
              whileHover={{ y: -10 }}
              onClick={() => setSelected(reward)}
              className={`relative aspect-[3/4] bg-white/5 border rounded-tr-[3rem] rounded-bl-[3rem] overflow-hidden cursor-pointer group transition-all ${
                reward.state === "premium-locked"
                  ? "border-purple-500/20"
                  : reward.state === "locked"
                  ? "border-white/5 opacity-60"
                  : "border-white/10"
              }`}
            >
              <img
                src={reward.image}
                className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

              <div className="absolute top-6 left-6 flex flex-col gap-2">
                <div className="w-10 h-10 bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-[10px] font-black">
                  {reward.tier}
                </div>
                {reward.state === "premium-locked" && (
                  <Lock size={12} className="text-purple-500" />
                )}
                {reward.state === "claimed" && (
                  <Check size={12} className="text-green-500" />
                )}
              </div>

              <div className="absolute top-6 right-6">
                <span
                  className={`text-[8px] font-black tracking-widest uppercase px-2 py-1 ${
                    reward.track === "free"
                      ? "bg-white text-black"
                      : reward.track === "premium"
                      ? "bg-yellow-500 text-black"
                      : "bg-purple-600 text-white"
                  }`}
                >
                  {reward.track}
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-[8px] font-black tracking-[0.3em] uppercase opacity-40 mb-1">
                  {reward.type}
                </p>
                <h3 className="text-sm font-black tracking-widest uppercase">
                  {reward.name}
                </h3>
              </div>

              {reward.state === "claimed" && (
                <div className="absolute inset-0 bg-green-500/10 flex items-center justify-center pointer-events-none">
                  <div className="bg-green-500 text-black px-4 py-1 text-[8px] font-black tracking-widest uppercase rounded-full">
                    Claimed
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-24 opacity-20">
          <Crosshair className="text-white scale-150" />
        </div>
      </div>

      {/* Reward Preview Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/95 backdrop-blur-xl"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-square rounded-tr-[5rem] rounded-bl-[5rem] overflow-hidden border border-white/10">
                <motion.img
                  animate={{ rotateY: [0, 10, 0, -10, 0], scale: [1, 1.02, 1] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  src={selected.image}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              </div>

              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-mono text-white/40 tracking-[0.4em]">
                    ITEM_PREVIEW // {selected.rarity.toUpperCase()}
                  </span>
                  <div className="flex-1 h-[1px] bg-white/10" />
                </div>

                <div>
                  <h2 className="text-6xl font-black tracking-tighter uppercase mb-4">
                    {selected.name}
                  </h2>
                  <div className="flex gap-4">
                    <span
                      className={`px-4 py-1 text-[10px] font-black tracking-widest uppercase rounded-sm ${RARITY_COLOR[selected.rarity]}`}
                    >
                      {selected.rarity}
                    </span>
                    <span className="border border-white/20 px-4 py-1 text-[10px] font-black tracking-widest uppercase opacity-60 rounded-sm">
                      {selected.type}
                    </span>
                  </div>
                </div>

                <p className="text-white/60 leading-relaxed max-w-md">
                  Classified tactical asset. Recovered from Sector 7G. This item
                  represents the pinnacle of field equipment.
                </p>

                <div className="flex gap-4 pt-8">
                  {selected.state === "unlocked" ? (
                    <button
                      onClick={() => handleClaim(selected.tier)}
                      className="flex-1 bg-white text-black py-4 rounded-tr-xl rounded-bl-xl text-[10px] font-black tracking-widest uppercase hover:scale-105 transition-all"
                    >
                      Claim Reward
                    </button>
                  ) : selected.state === "claimed" ? (
                    <button className="flex-1 border border-green-500 text-green-500 py-4 rounded-tr-xl rounded-bl-xl text-[10px] font-black tracking-widest uppercase cursor-default">
                      Already Claimed
                    </button>
                  ) : (
                    <button className="flex-1 bg-white/10 text-white/40 py-4 rounded-tr-xl rounded-bl-xl text-[10px] font-black tracking-widest uppercase cursor-not-allowed">
                      {selected.state === "premium-locked"
                        ? "Premium Required"
                        : "Locked"}
                    </button>
                  )}
                  <button
                    onClick={() => setSelected(null)}
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
  );
};
