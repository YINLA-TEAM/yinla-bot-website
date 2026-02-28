"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section
      className="bg-background text-foreground relative flex min-h-screen items-center justify-center overflow-hidden select-none"
      id="hero"
    >
      <div className="absolute top-1/4 left-1/4 h-96 w-96 animate-pulse rounded-full bg-blue-500/15 mix-blend-multiply blur-[100px] filter dark:bg-blue-600/20 dark:mix-blend-screen"></div>
      <div className="animation-delay-2000 absolute right-1/4 bottom-1/4 h-96 w-96 animate-pulse rounded-full bg-sky-400/15 mix-blend-multiply blur-[100px] filter dark:bg-sky-500/20 dark:mix-blend-screen"></div>
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col space-y-4 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h1 className="mb-2 text-4xl leading-tight font-extrabold tracking-tight md:text-6xl">
            <span className="bg-linear-to-br from-zinc-500 via-zinc-800 to-zinc-500 bg-clip-text text-6xl text-transparent md:text-8xl dark:from-slate-100 dark:via-slate-500 dark:to-slate-100">
              YINLA
            </span>{" "}
            <br />
            讓你的伺服器
            <br className="block" />
            更有趣、更實用
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-muted-foreground flex flex-wrap items-center justify-center gap-6 pb-2 text-sm"
        >
          <div className="flex items-center gap-2">
            <div className="bg-accent-foreground/10 flex h-8 w-8 items-center justify-center rounded-lg text-zinc-800 transition duration-200 hover:scale-105 hover:bg-red-500/10 hover:text-red-500 dark:text-zinc-200 hover:dark:text-red-500">
              <Icon
                icon="material-symbols:earthquake-rounded"
                className={`size-4`}
              />
            </div>
            <span>地震</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-accent-foreground/10 flex h-8 w-8 items-center justify-center rounded-lg text-zinc-800 transition duration-200 hover:scale-105 hover:bg-yellow-500/10 hover:text-yellow-500 dark:text-zinc-200 hover:dark:text-yellow-500">
              <Icon icon="mdi:baseball" className={`size-4`} />
            </div>
            <span>棒球</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="bg-accent-foreground/10 flex h-8 w-8 items-center justify-center rounded-lg text-zinc-800 transition duration-200 hover:scale-105 hover:bg-blue-500/10 hover:text-blue-500 dark:text-zinc-200 hover:dark:text-blue-500">
              <Icon icon="mdi:google-translate" className={`size-4`} />
            </div>
            <span>翻譯</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="bg-accent-foreground/10 flex h-8 w-8 items-center justify-center rounded-lg text-zinc-800 transition duration-200 hover:scale-105 hover:bg-orange-500/10 hover:text-orange-500 dark:text-zinc-200 hover:dark:text-orange-500">
              <Icon icon="mdi:gas-station" className={`size-4`} />
            </div>
            <span>油價</span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground mx-auto mb-4 max-w-2xl text-lg leading-relaxed md:text-xl">
            從地震報告推播、油價推播、翻譯系統到體育賽事資訊
            <br />
            YINLA 將最實用的數據，無縫整合進你的伺服器，並且不定期更新！
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center gap-4 text-lg sm:flex-row"
        >
          <Button
            variant="default"
            size="lg"
            className="h-12 w-full rounded-full bg-blue-600 px-8 text-white shadow-lg shadow-blue-500/20 transition-transform hover:-translate-y-1 hover:bg-blue-700 sm:w-auto dark:shadow-blue-900/40"
            asChild
          >
            <Link href="https://yincheng.app/bot" target="_blank">
              立即邀請 YINLA
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="bg-background/50 h-12 w-full rounded-full px-8 backdrop-blur-sm transition-transform hover:-translate-y-1 sm:w-auto"
            asChild
          >
            <Link href="https://discord.gg/mnCHdBbh65" target="_blank">
              支援伺服器
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
