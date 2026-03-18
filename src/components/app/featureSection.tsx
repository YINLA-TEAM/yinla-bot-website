"use client";

import { motion } from "motion/react";
import { Icon } from "@iconify/react";

const features = [
  {
    icon: "material-symbols:earthquake-rounded",
    title: "地震速報",
    description:
      "即時推播中央氣象署地震報告，包含震度、震央位置與深度資訊，讓你的伺服器成員第一時間掌握地震動態。",
    accent: "red",
    accentClass: {
      bg: "bg-red-500/10 dark:bg-red-500/15",
      border: "border-red-500/20 dark:border-red-400/20",
      text: "text-red-600 dark:text-red-400",
      glow: "shadow-red-500/10 dark:shadow-red-500/20",
      iconBg: "bg-red-500/15 dark:bg-red-500/20",
    },
  },
  {
    icon: "mdi:baseball",
    title: "棒球賽事",
    description:
      "追蹤 CPBL 即時比分、賽程資訊與戰績排名，讓棒球迷不錯過任何精彩時刻。",
    accent: "yellow",
    accentClass: {
      bg: "bg-amber-500/10 dark:bg-amber-500/15",
      border: "border-amber-500/20 dark:border-amber-400/20",
      text: "text-amber-600 dark:text-amber-400",
      glow: "shadow-amber-500/10 dark:shadow-amber-500/20",
      iconBg: "bg-amber-500/15 dark:bg-amber-500/20",
    },
  },
  {
    icon: "mdi:google-translate",
    title: "即時翻譯",
    description:
      "支援多國語言翻譯，只需一個指令即可快速完成翻譯，讓跨語言溝通變得毫不費力。",
    accent: "blue",
    accentClass: {
      bg: "bg-blue-500/10 dark:bg-blue-500/15",
      border: "border-blue-500/20 dark:border-blue-400/20",
      text: "text-blue-600 dark:text-blue-400",
      glow: "shadow-blue-500/10 dark:shadow-blue-500/20",
      iconBg: "bg-blue-500/15 dark:bg-blue-500/20",
    },
  },
  {
    icon: "mdi:gas-station",
    title: "油價推播",
    description:
      "每週自動推播最新油價異動資訊，掌握中油油價漲跌趨勢，精打細算不費心。",
    accent: "orange",
    accentClass: {
      bg: "bg-orange-500/10 dark:bg-orange-500/15",
      border: "border-orange-500/20 dark:border-orange-400/20",
      text: "text-orange-600 dark:text-orange-400",
      glow: "shadow-orange-500/10 dark:shadow-orange-500/20",
      iconBg: "bg-orange-500/15 dark:bg-orange-500/20",
    },
  },
];

export default function FeatureSection() {
  return (
    <section
      className="bg-background text-foreground relative overflow-hidden py-28 select-none md:py-36"
      id="features"
    >
      <div className="absolute top-1/3 right-1/5 h-125 w-125 rounded-full bg-blue-500/8 mix-blend-multiply blur-[120px] filter dark:bg-blue-600/10 dark:mix-blend-screen" />
      <div className="absolute bottom-1/4 left-1/6 h-100 w-100 rounded-full bg-sky-400/8 mix-blend-multiply blur-[100px] filter dark:bg-sky-500/10 dark:mix-blend-screen" />

      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(148,163,184,0.4) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(148,163,184,0.4) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="mb-4 inline-block text-xs font-semibold tracking-[0.25em] text-blue-600 uppercase dark:text-blue-400">
              Features
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-5 text-4xl font-extrabold tracking-tight md:text-5xl"
          >
            <span className="bg-linear-to-br from-zinc-600 via-zinc-900 to-zinc-600 bg-clip-text text-transparent dark:from-slate-100 dark:via-slate-400 dark:to-slate-100 md:leading-16 leading-12">
              你需要的功能
            </span>
            <br />
            <span className="text-foreground/80">我們都幫你準備好了</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground mx-auto max-w-xl text-base leading-relaxed md:text-lg"
          >
            從生活資訊到娛樂功能，YINLA 整合多種實用模組，讓你的 Discord
            伺服器一次到位
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              viewport={{ once: true, margin: "-60px" }}
              whileHover={{ y: -4 }}
              className="group relative"
            >
              <div
                className={`relative h-full rounded-2xl border ${feature.accentClass.border} bg-card/50 dark:bg-card/30 p-7 backdrop-blur-sm transition-all duration-300 hover:shadow-lg md:p-8 ${feature.accentClass.glow} hover:border-opacity-40`}
              >
                <div
                  className={`absolute top-0 right-8 left-8 h-px ${feature.accentClass.bg} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                  style={{
                    background: `linear-gradient(90deg, transparent, var(--accent-line-color, rgba(148,163,184,0.3)), transparent)`,
                  }}
                />

                <div className="flex items-start gap-5">
                  <motion.div
                    whileHover={{ rotate: [0, -8, 8, 0], scale: 1.05 }}
                    transition={{
                      duration: 0.5,
                      ease: "easeInOut",
                    }}
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${feature.accentClass.iconBg} ${feature.accentClass.text} ring-1 ring-current/10 transition-colors duration-300 ring-inset`}
                  >
                    <Icon icon={feature.icon} className="size-6" />
                  </motion.div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-foreground mb-2 text-lg font-bold tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground/90 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>

                <div
                  className={`absolute right-3 bottom-3 size-6 rounded-full ${feature.accentClass.bg} opacity-0 blur-sm transition-all duration-500 group-hover:opacity-60`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto mt-16 h-px max-w-xs bg-linear-to-r from-transparent via-blue-500/30 to-transparent dark:via-blue-400/20"
        />
      </div>
    </section>
  );
}
