import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { Crosshair } from "../components/KPRComponents";

const TIER_PRICE = 150;

const PLANS = [
  {
    name: "Battle Pass — Free",
    price: "Free",
    btn: "Current Plan",
    badge: null,
    features: ["100 free tier rewards", "Daily and weekly missions"],
    missing: ["Premium track", "XP boosts", "Premium+ rewards"],
    cost: 0,
  },
  {
    name: "Battle Pass — Premium",
    price: "800 GEMS",
    btn: "Upgrade Now",
    badge: "Most Popular",
    features: [
      "100 premium tier rewards",
      "Instant Tier 1–5 XP boost",
      "Exclusive weapon skins",
      "Premium avatar frames",
    ],
    missing: null,
    cost: 800,
  },
  {
    name: "Battle Pass — Premium+",
    price: "1,800 GEMS",
    btn: "Unlock Elite",
    badge: "Elite",
    features: [
      "All premium rewards",
      "50 bonus tiers",
      "Instant Tier 1–25 XP boost",
      "Exclusive animated skin",
      "Season title and nameplate",
    ],
    missing: null,
    cost: 1800,
  },
];

export const PurchasePage = ({
  onBack,
  onGoToShop,
}: {
  onBack: () => void;
  onGoToShop: () => void;
}) => {
  const [gems, setGems] = useState(800);
  const [tierCount, setTierCount] = useState(5);

  const handlePurchase = (cost: number) => {
    if (cost === 0) return;
    if (gems < cost) {
      onGoToShop();
    } else {
      setGems((prev) => prev - cost);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header */}
      <div className="relative h-[40vh] flex flex-col justify-end p-6 md:p-12 overflow-hidden bg-black">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src="https://images.stockcake.com/public/4/a/8/4a828369-414e-417e-90aa-f8683c172f5c_large/tactical-warrior-standing-stockcake.jpg"
            alt="Upgrade"
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
                UPGRADE_CENTER // SECURE_LINE
              </span>
              <h1 className="kpr-heading text-6xl md:text-[8vw] leading-[0.85]">
                ELITE ACCESS.
              </h1>
            </div>
            <div className="bg-white/5 border border-white/10 px-6 py-4 rounded-tr-xl rounded-bl-xl">
              <p className="text-[8px] font-black tracking-widest uppercase opacity-40 mb-1">
                Your Balance
              </p>
              <p className="text-2xl font-black">{gems} GEMS</p>
            </div>
          </div>
        </div>

        <div className="absolute top-32 right-12 hidden lg:flex flex-col items-end gap-2 text-white/20 font-mono text-[9px]">
          <p>SECURE_CHANNEL: ACTIVE</p>
          <p>ENCRYPTION: LEVEL_4</p>
          <p>TRANSACTION_ID: 7G-ALPHA</p>
        </div>
      </div>

      {/* Plans */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {PLANS.map((plan, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className={`p-10 border rounded-tr-[4rem] rounded-bl-[4rem] flex flex-col gap-8 relative transition-all ${
                plan.badge
                  ? "border-white bg-white/5"
                  : "border-white/10 bg-white/[0.02]"
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-4 left-12 bg-white text-black px-4 py-1 text-[8px] font-black tracking-widest uppercase">
                  {plan.badge}
                </span>
              )}
              <div>
                <h3 className="text-xl font-black tracking-widest uppercase mb-2">
                  {plan.name}
                </h3>
                <p className="text-3xl font-black">{plan.price}</p>
              </div>
              <div className="space-y-4 flex-1">
                <div className="space-y-2">
                  {plan.features.map((f, j) => (
                    <div
                      key={j}
                      className="flex items-center gap-2 text-[10px] font-bold opacity-80 uppercase"
                    >
                      <span className="text-green-500">✓</span> {f}
                    </div>
                  ))}
                </div>
                {plan.missing && (
                  <div className="space-y-2 opacity-30">
                    {plan.missing.map((m, j) => (
                      <div
                        key={j}
                        className="flex items-center gap-2 text-[10px] font-bold uppercase"
                      >
                        <span className="text-red-500">✕</span> {m}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <button
                onClick={() => handlePurchase(plan.cost)}
                className={`w-full py-4 rounded-tr-2xl rounded-bl-2xl text-[10px] font-black tracking-[0.3em] uppercase transition-all ${
                  plan.cost > 0
                    ? "bg-white text-black hover:bg-white/90 hover:scale-105"
                    : "border border-white/20 opacity-60 cursor-default"
                }`}
              >
                {plan.btn}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Tier Skip */}
        <div className="p-10 bg-white/5 border border-white/10 rounded-tr-[4rem] rounded-bl-[4rem] flex flex-col md:flex-row gap-12 items-center justify-between">
          <div className="space-y-4">
            <h3 className="text-2xl font-black tracking-widest uppercase">
              Instant Tier Skip
            </h3>
            <p className="text-[10px] font-bold opacity-40 uppercase tracking-widest">
              {TIER_PRICE} Gems per tier
            </p>
            <div className="flex items-center gap-6">
              <button
                onClick={() => setTierCount(Math.max(1, tierCount - 1))}
                className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all text-xl font-black"
              >
                -
              </button>
              <span className="text-4xl font-black w-12 text-center">
                {tierCount}
              </span>
              <button
                onClick={() => setTierCount(tierCount + 1)}
                className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all text-xl font-black"
              >
                +
              </button>
            </div>
          </div>
          <div className="text-right space-y-6">
            <div>
              <p className="text-4xl font-black">
                Total: {tierCount * TIER_PRICE} Gems
              </p>
              {gems < tierCount * TIER_PRICE && (
                <p className="text-[10px] font-bold text-red-400 uppercase tracking-widest mt-2">
                  Insufficient gems — visit the shop
                </p>
              )}
              {gems >= tierCount * TIER_PRICE && (
                <p className="text-[10px] font-bold text-yellow-500 uppercase tracking-widest mt-2">
                  {gems - tierCount * TIER_PRICE} Gems remaining after purchase
                </p>
              )}
            </div>
            <div className="flex gap-4 justify-end">
              <button
                onClick={onGoToShop}
                className="text-[10px] font-black tracking-widest uppercase opacity-40 hover:opacity-100 transition-opacity"
              >
                Visit the Shop
              </button>
              <button
                onClick={() => handlePurchase(tierCount * TIER_PRICE)}
                className="bg-white text-black px-12 py-4 rounded-tr-2xl rounded-bl-2xl text-[10px] font-black tracking-[0.3em] uppercase hover:scale-105 transition-all"
              >
                Confirm Skip
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-24 opacity-20">
          <Crosshair className="text-white scale-150" />
        </div>
      </div>
    </div>
  );
};
