"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background text-foreground select-none overflow-hidden" id="hero">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/15 dark:bg-blue-600/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sky-400/15 dark:bg-sky-500/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] animate-pulse animation-delay-2000"></div>
      
      <div className="relative flex flex-col space-y-4 z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-2 leading-tight">
            <span className="text-6xl md:text-8xl text-transparent bg-clip-text bg-linear-to-br from-zinc-500 via-zinc-800 to-zinc-500 dark:from-slate-100 dark:via-slate-500 dark:to-slate-100">YINLA</span> <br/>
            讓你的伺服器<br className="block"/>
            更有趣、更實用
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-6 pb-2 text-sm text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-foreground/10 hover:scale-105 hover:bg-red-500/10 hover:text-red-500 hover:dark:text-red-500 text-zinc-800 dark:text-zinc-200 transition duration-200">
              <Icon icon="material-symbols:earthquake-rounded" className={`size-4`}/>
            </div>
            <span>地震</span>
          </div>
  
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-foreground/10 hover:scale-105 hover:bg-yellow-500/10 hover:text-yellow-500 hover:dark:text-yellow-500 text-zinc-800 dark:text-zinc-200  transition duration-200">
              <Icon icon="mdi:baseball" className={`size-4`}/>
            </div>
            <span>棒球</span>
          </div>
  
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-foreground/10 hover:scale-105 hover:bg-blue-500/10 hover:text-blue-500 hover:dark:text-blue-500 text-zinc-800 dark:text-zinc-200 transition duration-200">
              <Icon icon="mdi:google-translate" className={`size-4`}/>
            </div>
            <span>翻譯</span>
          </div>
  
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-foreground/10 hover:scale-105 hover:bg-orange-500/10 hover:text-orange-500 hover:dark:text-orange-500 text-zinc-800 dark:text-zinc-200  transition duration-200">
              <Icon icon="mdi:gas-station" className={`size-4`}/>
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
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed">
            從地震報告推播、油價推播、翻譯系統到體育賽事資訊<br/>YINLA 將最實用的數據，無縫整合進你的伺服器，並且不定期更新！
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 text-lg"
        >
          <Button variant="default" size="lg" className="rounded-full w-full sm:w-auto h-12 px-8 shadow-lg shadow-blue-500/20 dark:shadow-blue-900/40 transition-transform hover:-translate-y-1 bg-blue-600 hover:bg-blue-700 text-white" asChild>
            <Link href="https://yincheng.app/bot" target="_blank">
              立即邀請 YINLA
            </Link>
          </Button>
          <Button variant="outline" size="lg" className="rounded-full w-full sm:w-auto h-12 px-8 transition-transform hover:-translate-y-1 backdrop-blur-sm bg-background/50" asChild>
            <Link href="https://discord.gg/mnCHdBbh65" target="_blank">支援伺服器</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}