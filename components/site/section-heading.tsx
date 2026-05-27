import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-400">
        {eyebrow}
      </p>
      <h2 className="mt-3 break-all text-2xl font-semibold leading-tight text-zinc-950 sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-zinc-600 sm:text-lg">
        {description}
      </p>
    </div>
  );
}
