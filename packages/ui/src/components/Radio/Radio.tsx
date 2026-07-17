import { forwardRef, type InputHTMLAttributes, type ReactNode, useId } from "react";
import { cx } from "../../utils/cx";

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  description?: string;
  label: string;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(function Radio(
  { className, description, id, label, ...props },
  ref,
) {
  const generatedId = useId();
  const radioId = id ?? generatedId;
  const descriptionId = description ? `${radioId}-description` : undefined;

  return (
    <label className="ui-choice">
      <input
        aria-describedby={descriptionId}
        className={cx("ui-radio", className)}
        id={radioId}
        ref={ref}
        type="radio"
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
  );
});

export interface RadioGroupProps {
  children: ReactNode;
  error?: string;
  label: string;
}

export function RadioGroup({ children, error, label }: RadioGroupProps) {
  return (
    <fieldset className="ui-radio-group">
      <legend className="ui-label">{label}</legend>
      <div className="ui-radio-options">{children}</div>
      {error ? (
        <div className="ui-field-error" role="alert">
          {error}
        </div>
      ) : null}
    </fieldset>
  );
}
