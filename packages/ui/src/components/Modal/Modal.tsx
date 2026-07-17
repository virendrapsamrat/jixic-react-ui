import {
  forwardRef,
  type HTMLAttributes,
  type KeyboardEvent,
  type MouseEvent,
  type ReactNode,
  useEffect,
  useId,
  useRef,
} from "react";
import { cx } from "../../utils/cx";

export interface ModalProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  children: ReactNode;
  closeLabel?: string;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  title: ReactNode;
}

function getFocusable(container: HTMLElement): HTMLElement[] {
  return Array.from(
    container.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',
    ),
  ).filter((element) => !element.hasAttribute("disabled") && element.tabIndex !== -1);
}

export const Modal = forwardRef<HTMLDivElement, ModalProps>(function Modal(
  { children, className, closeLabel = "Close dialog", isOpen, onOpenChange, title, ...props },
  ref,
) {
  const titleId = useId();
  const dialogRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousActiveElement =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const focusable = dialogRef.current ? getFocusable(dialogRef.current) : [];
    focusable[0]?.focus();

    return () => {
      previousActiveElement?.focus();
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  function handleOverlayClick(event: MouseEvent<HTMLDivElement>) {
    if (event.target === event.currentTarget) {
      onOpenChange(false);
    }
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Escape") {
      onOpenChange(false);
      return;
    }

    if (event.key !== "Tab" || !dialogRef.current) {
      return;
    }

    const focusable = getFocusable(dialogRef.current);
    if (focusable.length === 0) {
      return;
    }

    const first = focusable[0];
    const last = focusable.at(-1);

    if (!first || !last) {
      return;
    }

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  return (
    <div className="ui-modal-overlay" onClick={handleOverlayClick}>
      <div
        aria-labelledby={titleId}
        aria-modal="true"
        className={cx("ui-modal", className)}
        onKeyDown={handleKeyDown}
        ref={(node) => {
          dialogRef.current = node;
          if (typeof ref === "function") {
            ref(node);
          } else if (ref) {
            ref.current = node;
          }
        }}
        role="dialog"
        {...props}
      >
        <div className="ui-modal-header">
          <h2 className="ui-modal-title" id={titleId}>
            {title}
          </h2>
          <button
            aria-label={closeLabel}
            className="ui-modal-close"
            onClick={() => onOpenChange(false)}
            type="button"
          >
            ×
          </button>
        </div>
        <div className="ui-modal-body">{children}</div>
      </div>
    </div>
  );
});
