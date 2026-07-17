import { forwardRef, type InputHTMLAttributes, useId } from "react";
import { cx } from "../../utils/cx";

export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  description?: string;
  label: string;
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(function Switch(
  { className, description, id, label, ...props },
  ref,
) {
  const generatedId = useId();
  const switchId = id ?? generatedId;
  const descriptionId = description ? `${switchId}-description` : undefined;

  return (
    <label className="ui-switch">
      <span className="ui-choice-copy">
        <span className="ui-choice-label">{label}</span>
        {description ? (
          <span className="ui-choice-description" id={descriptionId}>
            {description}
          </span>
        ) : null}
      </span>
      <input
        aria-describedby={descriptionId}
        className={cx("ui-switch-input", className)}
        id={switchId}
        ref={ref}
        role="switch"
        type="checkbox"
        {...props}
      />
      <span aria-hidden="true" className="ui-switch-track">
        <span className="ui-switch-thumb" />
      </span>
    </label>
  );
});
