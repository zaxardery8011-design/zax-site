import type { ReactNode } from "react";

type PageHeroProps = {
  actions?: ReactNode;
  animated?: boolean;
  badge?: ReactNode;
  baseClassName?: string;
  children?: ReactNode;
  className?: string;
  id?: string;
  title: ReactNode;
  titleClassName?: string;
};

export function PageHero({
  actions,
  animated = false,
  badge,
  baseClassName = "px-5 sm:px-6 pt-24 pb-16 md:pt-32 md:pb-20 max-w-5xl mx-auto w-full",
  children,
  className = "",
  id,
  title,
  titleClassName = "text-2xl sm:text-3xl md:text-5xl font-bold leading-tight mb-6",
}: PageHeroProps) {
  const classes = [
    baseClassName,
    animated ? "hero-ambient" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={classes} id={id}>
      {animated ? (
        <div aria-hidden="true" className="hero-motion-layer">
          <span className="hero-grid" />
          <span className="hero-ribbon hero-ribbon-one" />
          <span className="hero-ribbon hero-ribbon-two" />
        </div>
      ) : null}
      {badge ? (
        <div className="text-xs tracking-[0.3em] text-[color:var(--accent-cyan)] mb-6">
          {badge}
        </div>
      ) : null}
      <h1 className={titleClassName}>{title}</h1>
      {children ? (
        <div className="text-[color:var(--fg-1)] text-base md:text-lg max-w-3xl leading-relaxed">
          {children}
        </div>
      ) : null}
      {actions ? <div className="flex flex-wrap gap-3 mt-10">{actions}</div> : null}
    </section>
  );
}
