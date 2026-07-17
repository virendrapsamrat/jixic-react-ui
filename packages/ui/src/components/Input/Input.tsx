import { forwardRef, type InputHTMLAttributes, useId } from "react";
import { cx } from "../../utils/cx";

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  error?: string;
  helperText?: string;
  label?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, error, helperText, id, label, ...props },
  ref,
) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const descriptionId = helperText ? `${inputId}-help` : undefined;
  const errorId = error ? `${inputId}-error` : undefined;

  return (
    <div className="ui-input-field">
      {label ? (
        <label className="ui-label" htmlFor={inputId}>
          {label}
        </label>
      ) : null}
      <input
        aria-describedby={cx(descriptionId, errorId) || undefined}
        aria-invalid={error ? true : undefined}
        className={cx("ui-input", error && "ui-input-error", className)}
        id={inputId}
        ref={ref}
        {...props}
      />
      {helperText ? (
        <div className="ui-field-help" id={descriptionId}>
          {helperText}
        </div>
      ) : null}
      {error ? (
        <div className="ui-field-error" id={errorId} role="alert">
          {error}
        </div>
      ) : null}
    </div>
  );
});
