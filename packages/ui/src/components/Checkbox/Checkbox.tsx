import { forwardRef, type InputHTMLAttributes, useId } from "react";
import { cx } from "../../utils/cx";

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  description?: string;
  error?: string;
  label: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  { className, description, error, id, label, ...props },
  ref,
) {
  const generatedId = useId();
  const checkboxId = id ?? generatedId;
  const descriptionId = description ? `${checkboxId}-description` : undefined;
  const errorId = error ? `${checkboxId}-error` : undefined;

  return (
    <div className="ui-choice-field">
      <label className="ui-choice">
        <input
          aria-describedby={cx(descriptionId, errorId) || undefined}
          aria-invalid={error ? true : undefined}
          className={cx("ui-checkbox", className)}
          id={checkboxId}
          ref={ref}
          type="checkbox"
          {...props}
        />
        <span className="ui-choice-copy">
          <span className="ui-choice-label">{label}</span>
          {description ? (
            <span className="ui-choice-description" id={descriptionId}>
              {description}
            </span>
          ) : null}
        </span>
      </label>
      {error ? (
        <div className="ui-field-error" id={errorId} role="alert">
          {error}
        </div>
      ) : null}
    </div>
  );
});
