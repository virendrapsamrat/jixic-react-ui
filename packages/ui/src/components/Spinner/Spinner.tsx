import type { HTMLAttributes } from "react";
import { cx } from "../../utils/cx";

export interface SpinnerProps extends HTMLAttributes<HTMLSpanElement> {
  label?: string;
  size?: "sm" | "md" | "lg";
}

export function Spinner({ className, label = "Loading", size = "md", ...props }: SpinnerProps) {
  return (
    <span
      aria-label={label}
      className={cx("ui-spinner", size !== "md" && `ui-spinner-${size}`, className)}
      role="status"
      {...props}
    />
  );
}
