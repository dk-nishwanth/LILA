import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, RotateCcw } from "lucide-react";
import { Crosshair } from "../components/KPRComponents";

type Mission = {
  id: string;
  title: string;
  progress: number;
  total: number;
  reward: string;
  type: "daily" | "weekly";
};

const ProgressBar = ({ progress, total }: { progress: number; total: number }) => {
  const pct = Math.min(100, (progress / total) * 100);
  return (
    <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${pct}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
        className={`h-full ${pct === 100 ? "bg-green-500" : "bg-white"}`}
      />
    </div>
  );
};

const MISSIONS: Mission[] = [
  { id: "d1", title: "Eliminate 10 enemies with SMGs", progress: 4, total: 10, reward: "500 XP", type: "daily" },
  { id: "d2", title: "Survive for 15 minutes in a single match", progress: 15, total: 15, reward: "800 XP", type: "daily" },
  { id: "d3", title: "Revive 3 teammates", progress: 1, total: 3, reward: "400 XP", type: "daily" },
  { id: "w1", title: "Win 5 matches in Season Mode", progress: 2, total: 5, reward: "2500 XP", type: "weekly" },
  { id: "w2", title: "Deal 5000 total damage", progress: 3420, total: 5000, reward: "3000 XP", type: "weekly" },
  { id: "w3", title: "Complete 10 daily missions", progress: 7, total: 10, reward: "5000 XP", type: "weekly" },
];

export const MissionsPage = ({ onBack }: { onBack: () => void }) => {
  const [activeTab, setActiveTab] = useState<"daily" | "weekly">("daily");
  const [missions, setMissions] = useState<Mission[]>(MISSIONS);
  const [xpPopup, setXpPopup] = useState<string | null>(null);

  const handleReroll = (id: string) => {
    setMissions((prev) =>
      prev.map((m) => (m.id === id ? { ...m, progress: 0 } : m))
    );
  };

  const handleClaim = (reward: string) => {
    setXpPopup(reward);
    setTimeout(() => setXpPopup(null), 2000);
  };

  const filtered = missions.filter((m) => m.type === activeTab);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header */}
      <div className="relative h-[40vh] flex flex-col justify-end p-6 md:p-12 overflow-hidden bg-black">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src="https://images.stockcake.com/public/2/9/e/29ea1ca4-3132-4d2a-9138-8a8bbf46e80b_large/tactical-data-command-stockcake.jpg"
            alt="Missions"
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
                MISSION_LOG // VOL_01
              </span>
              <h1 className="kpr-heading text-6xl md:text-[8vw] leading-[0.85]">
                OPERATIONS.
              </h1>
            </div>
            <div className="flex gap-8 border-b border-white/10">
              {(["daily", "weekly"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 text-[10px] font-black tracking-widest uppercase transition-all ${
                    activeTab === tab ? "border-b-2 border-white" : "opacity-40"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Technical overlay */}
        <div className="absolute top-32 right-12 hidden lg:flex flex-col items-end gap-2 text-white/20 font-mono text-[9px]">
          <p>RESET_TIMER: 08:42:17</p>
          <p>REROLLS_LEFT: 2</p>
          <p>ACTIVE_TRACK: SEASON_01</p>
        </div>
      </div>

      {/* XP Popup */}
      <AnimatePresence>
        {xpPopup && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: -50 }}
            exit={{ opacity: 0 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 z-[100] pointer-events-none"
          >
            <span className="text-5xl font-black text-white tracking-widest drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
              {xpPopup}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mission List */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { label: "Completed Today", value: "1/3" },
            { label: "Weekly Progress", value: "1/3" },
            { label: "Total XP Earned", value: "800 XP" },
            { label: "Rerolls Available", value: "2" },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-6 border border-white/10 rounded-tr-2xl rounded-bl-2xl bg-white/5"
            >
              <p className="text-[9px] font-black tracking-widest uppercase opacity-40 mb-2">
                {stat.label}
              </p>
              <p className="text-2xl font-black">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          {filtered.map((mission) => (
            <motion.div
              layout
              key={mission.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-8 bg-white/5 border border-white/10 rounded-tr-[3rem] rounded-bl-[3rem] group hover:bg-white hover:text-black transition-all"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="space-y-1">
                  <h3 className="text-lg font-black tracking-widest uppercase">
                    {mission.title}
                  </h3>
                  <p className="text-[10px] font-bold opacity-40 uppercase tracking-widest">
                    Reward: {mission.reward}
                  </p>
                </div>
                <button
                  onClick={() => handleReroll(mission.id)}
                  className="p-2 border border-white/10 group-hover:border-black/20 rounded-full hover:bg-black hover:text-white group-hover:hover:bg-black group-hover:hover:text-white transition-all"
                  title="Reroll Mission"
                >
                  <RotateCcw size={14} />
                </button>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-[10px] font-black tracking-widest uppercase">
                  <span>Progress</span>
                  <span>
                    {mission.progress} / {mission.total}
                  </span>
                </div>
                <ProgressBar progress={mission.progress} total={mission.total} />
              </div>

              {mission.progress === mission.total && (
                <button
                  onClick={() => handleClaim(mission.reward)}
                  className="w-full mt-6 py-3 bg-white text-black group-hover:bg-black group-hover:text-white text-[10px] font-black tracking-widest uppercase rounded-tr-xl rounded-bl-xl hover:opacity-90 transition-all border border-transparent group-hover:border-black"
                >
                  Claim Rewards
                </button>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom crosshair decoration */}
        <div className="flex justify-center mt-24 opacity-20">
          <Crosshair className="text-white scale-150" />
        </div>
      </div>
    </div>
  );
};
