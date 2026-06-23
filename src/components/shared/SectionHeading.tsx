import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({ title, subtitle, centered = true, className }: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col gap-4 mb-12", centered && "items-center text-center", className)}>
      <h2 className="headline-lg text-foreground relative inline-block">
        {title}
        <svg
          className="absolute -bottom-2 right-0 w-12 h-3 text-secondary"
          viewBox="0 0 54 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 11.5C12 -0.5 25 -2.5 35 3.5C45 9.5 49 8.5 52 5.5"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </h2>
      {subtitle && (
        <p className="body-lg text-foreground/70 max-w-2xl text-balance">
          {subtitle}
        </p>
      )}
    </div>
  );
}
