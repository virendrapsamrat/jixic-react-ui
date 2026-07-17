import { forwardRef, type HTMLAttributes } from "react";
import { cx } from "../../utils/cx";

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  height?: number | string;
  width?: number | string;
}

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(function Skeleton(
  { className, height = "1rem", style, width = "100%", ...props },
  ref,
) {
  return (
    <div
      aria-hidden="true"
      className={cx("ui-skeleton", className)}
      ref={ref}
      style={{ height, width, ...style }}
      {...props}
    />
  );
});
