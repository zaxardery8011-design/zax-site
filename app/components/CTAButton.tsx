import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type CTAButtonVariant = "primary" | "ghost";

type CTAButtonProps = {
  children: ReactNode;
  className?: string;
  href: string;
  variant?: CTAButtonVariant;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children" | "className" | "href">;

const variantClass: Record<CTAButtonVariant, string> = {
  primary: "btn-primary",
  ghost: "btn-ghost",
};

function isExternalHref(href: string) {
  return /^(https?:|mailto:|tel:)/.test(href);
}

export function CTAButton({
  children,
  className = "",
  href,
  rel,
  target,
  variant = "primary",
  ...props
}: CTAButtonProps) {
  const classes = [
    "px-5 py-2.5 rounded-md text-sm transition",
    variantClass[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (isExternalHref(href)) {
    const safeRel = target === "_blank" ? rel ?? "noopener noreferrer" : rel;

    return (
      <a className={classes} href={href} rel={safeRel} target={target} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link className={classes} href={href} {...props}>
      {children}
    </Link>
  );
}
