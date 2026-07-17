import { type ReactNode, useId, useMemo, useState } from "react";
import { cx } from "../../utils/cx";

export interface TabItem {
  content: ReactNode;
  disabled?: boolean;
  label: ReactNode;
  value: string;
}

export interface TabsProps {
  "aria-label"?: string;
  className?: string;
  defaultValue?: string;
  items: TabItem[];
  onValueChange?: (value: string) => void;
  value?: string;
}

export function Tabs({
  "aria-label": ariaLabel,
  className,
  defaultValue,
  items,
  onValueChange,
  value,
}: TabsProps) {
  const generatedId = useId();
  const firstEnabledValue = useMemo(() => items.find((item) => !item.disabled)?.value, [items]);
  const [internalValue, setInternalValue] = useState(defaultValue ?? firstEnabledValue);
  const selectedValue = value ?? internalValue;
  const selectedItem = items.find((item) => item.value === selectedValue) ?? items[0];

  function selectTab(nextValue: string) {
    setInternalValue(nextValue);
    onValueChange?.(nextValue);
  }

  return (
    <div className={cx("ui-tabs", className)}>
      <div aria-label={ariaLabel} className="ui-tab-list" role="tablist">
        {items.map((item) => {
          const isSelected = item.value === selectedItem?.value;
          const tabId = `${generatedId}-${item.value}-tab`;
          const panelId = `${generatedId}-${item.value}-panel`;

          return (
            <button
              aria-controls={panelId}
              aria-selected={isSelected}
              className="ui-tab"
              disabled={item.disabled}
              id={tabId}
              key={item.value}
              onClick={() => selectTab(item.value)}
              role="tab"
              tabIndex={isSelected ? 0 : -1}
              type="button"
            >
              {item.label}
            </button>
          );
        })}
      </div>
      {selectedItem ? (
        <div
          aria-labelledby={`${generatedId}-${selectedItem.value}-tab`}
          className="ui-tab-panel"
          id={`${generatedId}-${selectedItem.value}-panel`}
          role="tabpanel"
        >
          {selectedItem.content}
        </div>
      ) : null}
    </div>
  );
}
