"use client";

import Link from "next/link";

export default function AppFooter() {
  return (
    <div className="border-t">
      <footer className="bg-background text-foreground select-none pt-16 pb-8 max-w-7xl mx-auto">
        <div className="container mx-auto px-6 items-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2 flex flex-col gap-4">
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2 leading-tight text-transparent bg-clip-text bg-linear-to-br from-zinc-500 via-zinc-800 to-zinc-500 dark:from-slate-100 dark:via-slate-500 dark:to-slate-100">
                YINLA
              </h1>
              <p className="text-sm text-muted-foreground max-w-md">
                讓你的伺服器更有趣、更實用
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="mb-4 text-xs font-semibold text-foreground/30">社群</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="https://github.com/YINLA-TEAM/YINLA" target="_blank" className="mx-2 text-accent-foreground/50 hover:text-accent-foreground transition duration-200">
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link href="https://discord.gg/mnCHdBbh65" target="_blank" className="mx-2 text-accent-foreground/50 hover:text-accent-foreground transition duration-200">
                    Discord
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="mb-4 text-xs font-semibold text-foreground/30">條款</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="https://hackmd.io/@YinCheng0106/YINLA_TOS" target="_blank" className="mx-2 text-accent-foreground/50 hover:text-accent-foreground transition duration-200">
                    服務條款
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-center mt-12 border-t pt-6">
            <p className="text-sm text-muted-foreground">
              &copy; 2026 YINLA. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
