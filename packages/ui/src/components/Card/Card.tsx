import { forwardRef, type HTMLAttributes } from "react";
import { cx } from "../../utils/cx";

export type CardProps = HTMLAttributes<HTMLDivElement>;
export type CardHeaderProps = HTMLAttributes<HTMLDivElement>;
export type CardContentProps = HTMLAttributes<HTMLDivElement>;
export type CardFooterProps = HTMLAttributes<HTMLDivElement>;

export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  { className, ...props },
  ref,
) {
  return <div className={cx("ui-card", className)} ref={ref} {...props} />;
});

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(function CardHeader(
  { className, ...props },
  ref,
) {
  return <div className={cx("ui-card-header", className)} ref={ref} {...props} />;
});

export const CardContent = forwardRef<HTMLDivElement, CardContentProps>(function CardContent(
  { className, ...props },
  ref,
) {
  return <div className={cx("ui-card-content", className)} ref={ref} {...props} />;
});

export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(function CardFooter(
  { className, ...props },
  ref,
) {
  return <div className={cx("ui-card-footer", className)} ref={ref} {...props} />;
});
