import type { CSSProperties, HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type RevealProps = HTMLAttributes<HTMLDivElement> & {
  delay?: number;
};

export function Reveal({
  children,
  className,
  delay = 0,
  style,
  ...props
}: RevealProps) {
  return (
    <div
      {...props}
      className={cn("reveal-up", className)}
      style={
        {
          "--reveal-delay": `${delay}s`,
          ...style,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}
