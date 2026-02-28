"use client";

import Link from "next/link";

export default function AppFooter() {
  return (
    <div className="border-t">
      <footer className="bg-background text-foreground mx-auto max-w-7xl pt-16 pb-8 select-none">
        <div className="container mx-auto items-center px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="flex flex-col gap-4 md:col-span-2">
              <h1 className="mb-2 bg-linear-to-br from-zinc-500 via-zinc-800 to-zinc-500 bg-clip-text text-3xl leading-tight font-extrabold tracking-tight text-transparent md:text-4xl dark:from-slate-100 dark:via-slate-500 dark:to-slate-100">
                YINLA
              </h1>
              <p className="text-muted-foreground max-w-md text-sm">
                讓你的伺服器更有趣、更實用
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-foreground/30 mb-4 text-xs font-semibold">
                社群
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="https://github.com/YINLA-TEAM/YINLA"
                    target="_blank"
                    className="text-accent-foreground/50 hover:text-accent-foreground mx-2 transition duration-200"
                  >
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://discord.gg/mnCHdBbh65"
                    target="_blank"
                    className="text-accent-foreground/50 hover:text-accent-foreground mx-2 transition duration-200"
                  >
                    Discord
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-foreground/30 mb-4 text-xs font-semibold">
                條款
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="https://hackmd.io/@YinCheng0106/YINLA_TOS"
                    target="_blank"
                    className="text-accent-foreground/50 hover:text-accent-foreground mx-2 transition duration-200"
                  >
                    服務條款
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 flex items-center justify-center border-t pt-6">
            <p className="text-muted-foreground text-sm">
              &copy; 2026 YINLA. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
