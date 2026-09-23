import type { ReactNode } from "react";

type Accent = "primary" | "secondary";

type SectionHeaderProps = {
  accent?: Accent;
  badge?: ReactNode;
  children?: ReactNode;
  className?: string;
  descriptionClassName?: string;
  headingClassName?: string;
  title: ReactNode;
  titleClassName?: string;
};

const accentClass: Record<Accent, string> = {
  primary: "text-[color:var(--label)]",
  secondary: "text-[color:var(--label)]",
};

export function SectionHeader({
  accent = "primary",
  badge,
  children,
  className = "",
  descriptionClassName = "mb-10",
  headingClassName,
  title,
  titleClassName = "mb-4",
}: SectionHeaderProps) {
  const resolvedHeadingClassName =
    headingClassName ?? `text-2xl sm:text-3xl md:text-4xl font-bold ${titleClassName}`;

  return (
    <div className={className}>
      {badge ? (
        <div className={`text-xs tracking-[0.3em] ${accentClass[accent]} mb-3`}>
          {badge}
        </div>
      ) : null}
      <h2 className={resolvedHeadingClassName}>{title}</h2>
      {children ? (
        <p className={`text-[color:var(--fg-1)] leading-relaxed max-w-3xl ${descriptionClassName}`}>
          {children}
        </p>
      ) : null}
    </div>
  );
}
