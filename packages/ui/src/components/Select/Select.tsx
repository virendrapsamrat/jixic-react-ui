import { forwardRef, type SelectHTMLAttributes, useId } from "react";
import { cx } from "../../utils/cx";

export interface SelectOption {
  disabled?: boolean;
  label: string;
  value: string;
}

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "children"> {
  error?: string;
  helperText?: string;
  label?: string;
  options: SelectOption[];
  placeholder?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { className, error, helperText, id, label, options, placeholder, ...props },
  ref,
) {
  const generatedId = useId();
  const selectId = id ?? generatedId;
  const descriptionId = helperText ? `${selectId}-help` : undefined;
  const errorId = error ? `${selectId}-error` : undefined;

  return (
    <div className="ui-input-field">
      {label ? (
        <label className="ui-label" htmlFor={selectId}>
          {label}
        </label>
      ) : null}
      <select
        aria-describedby={cx(descriptionId, errorId) || undefined}
        aria-invalid={error ? true : undefined}
        className={cx("ui-input", "ui-select", error && "ui-input-error", className)}
        id={selectId}
        ref={ref}
        {...props}
      >
        {placeholder ? (
          <option value="" disabled>
            {placeholder}
          </option>
        ) : null}
        {options.map((option) => (
          <option disabled={option.disabled} key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
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
