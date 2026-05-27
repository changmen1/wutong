import type { ComponentPropsWithoutRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-300 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-zinc-950 text-white shadow-[0_18px_55px_rgba(39,31,27,0.18)] hover:-translate-y-0.5 hover:bg-zinc-800",
        glass:
          "soft-card text-zinc-800 hover:-translate-y-0.5 hover:bg-white",
        ghost: "text-zinc-600 hover:bg-zinc-950 hover:text-white",
      },
      size: {
        sm: "h-9 px-4",
        md: "h-11 px-5",
        lg: "h-12 px-6",
        icon: "size-11 p-0",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "primary",
    },
  },
);

type ButtonProps = ComponentPropsWithoutRef<"button"> &
  VariantProps<typeof buttonVariants>;

export function Button({ className, size, variant, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ size, variant }), className)}
      {...props}
    />
  );
}
