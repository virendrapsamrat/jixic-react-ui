import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import { cx } from "../../utils/cx";

export interface AlertProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  title?: ReactNode;
  variant?: "info" | "success" | "warning" | "danger";
}

export const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  { children, className, title, variant = "info", ...props },
  ref,
) {
  const role = variant === "danger" || variant === "warning" ? "alert" : "status";

  return (
    <div
      className={cx("ui-alert", `ui-alert-${variant}`, className)}
      ref={ref}
      role={role}
      {...props}
    >
      {title ? <div className="ui-alert-title">{title}</div> : null}
      <div>{children}</div>
    </div>
  );
});
