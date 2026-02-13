import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "primary";
  className?: string;
}

const variants = {
  default: "bg-neutral-100 text-neutral-700",
  accent: "bg-accent-100 text-accent-800",
  primary: "bg-primary-100 text-primary-800",
};

export default function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
