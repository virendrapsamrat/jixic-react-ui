import { type HTMLAttributes } from "react";
import { cx } from "../../utils/cx";

export interface AvatarProps extends HTMLAttributes<HTMLSpanElement> {
  alt: string;
  fallback?: string;
  size?: "sm" | "md" | "lg";
  src?: string;
}

export function Avatar({ alt, className, fallback, size = "md", src, ...props }: AvatarProps) {
  const initials =
    fallback ??
    alt
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase())
      .join("");

  return (
    <span className={cx("ui-avatar", `ui-avatar-${size}`, className)} {...props}>
      {src ? <img alt={alt} className="ui-avatar-image" src={src} /> : initials}
    </span>
  );
}
