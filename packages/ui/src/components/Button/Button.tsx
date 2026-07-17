import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { Spinner } from "../Spinner/Spinner";
import { cx } from "../../utils/cx";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "ghost" | "danger";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    children,
    className,
    disabled,
    isLoading = false,
    leftIcon,
    rightIcon,
    size = "md",
    type = "button",
    variant = "primary",
    ...props
  },
  ref,
) {
  return (
    <button
      className={cx(
        "ui-button",
        `ui-button-${variant}`,
        size !== "md" && `ui-button-${size}`,
        className,
      )}
      data-loading={isLoading ? "true" : undefined}
      disabled={disabled || isLoading}
      ref={ref}
      type={type}
      {...props}
    >
      {isLoading ? <Spinner label="Loading" size="sm" /> : leftIcon}
      <span>{children}</span>
      {!isLoading ? rightIcon : null}
    </button>
  );
});
