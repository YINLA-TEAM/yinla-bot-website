"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";

export default function AppFooter() {
  return (
    <div>
      <footer className="bg-background text-foreground py-6 mt-12 border-t select-none">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            &copy; 2026 YINLA. All rights reserved.
          </p>
          <div className="flex items-center mb-4 md:mb-0">
            <Link href="https://github.com/YINLA-TEAM/YINLA" target="_blank" className="mx-2">
              <Icon icon="mdi:github" className={`size-5 hover:text-foreground/80 transition-colors`} />
            </Link>
            <Link href="https://discord.gg/mnCHdBbh65" target="_blank" className="mx-2">
              <Icon icon="ic:baseline-discord" className={`size-5 hover:text-foreground/80 transition-colors`} />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="default" asChild className="rounded-lg h-8 bg-blue-600 hover:bg-blue-700 text-white">
              <Link href="https://yincheng.app/bot" target="_blank">
                邀請 YINLA
              </Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}
