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
    // 不加 noreferrer：全站 Referrer-Policy 已是 strict-origin-when-cross-origin，只送出 https://www.zax.com.tw/；
    // 加了反而讓 GitHub 流量報表看不到使用者是從官網點進 repo 的。
    const safeRel = target === "_blank" ? rel ?? "noopener" : rel;

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
