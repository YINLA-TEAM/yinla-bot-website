"use client";

import Link from "next/link";
import { ModeToggle } from "@/components/app/themeSwitch";
import { Button } from "../ui/button";

export default function AppHeader() {
  return (
    <div className="fixed top-0 z-50 flex w-full items-center justify-between p-4 backdrop-blur-sm select-none">
      <Link href="/" className="font-semibold">
        <div className="flex items-center gap-2">
          <h1 className="text-lg">YINLA</h1>
        </div>
      </Link>
      <div className="flex items-center gap-4">
        <Button
          variant="default"
          asChild
          className="h-8 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
        >
          <Link href="https://yincheng.app/bot" target="_blank">
            邀請 YINLA
          </Link>
        </Button>
        <ModeToggle />
      </div>
    </div>
  );
}
