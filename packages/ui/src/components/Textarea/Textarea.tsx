import { forwardRef, type TextareaHTMLAttributes, useId } from "react";
import { cx } from "../../utils/cx";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
  helperText?: string;
  label?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { className, error, helperText, id, label, rows = 4, ...props },
  ref,
) {
  const generatedId = useId();
  const textareaId = id ?? generatedId;
  const descriptionId = helperText ? `${textareaId}-help` : undefined;
  const errorId = error ? `${textareaId}-error` : undefined;

  return (
    <div className="ui-input-field">
      {label ? (
        <label className="ui-label" htmlFor={textareaId}>
          {label}
        </label>
      ) : null}
      <textarea
        aria-describedby={cx(descriptionId, errorId) || undefined}
        aria-invalid={error ? true : undefined}
        className={cx("ui-input", "ui-textarea", error && "ui-input-error", className)}
        id={textareaId}
        ref={ref}
        rows={rows}
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
