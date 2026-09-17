import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "success" | "warning" | "muted";
  className?: string;
}

export default function Badge({ children, variant = "primary", className }: BadgeProps) {
  const variants = {
    primary: "bg-primary/10 text-primary",
    secondary: "bg-secondary/20 text-yellow-700",
    success: "bg-green-100 text-green-700",
    warning: "bg-orange-100 text-orange-700",
    muted: "bg-muted text-muted-foreground",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
