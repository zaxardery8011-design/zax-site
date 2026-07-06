import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type CardGlow = "none" | "cyan" | "purple";

type CardProps<T extends ElementType = "div"> = {
  as?: T;
  children: ReactNode;
  className?: string;
  glow?: CardGlow;
  interactive?: boolean;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

const glowClass: Record<CardGlow, string> = {
  none: "",
  cyan: "glow-cyan",
  purple: "glow-purple",
};

export function Card<T extends ElementType = "div">({
  as,
  children,
  className = "",
  glow = "none",
  interactive = true,
  ...props
}: CardProps<T>) {
  const Component = as ?? "div";
  const classes = [
    "glass rounded-xl",
    glowClass[glow],
    interactive ? "card-hover" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
}
