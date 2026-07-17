import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import { cx } from "../../utils/cx";

export interface EmptyStateProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  action?: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  title: ReactNode;
}

export const EmptyState = forwardRef<HTMLDivElement, EmptyStateProps>(function EmptyState(
  { action, className, description, icon, title, ...props },
  ref,
) {
  return (
    <section className={cx("ui-empty-state", className)} ref={ref} {...props}>
      {icon ? <div aria-hidden="true">{icon}</div> : null}
      <h2 className="ui-empty-state-title">{title}</h2>
      {description ? <p className="ui-empty-state-description">{description}</p> : null}
      {action}
    </section>
  );
});
