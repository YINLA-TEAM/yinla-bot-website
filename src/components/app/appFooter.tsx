"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";

export default function AppFooter() {
  return (
    <div>
      <footer className="bg-background text-foreground py-6 mt-12 border-t select-none">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            &copy; 2026 YINLA. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="https://yincheng.app/bot">
              邀請 YINLA
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
