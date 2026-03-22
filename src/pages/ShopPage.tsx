import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, Check } from "lucide-react";
import { Crosshair } from "../components/KPRComponents";

const PACKS = [
  { amount: 500, price: "₹199", bonus: "", popular: false },
  { amount: 1200, price: "₹399", bonus: "+100 Bonus", popular: true },
  { amount: 2500, price: "₹799", bonus: "+300 Bonus", popular: false },
];

export const ShopPage = ({ onBack }: { onBack: () => void }) => {
  const [purchased, setPurchased] = useState<number | null>(null);

  const handleBuy = (amount: number) => {
    setPurchased(amount);
    setTimeout(() => setPurchased(null), 2500);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header */}
      <div className="relative h-[40vh] flex flex-col justify-end p-6 md:p-12 overflow-hidden bg-black">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src="https://images.stockcake.com/public/f/9/5/f95f705a-1bcb-4c70-8b2c-dd21a5bc2664_large/dawn-tactical-mission-stockcake.jpg"
            alt="Shop"
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
          <div>
            <span className="text-[10px] font-mono text-white/40 mb-2 block tracking-[0.4em]">
              EXCHANGE // MARKETPLACE
            </span>
            <h1 className="kpr-heading text-6xl md:text-[8vw] leading-[0.85]">
              GEM SHOP.
            </h1>
          </div>
        </div>

        <div className="absolute top-32 right-12 hidden lg:flex flex-col items-end gap-2 text-white/20 font-mono text-[9px]">
          <p>MARKET_STATUS: OPEN</p>
          <p>CURRENCY: GEMS</p>
          <p>REGION: GLOBAL</p>
        </div>
      </div>

      {/* Purchase Success Toast */}
      <AnimatePresence>
        {purchased !== null && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            className="fixed bottom-12 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-4 bg-white text-black px-8 py-4 rounded-tr-2xl rounded-bl-2xl shadow-2xl"
          >
            <Check size={16} />
            <span className="text-[10px] font-black tracking-widest uppercase">
              {purchased} Gems Added to Your Account
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Shop Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        {/* Info Banner */}
        <div className="p-8 border border-white/10 rounded-tr-2xl rounded-bl-2xl bg-white/5 mb-16 flex flex-col md:flex-row gap-6 items-center justify-between">
          <div>
            <p className="text-[9px] font-black tracking-widest uppercase opacity-40 mb-1">
              Current Balance
            </p>
            <p className="text-3xl font-black">800 GEMS</p>
          </div>
          <p className="text-[10px] font-bold opacity-40 uppercase tracking-widest max-w-sm text-right leading-relaxed">
            Gems are used to purchase premium passes, skip tiers, and unlock
            exclusive content.
          </p>
        </div>

        {/* Gem Packs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
          {PACKS.map((pack, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              onClick={() => handleBuy(pack.amount)}
              className={`relative p-10 border rounded-tr-[4rem] rounded-bl-[4rem] text-center group cursor-pointer transition-all hover:bg-white hover:text-black ${
                pack.popular ? "border-white bg-white/5" : "border-white/10"
              }`}
            >
              {pack.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-black px-4 py-1 text-[8px] font-black tracking-widest uppercase">
                  Best Value
                </span>
              )}
              <p className="text-5xl font-black mb-2">{pack.amount}</p>
              <p className="text-[10px] font-black tracking-widest uppercase opacity-40 group-hover:text-black/60 mb-4">
                Gems
              </p>
              {pack.bonus && (
                <p className="text-[10px] font-black text-yellow-500 group-hover:text-yellow-600 mb-6">
                  {pack.bonus}
                </p>
              )}
              {!pack.bonus && <div className="mb-6" />}
              <p className="text-2xl font-black mb-8">{pack.price}</p>
              <button className="w-full py-3 bg-black text-white group-hover:bg-black group-hover:text-white border border-white/20 group-hover:border-black rounded-tr-xl rounded-bl-xl text-[10px] font-black tracking-widest uppercase transition-all">
                Purchase
              </button>
            </motion.div>
          ))}
        </div>

        {/* FAQ / Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              q: "What are Gems?",
              a: "Gems are the premium currency in LILA. Use them to unlock Battle Pass tiers, skip levels, and purchase exclusive cosmetics.",
            },
            {
              q: "Do Gems expire?",
              a: "Gems never expire. They carry over between seasons and can be used at any time.",
            },
            {
              q: "Can I earn Gems for free?",
              a: "Yes — completing certain missions and reaching milestone tiers rewards you with bonus Gems.",
            },
            {
              q: "Is my purchase secure?",
              a: "All transactions are encrypted and processed through secure payment channels. Your data is never stored.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-8 border border-white/10 rounded-tr-2xl rounded-bl-2xl bg-white/[0.02]"
            >
              <p className="text-[10px] font-black tracking-widest uppercase mb-3">
                {item.q}
              </p>
              <p className="text-sm text-white/60 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-24 opacity-20">
          <Crosshair className="text-white scale-150" />
        </div>
      </div>
    </div>
  );
};
