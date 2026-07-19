import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-accent-gradient text-white hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] shadow-[0_4px_20px_-4px_rgba(139,92,246,0.3)] hover:shadow-[0_8px_30px_-4px_rgba(139,92,246,0.4)]",
        outline:
          "border border-line bg-white/[0.02] text-primary hover:bg-white/[0.05] hover:border-accent/40 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
        ghost: "text-secondary hover:text-primary hover:bg-white/[0.04]",
        secondary: "bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4",
        lg: "h-12 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
