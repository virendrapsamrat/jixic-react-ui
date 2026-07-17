import { forwardRef, type HTMLAttributes } from "react";
import { cx } from "../../utils/cx";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "neutral" | "success" | "warning" | "danger";
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(function Badge(
  { className, variant = "neutral", ...props },
  ref,
) {
  return <span className={cx("ui-badge", `ui-badge-${variant}`, className)} ref={ref} {...props} />;
});
