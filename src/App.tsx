import React, { useState } from "react";
import { Navbar, Hero, StorySection, KeeperSection, PowerSection, CollectiblesSection, CrystalSection, WorldSection, FinalSection, Footer } from "./components/KPRComponents";
import { XPGainAnimation } from "./components/AppScreens";
import { MissionsPage } from "./pages/MissionsPage";
import { RewardsPage } from "./pages/RewardsPage";
import { PurchasePage } from "./pages/PurchasePage";
import { ShopPage } from "./pages/ShopPage";
import { motion, useScroll, useSpring, AnimatePresence } from "motion/react";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState("rewards");
  const [xpAnimation, setXpAnimation] = useState<string | null>(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const handleNavigate = (screen: string) => {
    setCurrentScreen(screen);
    window.scrollTo(0, 0);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case "missions":
        return <MissionsPage onBack={() => handleNavigate("home")} />;
      case "rewards":
        return <RewardsPage onBack={() => handleNavigate("home")} />;
      case "purchase":
        return (
          <PurchasePage
            onBack={() => handleNavigate("home")}
            onGoToShop={() => handleNavigate("shop")}
          />
        );
      case "shop":
        return <ShopPage onBack={() => handleNavigate("home")} />;
      default:
        return (
          <main>
            <Hero />
            <StorySection />
            <KeeperSection />
            <PowerSection />
            <CrystalSection />
            <CollectiblesSection />
            <WorldSection
              id="weekly-missions"
              number="005"
              title="WEEKLY MISSIONS"
              subtitle="High-stakes objectives for elite operators. Complete these to earn massive XP boosts and exclusive rewards."
              image="https://images.stockcake.com/public/1/5/5/155ed40e-7822-435d-ad7e-3d3e5fadef7a_large/armed-tactical-operator-stockcake.jpg"
            />

            <div className="bg-black text-white py-24 px-6 md:px-12">
              <div className="max-w-7xl mx-auto space-y-6">
                {[
                  { title: "Win 5 Extraction Matches", progress: "5/5", reward: "+2000 XP", action: "Claim" },
                  { title: "Eliminate 25 Enemies Using Assault Rifles", progress: "12/25", reward: "+1500 XP", action: "Reroll" },
                ].map((m, i) => (
                  <div
                    key={i}
                    className="p-8 border border-white/10 rounded-tr-[3rem] rounded-bl-[3rem] flex justify-between items-center group hover:bg-white hover:text-black transition-all"
                  >
                    <div className="space-y-2">
                      <p className="text-sm font-black tracking-widest uppercase">{m.title}</p>
                      <div className="flex gap-6 text-[10px] font-bold opacity-60 uppercase">
                        <span>{m.progress}</span>
                        <span>{m.reward}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        if (m.action === "Claim") {
                          setXpAnimation(m.reward);
                          handleNavigate("missions");
                        } else {
                          handleNavigate("missions");
                        }
                      }}
                      className={`px-8 py-3 rounded-full text-[10px] font-black tracking-widest uppercase border ${
                        m.action === "Claim"
                          ? "bg-white text-black border-white group-hover:bg-black group-hover:text-white"
                          : "border-white/20 group-hover:border-black/40"
                      }`}
                    >
                      {m.action}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <WorldSection
              id="operation-blackout"
              number="006"
              title="OPERATION BLACKOUT"
              subtitle="The hunt begins. 90 days of intense tactical combat. Will you become a legend or fade into the shadows?"
              image="https://images.stockcake.com/public/1/6/c/16cd7957-770a-41e8-aea6-fb28e9673828_large/armed-tactical-officer-stockcake.jpg"
            />

            <FinalSection />
          </main>
        );
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden selection:bg-kpr-ink selection:text-white bg-[#0a0a0a]">
      {currentScreen === "home" && (
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-white z-[100] origin-left"
          style={{ scaleX }}
        />
      )}

      <Navbar onNavigate={handleNavigate} currentScreen={currentScreen} />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentScreen}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {renderScreen()}
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {xpAnimation && (
          <XPGainAnimation
            amount={xpAnimation}
            onComplete={() => setXpAnimation(null)}
          />
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
