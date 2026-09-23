import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type CardGlow = "none" | "primary" | "secondary";

type CardProps<T extends ElementType = "div"> = {
  as?: T;
  children: ReactNode;
  className?: string;
  glow?: CardGlow;
  interactive?: boolean;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

const glowClass: Record<CardGlow, string> = {
  none: "",
  primary: "glow-primary",
  secondary: "glow-secondary",
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
    "metal-card rounded-xl",
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
