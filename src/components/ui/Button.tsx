import Link from "next/link";
import { type ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import clsx from "clsx";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "neon" | "ghost" | "white";
  size?: "md" | "lg";
  showArrow?: boolean;
  className?: string;
  onClick?: () => void;
};

export function Button({
  href,
  children,
  variant = "neon",
  size = "md",
  showArrow = false,
  className,
  onClick,
}: ButtonProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={clsx(
        "inline-flex items-center justify-center gap-2 rounded-full whitespace-nowrap transition-colors",
        size === "lg" ? "px-7 py-3.5 text-base" : "px-6 py-3 text-base",
        variant === "neon" ? "btn-neon" : variant === "white" ? "btn-white" : "btn-ghost",
        className
      )}
    >
      {children}
      {showArrow && <ArrowRight className="size-4" strokeWidth={2.25} />}
    </Link>
  );
}
