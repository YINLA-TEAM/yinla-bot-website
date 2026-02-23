import Link from "next/link"
import { Metadata } from "next"
import { CircleQuestionMarkIcon } from "lucide-react"

import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "404 Not Found",
  description: "The page you are looking for does not exist.",
}

export default function NotFoundPage() {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon" className="flex items-center justify-center">
            <CircleQuestionMarkIcon className="w-8 h-8" />
          </EmptyMedia>
          <EmptyTitle>
            404
          </EmptyTitle>
          <EmptyDescription>
            Not Found
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
        <Button asChild variant="outline">
          <Link href="/">
            Go Home
          </Link>
        </Button>
        </EmptyContent>
      </Empty>
    </div>
  )
}
