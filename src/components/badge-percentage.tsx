import { cn } from "@/lib/utils";
import { ArrowDownLeft, ArrowUpRight } from "lucide-react";

export function BadgePercentage({ className, direction }: { className?: string, direction?: "up" | "down" }) {
  return (
    <span className={cn(
      "flex items-center rounded border",
      direction === "up" ? "text-success border-success shadow-custom-green" : "text-red-500 border-red-500 shadow-custom-red",
      className
      )}>
      {direction === "up" ? <ArrowUpRight /> : <ArrowDownLeft />}
      2.13%
    </span>
  )
}