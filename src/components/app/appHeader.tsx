"use client";

import Link from "next/link";
import { ModeToggle } from "@/components/app/themeSwitch"
import { Button } from "../ui/button";

export default function AppHeader() {
  return (
    <div className="fixed flex items-center justify-between w-full backdrop-blur-sm p-4 top-0 z-50 select-none">
      <Link href="/" className="font-semibold">
        <div className="flex items-center gap-2">
          <h1 className="text-lg ">YINLA</h1>
        </div>
      </Link>
      <div className="flex items-center gap-4">
        <Button variant="default" asChild className="rounded-lg h-8 bg-blue-600 hover:bg-blue-700 text-white">
          <Link href="https://yincheng.app/bot" target="_blank">
            邀請 YINLA
          </Link>
        </Button>
        <ModeToggle />
      </div>
    </div>
  )
}
